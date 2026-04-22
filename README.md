# Meu Site — Build in Public

Timeline pessoal feita com Astro + Tailwind CSS, hospedada no GitHub Pages.

## Como rodar localmente

```bash
npm install
npm run dev
# abre em http://localhost:4321
```

## Como adicionar um novo update na timeline

Abra `src/pages/index.astro` e adicione um objeto no **início** do array `updates`:

```js
{
  date: 'Abr 2025',          // mês e ano
  title: 'Título do update',
  body: 'Descrição do que aconteceu, o que aprendi, o que buildei.',
  tags: ['estudando'],        // estudando | deploy | projeto | bug fix | leitura | conquista
  link: 'https://...',        // opcional
  linkLabel: 'Ver repo',      // opcional — texto do link
},
```

Depois é só:

```bash
git add .
git commit -m "feat: novo update na timeline"
git push
```

O GitHub Actions faz o deploy automaticamente.

## Deploy

Configurado via `.github/workflows/deploy.yml`.  
Ativa em: **Settings > Pages > Source: GitHub Actions**
