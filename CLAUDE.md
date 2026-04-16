# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for **Alcateia Kotick** (Grupo Escoteiro Hokkaido · 80/SP), a Brazilian Scout cub pack. It consists of two standalone HTML files with no build system, no package manager, and no dependencies beyond CDN-loaded libraries.

## Architecture

The site is two self-contained single-page applications in `files/`:

- **`pais.html`** — Parents portal (read-only). Mobile-first, bottom-nav layout. Three tabs: Comunicados (announcements), Calendário (schedule), and Confirmar Presença (RSVP). Data is loaded read-only from Firebase; confirmations are written back.

- **`chefia.html`** — Leadership dashboard (full CRUD). Desktop sidebar layout with mobile overlay. Pages: Dashboard, Calendário, Presença (attendance), Especialidades (badges), Matilhas (sub-packs), Comunicados, Fluxo de Caixa (cash flow). Has Excel import/export via SheetJS.

## Shared Firebase Backend

Both files connect to the same Firebase Realtime Database project (`alcateiakotick-db12b`). The data lives under a single `alcateia/` root node with keys: `calendario`, `presenca`, `especialidades`, `matilhas`, `cargos`, `justificativas`, `comunicados`, `confirmacoes`, `caixa`, `pontuacao`.

- `chefia.html` writes to Firebase via `fbSet(path, data)` using `db.ref('alcateia/' + path).set(data)`.
- `pais.html` reads via a single `db.ref('alcateia').on('value', ...)` listener and writes only to `alcateia/confirmacoes` (push).
- The calendar data is **hardcoded as a static JS array** in both files (`CALENDARIO_ESTATICO` in `pais.html`, embedded in `state.calendario` in `chefia.html`). The chefia can override it by saving to Firebase, which then takes priority on next load.

## Key Patterns

- **State management**: `chefia.html` keeps all data in a single `state` object. Every write calls `fbSet()` immediately after mutating state, then re-renders the active page via `render(page)`.
- **Real-time sync**: `chefia.html` uses both `ref.once()` (initial load) and `ref.on('value', ...)` (live updates from other devices). Changes only trigger re-render if data actually changed (JSON comparison).
- **Rendering**: All UI is built by innerHTML string concatenation inside render functions named `render(page)` (dispatcher), `renderCal()`, `renderPresenca()`, etc. There is no framework or templating engine.
- **No build step**: Open the HTML files directly in a browser or serve with any static file server. No compilation, no npm, no webpack.

## CDN Dependencies

| Library | Used in |
|---|---|
| Firebase 9.23.0 (compat) | Both files |
| SheetJS (xlsx) 0.18.5 | `chefia.html` only |
| Google Fonts (DM Sans, DM Mono) | Both files |

## Development Notes

- To test locally: open `files/pais.html` or `files/chefia.html` directly in a browser, or use `npx serve .` / `python -m http.server` from the project root.
- Both files share the same Firebase config and database — changes made in `chefia.html` appear live in `pais.html`.
- The calendar array is duplicated in both files and must be kept in sync manually when updated.
- CSS variables are defined in `:root` and reused throughout; the color palette is identical in both files (`--accent: #2b3a8c`, `--accent2: #c4960a`, etc.).
