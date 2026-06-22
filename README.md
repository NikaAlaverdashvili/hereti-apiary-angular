# Hereti Apiary — Angular

**Live site:** https://nikaalaverdashvili.github.io/hereti-apiary-angular/

Angular 20 standalone implementation of the bilingual Hereti Apiary website. It preserves the complete Georgian/English content, responsive liquid-glass design, gallery, educational sections, accordions, lightbox, mobile navigation and contact-form demonstration.

## Requirements

- Node.js `^20.19.0`, `^22.12.0`, or `>=24.0.0`
- npm 8 or newer

## Development

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Production build

```bash
npm run build
```

The optimized site is written to `dist/hereti-apiary-angular/browser/`.

## Structure

- `src/app/` — standalone Angular root component and runtime service
- `src/styles.css` — responsive glassmorphism design system
- `public/js/` — self-contained bilingual interaction/content layer
- `public/assets/images/` — all 33 supplied archive images

## Asset policy

Every visual asset came from the supplied `IMG.zip`. No external, generated, stock, placeholder, or remotely hosted images are used. The project has no remote font or UI-library dependency.

The contact form is intentionally demonstrational and does not transmit information. Connect it to a trusted backend before production use.
