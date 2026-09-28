// =========================================================================
// MÓDULO DE RENDERIZAÇÃO E ROTEAMENTO (router.js)
// =========================================================================

/**
 * Utilitário para higienização de strings contra ataques XSS.
 */
function escapeHTML(str = '') {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function isSafeContentUrl(value, { iframe = false } = {}) {
    const raw = String(value || '').trim();
    if (!raw || /[\u0000-\u001f\\]/.test(raw) || raw.startsWith('//')) return false;

    let parsed;
    try {
        parsed = new URL(raw, window.location.href);
    } catch (error) {
        return false;
    }

    if (iframe) {
        return parsed.protocol === 'https:'
            && ['www.youtube.com', 'youtube.com', 'www.youtube-nocookie.com', 'youtube-nocookie.com'].includes(parsed.hostname)
            && /^\/embed\/[\w-]+/.test(parsed.pathname);
    }

    if (['http:', 'https:', 'mailto:', 'tel:'].includes(parsed.protocol)) return true;
    return !/^[a-z][a-z0-9+.-]*:/i.test(raw);
}

function sanitizeBioHTML(html = '') {
    const allowedTags = new Set(['P', 'H3', 'H4', 'STRONG', 'B', 'EM', 'I', 'U', 'BR', 'A', 'UL', 'OL', 'LI', 'DIV', 'SPAN', 'IFRAME']);
    const parser = new DOMParser();
    const source = parser.parseFromString(`<body>${String(html)}</body>`, 'text/html').body;
    const output = document.createElement('div');

    function copyChildren(sourceNode, targetNode) {
        sourceNode.childNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                targetNode.appendChild(document.createTextNode(node.nodeValue || ''));
                return;
            }
            if (node.nodeType !== Node.ELEMENT_NODE) return;

            const tag = node.tagName.toUpperCase();
            if (['SCRIPT', 'STYLE', 'OBJECT', 'EMBED', 'SVG', 'MATH'].includes(tag)) return;
            if (!allowedTags.has(tag)) {
                copyChildren(node, targetNode);
                return;
            }

            if (tag === 'IFRAME' && !isSafeContentUrl(node.getAttribute('src'), { iframe: true })) return;

            const clean = document.createElement(tag.toLowerCase());
            const className = node.getAttribute('class');
            if (className && /^[\w\s:/.-]+$/.test(className)) clean.setAttribute('class', className);

            if (tag === 'A') {
                const href = node.getAttribute('href');
                if (isSafeContentUrl(href)) clean.setAttribute('href', href.trim());
                if (node.getAttribute('target') === '_blank') {
                    clean.setAttribute('target', '_blank');
                    clean.setAttribute('rel', 'noopener noreferrer');
                }
            }

            if (tag === 'IFRAME') {
                clean.setAttribute('src', node.getAttribute('src').trim());
                clean.setAttribute('title', node.getAttribute('title') || 'Conteúdo incorporado');
                clean.setAttribute('loading', 'lazy');
                clean.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
                clean.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation');
                clean.setAttribute('allowfullscreen', '');
            }

            copyChildren(node, clean);
            targetNode.appendChild(clean);
        });
    }

    copyChildren(source, output);
    return output.innerHTML;
}

function safeImageUrl(value) {
    return isSafeContentUrl(value) ? String(value).trim() : './Imagens/placeholder.png';
}

/**
 * Mapeamento seguro de cores do Tailwind para evitar purge do JIT compiler.
 */
const COLOR_MAP = {
    indigo: { text: 'text-indigo-600', bg: 'bg-indigo-600', border: 'border-indigo-500', hoverBg: 'hover:bg-indigo-700' },
    yellow: { text: 'text-yellow-600', bg: 'bg-yellow-600', border: 'border-yellow-500', hoverBg: 'hover:bg-yellow-700' },
    gray:   { text: 'text-gray-600',   bg: 'bg-gray-600',   border: 'border-gray-500',   hoverBg: 'hover:bg-gray-700' },
    red:    { text: 'text-red-600',    bg: 'bg-red-600',    border: 'border-red-500',    hoverBg: 'hover:bg-red-700' },
    blue:   { text: 'text-blue-600',   bg: 'bg-blue-600',   border: 'border-blue-500',   hoverBg: 'hover:bg-blue-700' },
    purple: { text: 'text-purple-600', bg: 'bg-purple-600', border: 'border-purple-500', hoverBg: 'hover:bg-purple-700' },
};

function getColorClasses(colorKey = 'indigo') {
    return COLOR_MAP[colorKey] || COLOR_MAP.indigo;
}

