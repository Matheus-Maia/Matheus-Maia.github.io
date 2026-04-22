# Como dar build no site

Guia rápido para rodar, testar e publicar a timeline feita com Astro + Tailwind no GitHub Pages.

## 1. Pré-requisitos

- Node.js LTS (v20 ou v22) — verifique com:
  ```bash
  node -v
  npm -v
  ```
- Git instalado
- Repositório clonado: `Matheus-Maia.github.io`

## 2. Primeira instalação (local)

No PowerShell (Windows) ou terminal:

```bash
cd Matheus-Maia.github.io
npm install
```

Isso cria:
- `node_modules/` (dependências)
- `package-lock.json` (obrigatório para o CI)

> Se der erro "astro não reconhecido", é porque este passo não foi feito.

## 3. Rodar em desenvolvimento

```bash
npm run dev
```

Abre em http://localhost:4321 — aqui você vê a timeline ao vivo.

## 4. Adicionar um update

Edite `src/pages/index.astro` e adicione no início do array `updates`:

```js
{
  date: 'Abr 2025',
  title: 'Título do update',
  body: 'O que aprendi hoje...',
  tags: ['projeto'],
  link: 'https://github.com/...',
  linkLabel: 'Ver repo',
}
```

Salve e a página recarrega automaticamente.

## 5. Build de produção (teste local)

```bash
npm run build
npm run preview
```

- `npm run build` gera a pasta `dist/`
- `npm run preview` serve o `dist/` em http://localhost:4321

Se abrir certo aqui, vai abrir certo no GitHub Pages.

## 6. Publicar no GitHub Pages

1. Confira o `astro.config.mjs`:
   ```js
   import { defineConfig } from 'astro/config';
   import tailwind from '@astrojs/tailwind';

   export default defineConfig({
     site: 'https://matheus-maia.github.io',
     integrations: [tailwind()],
   });
   ```
   *Sem `base` porque é repositório de usuário.*

2. Commit dos arquivos necessários:
   ```bash
   git add .
   git commit -m "feat: novo update"
   git push
   ```

3. O workflow `.github/workflows/deploy.yml` roda automaticamente.
   - Acompanhe em: GitHub > Actions > "Deploy to GitHub Pages"
   - Quando ficar verde, acesse: https://matheus-maia.github.io

## 7. Solução de problemas comuns

**Erro CI: "Dependencies lock file is not found"**
→ Rode `npm install` local e commite o `package-lock.json`.

**Erro local: "'astro' não é reconhecido"**
→ Pasta `node_modules` ausente. Rode `npm install` novamente.

**Página mostra README em vez do site**
→ Em Settings > Pages > Source, selecione "GitHub Actions".

**Mudanças não aparecem**
→ Limpe cache (Ctrl+F5) ou abra em aba anônima.

## 8. Comandos úteis

```bash
# Limpar e reinstalar
Remove-Item -Recurse -Force node_modules  # Windows PowerShell
rm -rf node_modules                         # macOS/Linux
npm install

# Verificar build sem servir
npm run build

# Atualizar dependências
npm update
```
