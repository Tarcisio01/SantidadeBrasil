/**
 * =========================================================================
 * MÓDULO PRINCIPAL DE INICIALIZAÇÃO (app.js)
 * =========================================================================
 * Responsável por orquestrar a inicialização de todos os módulos da aplicação
 * após o carregamento completo da árvore DOM.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicialização segura dos submódulos
    initAppRouter();
    initMobileMenu();
    initCookieConsent();
});

/**
 * 1. NAVEGAÇÃO E ROTEAMENTO
 * Inicializa o roteador do sistema caso a função `initRouter` esteja definida.
 */
function initAppRouter() {
    try {
        if (typeof initRouter === 'function') {
            initRouter();
        }
    } catch (error) {
        console.error('[Router Error] Falha ao inicializar o roteador:', error);
    }
}

/**
 * 2. LÓGICA DO MENU MOBILE
 * Gerencia o comportamento do menu de navegação responsivo.
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!mobileMenuBtn || !mobileMenu) return;

    const setMenuOpen = (isOpen) => {
        mobileMenu.classList.toggle('hidden', !isOpen);
        mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Fechar Menu de Navegação' : 'Abrir Menu de Navegação');
    };

    // Evento de clique no botão hambúrguer
    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setMenuOpen(mobileMenu.classList.contains('hidden'));
    });

    // Fecha o menu ao clicar nos links de navegação
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => setMenuOpen(false));
    });

    // Fecha o menu ao clicar fora da área do menu
    document.addEventListener('click', (e) => {
        const isClickInside = mobileMenu.contains(e.target) || mobileMenuBtn.contains(e.target);
        if (!isClickInside && !mobileMenu.classList.contains('hidden')) {
            setMenuOpen(false);
        }
    });

    // Fecha o menu ao alterar a rota/hash
    window.addEventListener('hashchange', () => setMenuOpen(false));
}

/**
 * 3. AVISO DE PRIVACIDADE
 * Lembra localmente quando o usuário fecha o aviso.
 */
function initCookieConsent() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!cookieBanner || !acceptBtn) return;

    const preferenceKey = 'privacy-notice-dismissed';
    let wasDismissed = false;
    try {
        wasDismissed = localStorage.getItem(preferenceKey) === 'true'
            || localStorage.getItem('cookies-aceitos') === 'true'
            || localStorage.getItem('cookiesAccepted') === 'true';
    } catch (error) {
        console.warn('[Storage Warning] Não foi possível ler a preferência:', error);
    }

    if (!wasDismissed) {
        cookieBanner.classList.remove('hidden');
    }

    // Registra apenas o fechamento do aviso, não uma aceitação de cookies.
    acceptBtn.addEventListener('click', () => {
        try {
            localStorage.setItem(preferenceKey, 'true');
        } catch (error) {
            console.warn('[Storage Warning] Não foi possível salvar a preferência:', error);
        }
        cookieBanner.classList.add('hidden');
    });
}