// =========================================================================
// HELPER: UNIFICAÇÃO DE DADOS
// =========================================================================

function getAllData() {
    const mainData = (typeof santosData !== 'undefined') ? santosData : {};
    const extraData = (typeof novosCadastros !== 'undefined') ? novosCadastros : {};
    return { ...mainData, ...extraData };
}

// Mantém slugs da referência e slugs históricos do catálogo apontando à mesma ficha.
const SAINT_SLUG_ALIASES = Object.freeze({
    'antonio-de-santanna-galvao': 'freigalvao',
    'donizetti-tavares-de-lima': 'padre-donizetti-tavares-de-lima',
    'dulce-lopes-pontes': 'irmadulce',
    'floripes-dornelas-de-jesus-lola': 'floripes-dornelas-de-jesus---lola',
    'francisca-de-paula-de-jesus-nha-chica': 'francisca-de-paula-de-jesus---nha-chica',
    'jose-tiaraju-sepe': 'jose-tiaraju---sepe',
    'leo-tarcisio-goncalves-pereira': 'padre-leo',
    'maria-de-lourdes-benedita-nogueira-fontao-lourdinha-fontao': 'maria-de-lourdes-benedita-nogueira-fontao---lourdinha-fontao',
    'maria-do-santissimo-sacramento-zelia-pedreira-abreu-magalhaes': 'maria-do-santissimo-sacramento---zelia-pedreira-abreu-magalhaes',
    'maria-imaculada-da-santissima-trindade-maezinha': 'maria-imaculada-da-santissima-trindade---maezinha',
    'paulina-do-coracao-agonizante-de-jesus': 'santapaulina',
    'simao-cristino-koge-kudugodu-simao-bororo': 'simao-cristino-koge-kudugodu---simao-bororo'
});

function getSaintData(slug) {
    const allData = getAllData();
    return allData[slug] || allData[SAINT_SLUG_ALIASES[slug]];
}

// =========================================================================
// LÓGICA DO CARROSSEL (SLIDESHOW)
// =========================================================================

let heroImages = [];
let sliderIntervalId = null;
let currentImageIndex = 0;
const SLIDE_DURATION = 8000;

function initializeHeroImages() {
    const imagensDoSlider = [
        './Imagens/brasao.png',
        './Imagens/brasA.png',
        './Imagens/Logo.Oficial.jpg',
        './Imagens/SantaDulce.png',
        './Imagens/Santa Paulina do Coraçã.png',
        './Imagens/PadreLeo.png',
        './Imagens/FreiGalvao.png',
        './Imagens/BeatoDonizete.png',
        './Imagens/Infográfico.png',
    ];

    if (heroImages.length === 0) {
        heroImages = imagensDoSlider;
    }
}

function stopHeroSlider() {
    if (sliderIntervalId) {
        clearInterval(sliderIntervalId);
        sliderIntervalId = null;
    }
}

