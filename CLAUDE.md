# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm preview    # preview built output
```

No lint or test scripts are configured.

## Architecture

**Astro 5 portfolio site** — `https://paulsigua.dev` — with bilingual support (English/Spanish) and dynamic theming.

### Routing & i18n

- `/` serves English (via `src/pages/index.astro`)
- `/es/` serves Spanish (via `src/pages/[lang]/index.astro` using `getStaticPaths`)
- `defaultLocale="en"` with `prefixDefaultLocale=false` — English has no `/en/` prefix
- Both pages delegate entirely to `PageContent.astro`, passing only the `lang` prop
- All translation strings live in `src/i18n/ui.ts` as a single `en`/`es` object; English keys are omitted (fallback behavior handled by `useTranslations`)
- Three utilities in `src/i18n/utils.ts`: `getLangFromUrl()`, `getRouteFromLang()`, `useTranslations()`
- Scroll position is preserved across language switches via `sessionStorage`

### Layout & Component Flow

```
Layout.astro          ← root wrapper (meta, GTM/GA, theme script, global modals)
└── PageContent.astro ← wraps Layout and orchestrates all sections
    ├── Header.astro
    ├── Hero.astro
    ├── Experience.astro
    ├── Services.astro
    └── Projects.astro
```

`Layout.astro` injects `public/scripts/theme.js` via `<script src="..." defer>` and mounts two modals globally:
- `#color-selector` — accent color picker
- `#modal-experience` — experience detail panel populated dynamically via JS in `Experience.astro`

Experience job data (array with `dateKey`, `titleKey`, `tags`, `logo`, `url`, etc.) is hardcoded directly in `Experience.astro`. Translation keys from that array are resolved at render time via `useTranslations`.

### Theming

- Four accent colors: **blue, green, orange, purple** — persisted in `localStorage` under key `color`
- Dark mode persisted under key `theme` (`"light"`, `"dark"`, `"system"`)
- CSS uses `data-theme` on `<html>` for light/dark and `data-color` for accent color
- `theme.js` runs before paint to avoid flash; re-applies on `astro:after-swap`

**Global JS API from `public/scripts/theme.js`:**
```js
window.toggleTheme()               // toggle light/dark
window.setThemeExplicit(mode)      // "light" | "dark" | "system"
window.setAppColor(color)          // "blue" | "green" | "orange" | "purple"
```

### Modal System

`Modal.astro` renders a `<dialog>` element. All modal interactions go through:
```js
window.toggleDialog(dialogId?)     // open by id, or close currently open modal if no id
```

The function is defined once (guarded by `typeof window.toggleDialog !== "function"`) and registered in `Modal.astro`'s `<script>`, which is bundled as a module — safe to use in multiple `<Modal>` instances.

**Open flow:**
1. Measures dialog dimensions via a hidden `dialog.show()` call to calculate centered position relative to the trigger
2. Captures the trigger element's bounding box with `Flip.getState(trigger)`
3. Calls `dialog.showModal()` (dialog is now at its final position)
4. `Flip.from(originState, { targets: dialog, scale: true })` morphs the dialog from the trigger's position/size to its final state
5. Sets `document.body.style.overflow = "hidden"` to lock scroll

**Close flow:**
1. Finds the origin trigger via `data-flip-id` attribute (set as a shared random ID on both dialog and trigger at open time)
2. `Flip.to(originState, { targets: dialog, scale: true })` morphs the dialog back into the trigger
3. `onComplete`: clears GSAP props, resets inline styles, calls `dialog.close()`, restores scroll

CSS classes `pm-opening` / `pm-closing` (defined in `global.css`) add blur/fade/border-radius effects layered on top of the Flip animation.

Fallback (no trigger element): simple `gsap.from/to` opacity+scale tween without Flip.

GSAP plugins used: `Flip`, `CustomEase` — registered at module load via `gsap.registerPlugin(Flip, CustomEase)`.

### Tailwind Custom Color Tokens

Tailwind 4 is configured via `src/styles/global.css` (no `tailwind.config.js`). CSS custom properties are bridged into Tailwind under `@theme`:

| Tailwind class | CSS variable |
|---|---|
| `bg-app` / `text-app` | `--bg` / `--text-main` |
| `text-muted` | `--text-muted` |
| `border-app-soft` | `--border-app-soft` |
| `bg-primary-soft` | `--primary-soft` |

### Animations

GSAP (with Flip and CustomEase plugins) is used for modal animations and hero entrance effects. Framer Motion is also installed but not actively used. React integration (`@astrojs/react`) is configured; most components are pure `.astro` files.

### Styling

Tailwind CSS 4 via `@tailwindcss/vite` plugin. Global styles in `src/styles/global.css`. Scrollbar is hidden globally via `scrollbar-width: none` + `::-webkit-scrollbar { display: none }`. Font: Onest Variable (`@fontsource-variable/onest`), applied in `Layout.astro`'s scoped `<style>`.
