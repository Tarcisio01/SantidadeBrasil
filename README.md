# Santidade Brasil

Portal estático dedicado à fé, à história e à devoção católica no Brasil. Reúne histórias e informações sobre santos, beatos, veneráveis e servos de Deus.

## Sobre o projeto

O Santidade Brasil organiza e apresenta biografias, devoções e conteúdos relacionados às causas de santidade no Brasil. O site é composto por páginas HTML estáticas, com navegação por hash na página inicial.

## Tecnologias

- HTML5
- CSS3
- JavaScript no navegador
- Tailwind CSS 3, compilado localmente
- Node.js e pnpm para desenvolvimento e build
- Vercel para publicação estática

## Estrutura do projeto

```text
.
├── index.html, sobre.html, parceiros.html, contatos.html, termos.html, 404.html
├── app.js, router.js, data.js
├── style.css, responsive.css
├── Imagens/                 # Imagens e ícones usados pelo site
├── src/input.css            # Entrada do Tailwind CSS
├── assets/tailwind.css      # CSS compilado, carregado pelas páginas
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.js
├── vercel.json
├── robots.txt
└── site.webmanifest
```

A pasta `sem uso/` guarda materiais arquivados que não fazem parte do site; ela é ignorada pelo Git e pela Vercel. `node_modules/` e `.pnpm-store/` são dependências/cache locais e também são ignorados.

## Requisitos

- Node.js compatível com Tailwind CSS 3
- pnpm

## Instalação

Na pasta do projeto, instale as dependências conforme o lockfile:

```bash
pnpm install
```

## Desenvolvimento

O script de desenvolvimento recompila o CSS do Tailwind sempre que os arquivos monitorados mudam:

```bash
pnpm dev
```

Esse comando não inicia um servidor web. Para visualizar o site, sirva a pasta com um servidor estático local, por exemplo, usando a extensão Live Server do VS Code, e abra `index.html`.

## Build

Gere o CSS otimizado para produção com:

```bash
pnpm build
```

O arquivo gerado é `assets/tailwind.css`, referenciado diretamente pelas páginas HTML.

## Deploy na Vercel

O projeto usa o preset **Other** (site estático). A configuração em `vercel.json` define `pnpm run build` como comando de build e `.` como diretório de saída. O lockfile `pnpm-lock.yaml` permite à plataforma identificar o gerenciador. Nenhuma variável de ambiente é necessária na configuração atual.

## Domínio

O projeto não fixa um domínio próprio no código. Depois de escolher o domínio `.com.br`, atualize os metadados canonical/Open Graph, o sitemap e a referência de sitemap em `robots.txt`, se aplicável, antes de divulgar o endereço definitivo.

## Licença

Nenhuma licença foi definida para este projeto.