function startHeroSlider() {
    stopHeroSlider();

    const sliderContainer = document.getElementById('hero-slider');
    initializeHeroImages();

    if (!sliderContainer || heroImages.length === 0) return;

    sliderContainer.innerHTML = heroImages.map((url, index) => 
        `<img 
            src="${escapeHTML(url)}" 
            alt="Imagem de Fundo ${index + 1}" 
            class="slider-image w-full h-full object-contain object-center absolute inset-0" 
            data-index="${index}"
        >`
    ).join('');

    const imageElements = Array.from(sliderContainer.querySelectorAll('.slider-image'));
    if (imageElements.length === 0) return;

    currentImageIndex = 0;
    imageElements[currentImageIndex].classList.add('active');

    sliderIntervalId = setInterval(() => {
        imageElements[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % imageElements.length;
        imageElements[currentImageIndex].classList.add('active');
    }, SLIDE_DURATION);
}

// =========================================================================
// FUNÇÕES DE RENDERIZAÇÃO DE PÁGINAS
// =========================================================================

function renderHomePage() {
    const allData = getAllData();
    const destaque = allData.freigalvao || Object.values(allData)[0];

    if (!destaque) {
        return `<div class="text-center py-20 text-gray-600 font-medium">Carregando dados...</div>`;
    }

    return `
        <section id="home" class="hero-background-container min-h-[70vh] flex items-center justify-center text-center fade-in relative overflow-hidden">
            <div id="hero-slider" class="absolute inset-0 z-0"></div>
            <div class="absolute inset-0 bg-black/40 z-0"></div>

            <div class="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-8">
                <p class="inline-flex items-center gap-2 rounded-full border border-amber-500/50 bg-slate-950/75 px-4 py-2 mb-7 text-sm sm:text-base font-semibold text-amber-300 shadow-lg">
                    <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm7 12 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15ZM5 2l.7 1.8L7.5 4.5l-1.8.7L5 7l-.7-1.8-1.8-.7 1.8-.7L5 2Z"/></svg>
                    <span>Patrimônio espiritual da Terra de Santa Cruz</span>
                </p>
                <h1 class="text-5xl sm:text-7xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                    A Santidade Inspira o Brasil
                </h1>
                <p class="text-lg sm:text-2xl text-gray-200 mb-10 font-medium max-w-2xl mx-auto drop-shadow-lg">
                    Explore as vidas inspiradoras de Santos, Beatos, Veneráveis e Servos de Deus.
                </p>
                <a href="#saint/freigalvao" class="btn-primary bg-indigo-600 text-white hover:bg-indigo-700 shadow-2xl transition duration-300 transform hover:scale-105 px-8 py-3 rounded-full font-bold">
                    DESCUBRA O SANTO DESTAQUE
                </a>
            </div>
        </section>

        <section class="py-16 bg-white responsive-padding">
            <div class="container mx-auto">
                <h2 class="heading-secondary text-center text-indigo-800 mb-12 text-3xl font-bold">
                    Caminhos da Fé
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div data-nav="#santos" class="card-hover bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-indigo-500 cursor-pointer transform transition hover:-translate-y-2">
                        <h3 class="text-xl font-bold mb-2 text-gray-900">Santos</h3>
                        <p class="text-sm text-gray-600 mb-4">Canonizados, exemplo máximo de fé.</p>
                        <span class="text-indigo-600 font-bold text-sm">Ver Lista &rarr;</span>
                    </div>

                    <div data-nav="#beatos" class="card-hover bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-yellow-500 cursor-pointer transform transition hover:-translate-y-2">
                        <h3 class="text-xl font-bold mb-2 text-gray-900">Beatos</h3>
                        <p class="text-sm text-gray-600 mb-4">Dignos de veneração em locais específicos.</p>
                        <span class="text-yellow-600 font-bold text-sm">Ver Lista &rarr;</span>
                    </div>

                    <div data-nav="#veneraveis" class="card-hover bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-gray-500 cursor-pointer transform transition hover:-translate-y-2">
                        <h3 class="text-xl font-bold mb-2 text-gray-900">Veneráveis</h3>
                        <p class="text-sm text-gray-600 mb-4">Virtudes heroicas reconhecidas.</p>
                        <span class="text-gray-600 font-bold text-sm">Ver Lista &rarr;</span>
                    </div>

                    <div data-nav="#servos" class="card-hover bg-white rounded-xl shadow-xl p-6 text-center border-t-4 border-red-500 cursor-pointer transform transition hover:-translate-y-2">
                        <h3 class="text-xl font-bold mb-2 text-gray-900">Servos de Deus</h3>
                        <p class="text-sm text-gray-600 mb-4">Início do processo de canonização.</p>
                        <span class="text-red-600 font-bold text-sm">Ver Lista &rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderSearchPage(query) {
    const allData = getAllData();
    const term = query.toLowerCase().trim();

    const results = Object.entries(allData)
        .filter(([_, data]) => 
            (data.nome && data.nome.toLowerCase().includes(term)) || 
            (data.categoria && data.categoria.toLowerCase().includes(term)) ||
            (data.titulo && data.titulo.toLowerCase().includes(term))
        )
        .map(([slug, data]) => ({ slug, ...data }));

    if (results.length === 0) {
        return `
            <section class="py-20 bg-gray-50 min-h-[60vh] flex flex-col items-center justify-center fade-in">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Nenhum resultado para "${escapeHTML(query)}"</h2>
                <p class="text-gray-600 mb-8">Tente buscar por outro nome ou categoria.</p>
                <a href="#home" class="px-6 py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition">Voltar ao Início</a>
            </section>
        `;
    }

    const cardsHtml = results.map(item => {
        const theme = getColorClasses(item.cor);
        return `
            <div class="card-hover bg-white rounded-xl shadow-lg border-t-4 ${theme.border} p-6 text-center flex flex-col items-center">
                <img src="${escapeHTML(safeImageUrl(item.imagem))}" alt="${escapeHTML(item.nome)}" loading="lazy" decoding="async" class="w-24 h-24 rounded-full object-cover mb-4 border-2 border-gray-100 shadow-sm">
                <h3 class="text-lg font-bold text-gray-900 mb-1">${escapeHTML(item.nome)}</h3>
                <p class="text-xs text-gray-500 uppercase tracking-wider mb-4">${escapeHTML(item.categoria)}</p>
                <a href="#saint/${encodeURIComponent(item.slug)}" class="mt-auto px-4 py-2 ${theme.bg} ${theme.hoverBg} text-white text-sm rounded-full font-bold transition duration-200">Ver História</a>
            </div>
        `;
    }).join('');

    return `
        <section class="py-16 bg-gray-50 min-h-[80vh] fade-in">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-black mb-10 text-gray-900 border-b pb-4">Resultados para: <span class="text-indigo-600 italic">"${escapeHTML(query)}"</span></h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
}

function renderListPage(title, colorKey, categorySlug) {
    const allData = getAllData();
    const items = Object.entries(allData)
        .filter(([_, data]) => data.categoria === categorySlug)
        .map(([slug, data]) => ({ slug, ...data }));

    if (items.length === 0) {
        return `<section class="py-20 text-center text-gray-600"><h1>Nenhum registro encontrado para ${escapeHTML(title)}.</h1></section>`;
    }

    const theme = getColorClasses(colorKey);

    const cardsHtml = items.map(item => {
        const itemTheme = getColorClasses(item.cor || colorKey);
        return `
            <div class="card-hover bg-white rounded-xl shadow-lg border-t-4 ${itemTheme.border} overflow-hidden flex flex-col h-full">
                <div class="p-6 text-center flex-grow flex flex-col items-center">
                    <div class="w-32 h-32 mb-4 relative">
                        <img src="${escapeHTML(safeImageUrl(item.imagem))}" alt="${escapeHTML(item.nome)}" loading="lazy" decoding="async" class="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow-md">
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-1 leading-tight">${escapeHTML(item.nome)}</h3>
                    <p class="text-sm ${itemTheme.text} font-medium mb-4 uppercase tracking-wide">${escapeHTML(item.titulo)}</p>
                    <div class="mt-auto">
                        <a href="#saint/${encodeURIComponent(item.slug)}" class="inline-block px-5 py-2 text-sm font-semibold text-white ${itemTheme.bg} ${itemTheme.hoverBg} rounded-full transition duration-300 shadow-md transform hover:-translate-y-0.5">
                            Ler História
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    return `
        <section class="py-12 md:py-20 bg-gray-50 min-h-[80vh] fade-in">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">${escapeHTML(title)}</h1>
                    <div class="w-24 h-1 ${theme.bg} mx-auto rounded"></div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    ${cardsHtml}
                </div>
            </div>
        </section>
    `;
}

function renderSaintDetailPage(slug) {
    const santo = getSaintData(slug);

    if (!santo) {
        return `<section class="py-20 text-center text-gray-700"><h2>Registro não encontrado.</h2></section>`;
    }

    const theme = getColorClasses(santo.cor);

    const milagresHtml = (santo.milagres && santo.milagres.length > 0) ? `
        <div class="mb-10">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span class="w-2 h-8 ${theme.bg} mr-3 rounded-full"></span>Milagres
            </h2>
            <ul class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-3">
                ${santo.milagres.map(m => `<li class="flex items-start text-gray-700"><span class="mr-2">•</span><span>${escapeHTML(m)}</span></li>`).join('')}
            </ul>
        </div>
    ` : '';

    return `
        <section class="py-12 md:py-20 bg-white min-h-[80vh] fade-in">
            <div class="container mx-auto px-4 max-w-5xl">
                <nav class="text-sm mb-8">
                    <a href="#home" class="text-gray-500 hover:underline">Início</a> / 
                    <a href="#${escapeHTML(santo.categoria)}" class="text-gray-500 capitalize hover:underline">${escapeHTML(santo.categoria)}</a> / 
                    <span class="${theme.text} font-bold">${escapeHTML(santo.nome)}</span>
                </nav>
                <div class="flex flex-col md:flex-row gap-10">
                    <div class="md:w-1/3">
                        <img src="${escapeHTML(safeImageUrl(santo.imagem))}" alt="${escapeHTML(santo.nome)}" loading="lazy" decoding="async" class="w-full rounded-xl shadow-2xl object-cover">
                    </div>
                    <div class="md:w-2/3">
                        <h1 class="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900">${escapeHTML(santo.nome)}</h1>
                        <p class="text-xl ${theme.text} font-semibold mb-6">${escapeHTML(santo.titulo)}</p>
                        <div class="prose text-gray-700 text-lg mb-8">${sanitizeBioHTML(santo.bio)}</div>
                        ${milagresHtml}
                    </div>
                </div>
            </div>
        </section>
    `;
}

function updatePageMetadata(hash) {
    const allData = getAllData();
    let title = 'Santidade Brasil – Fé e Inspiração no Brasil';
    let description = 'Conheça a história dos santos, beatos, servos de Deus e veneráveis do Brasil.';

    if (hash.startsWith('#saint/')) {
        let slug = hash.substring(7);
        try {
            slug = decodeURIComponent(slug);
        } catch (error) {
            slug = '';
        }
        const item = getSaintData(slug);
        if (item) {
            title = `${item.nome} | Santidade Brasil`;
            const plainBio = document.createElement('div');
            plainBio.innerHTML = sanitizeBioHTML(item.bio);
            description = plainBio.textContent.trim().slice(0, 160) || description;
        }
    } else if (hash === '#santos') {
        title = 'Santos | Santidade Brasil';
    } else if (hash === '#beatos') {
        title = 'Beatos | Santidade Brasil';
    } else if (hash === '#veneraveis') {
        title = 'Veneráveis | Santidade Brasil';
    } else if (hash === '#servos') {
        title = 'Servos de Deus | Santidade Brasil';
    } else if (hash.startsWith('#search/')) {
        title = 'Busca | Santidade Brasil';
    } else if (hash.startsWith('#search?')) {
        title = 'Busca | Santidade Brasil';
    }

    document.title = title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) descriptionMeta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', description);
}

// =========================================================================
// ROTEAMENTO E GERENCIAMENTO DE NAVEGAÇÃO
// =========================================================================

function handleRouteChange() {
    const hash = window.location.hash || '#home';
    const contentDiv = document.getElementById('app-content');
    if (!contentDiv) return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    stopHeroSlider(); 

    if (hash === '#home') {
        contentDiv.innerHTML = renderHomePage();
        startHeroSlider(); 
    } 
    else if (hash === '#santos') {
        contentDiv.innerHTML = renderListPage('Santos', 'indigo', 'santos');
    } 
    else if (hash === '#beatos') {
        contentDiv.innerHTML = renderListPage('Beatos', 'yellow', 'beatos');
    } 
    else if (hash === '#veneraveis') {
        contentDiv.innerHTML = renderListPage('Veneráveis', 'gray', 'veneraveis');
    }
    else if (hash === '#servos') {
        contentDiv.innerHTML = renderListPage('Servos de Deus', 'red', 'servos');
    } 
    else if (hash.startsWith('#search/')) {
        let query = hash.substring(8);
        try {
            query = decodeURIComponent(query);
        } catch (error) {
            query = '';
        }
        contentDiv.innerHTML = renderSearchPage(query);
    }
    else if (hash.startsWith('#search?')) {
        const query = new URLSearchParams(hash.substring(8)).get('q') || '';
        contentDiv.innerHTML = renderSearchPage(query);
    }
    else if (hash.startsWith('#saint/')) {
        let slug = hash.substring(7);
        try {
            slug = decodeURIComponent(slug);
        } catch (error) {
            slug = '';
        }
        contentDiv.innerHTML = renderSaintDetailPage(slug);
    } 
    else {
        contentDiv.innerHTML = renderHomePage();
        startHeroSlider();
    }
    
    updateNavActiveState(hash);
    updatePageMetadata(hash);
}

function updateNavActiveState(hash) {
    const links = document.querySelectorAll('.nav-link, .nav-link-mobile');
    const allData = getAllData();
    let activeHash = hash;

    if (hash.startsWith('#saint/')) {
        const slug = hash.substring(7);
        const item = getSaintData(slug);
        if (item) activeHash = `#${item.categoria}`; 
    }

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === activeHash) {
            link.classList.add('text-indigo-600', 'font-bold');
            link.classList.remove('text-gray-600');
        } else {
            link.classList.remove('text-indigo-600', 'font-bold');
            link.classList.add('text-gray-600');
        }
    });
}

function initRouter() {
    window.addEventListener('hashchange', handleRouteChange);

    // Event Delegation para navegação em cards sem usar onclick inline
    document.addEventListener('click', (event) => {
        const targetNav = event.target.closest('[data-nav]');
        if (targetNav) {
            const hash = targetNav.getAttribute('data-nav');
            if (hash) window.location.hash = hash;
        }
    });

    // Carga inicial do aplicativo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleRouteChange);
    } else {
        handleRouteChange();
    }
}



