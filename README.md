# Bean Pizzaria 🍕

Landing page de pizzaria italiana, desenvolvida em React. Inspirada no template Bean Scene Coffee com identidade visual italiana.

## Stack

- **React 18** — componentes funcionais com hooks
- **CSS custom properties** — design tokens globais
- **Unsplash** — imagens via URL (sem download necessário)
- **Google Fonts** — Playfair Display + Dancing Script + Lato

## Seções

1. **Hero** — fundo imersivo com pizza, headline em script font
2. **Discover** — história da pizzaria + collage de imagens
3. **Cardápio** — 4 pizzas com cards animados
4. **Por que nós?** — 4 diferenciais + CTA banner
5. **Oferta especial** — banner dark com parallax
6. **Depoimentos** — carrossel com navegação
7. **Newsletter** — captura de e-mail com feedback visual
8. **Footer** — 4 colunas + rodapé pagio

## Rodar localmente

```bash
npm install
npm start
```

## Deploy na Vercel

### Via GitHub
1. Push no repositório
2. Acesse vercel.com → New Project → Importe o repo
3. Framework: **Create React App** (detectado automaticamente)
4. Clique **Deploy**

### Via CLI
```bash
npm i -g vercel
vercel --prod
```

### Via Drag & Drop
Faça o build primeiro:
```bash
npm run build
```
Arraste a pasta `build/` em vercel.com/new

## Customização

Todas as cores ficam em `src/index.css` dentro de `:root`:

```css
--red:   #B5271A;   /* vermelho italiano */
--gold:  #C9943A;   /* dourado */
--brown: #1a0800;   /* fundo escuro */
--cream: #FFF8F0;   /* fundo claro */
```

Para trocar o nome, busque por `Bean Pizzaria` nos componentes.
