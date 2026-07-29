# RR Casa Branca — Design System

RR Casa Branca Corretora de Seguros (RR CASA BRANCA CORRETORA DE SEGUROS LTDA), a Casa Branca–SP insurance brokerage founded 1995, offering auto, home, life, business, agro and travel insurance plus consortium and pension products. Site: www.rrcasabranca.com.br · Instagram @rrcasabranca · Address: Rua Altino Arantes 122, Centro, Casa Branca-SP, CEP 13700-079 · (19) 99304-0500 · casabranca@grupominhaterra.com.br.

**Sources provided:** a logo file (`uploads/12746ea3…jpg`, cropped into `assets/logo.png`) and a marketing/reference banner (`uploads/exec-5796ede1…png`) showing the brand's existing palette, type, icon style and component sketches, plus a written brand brief (concept, principles, color/type specs, component rules, content guidance). No codebase or Figma file was attached — this system was authored brand-guidelines-first; component inventory below is the standard set sized to the brand's stated needs, not pulled from an existing UI.

**Brand line:** "Proteção inteligente. Atendimento humano." Positioning: the local broker with the structure, technology and service level of a much bigger one. Personality: confiável, consultiva, moderna, humana, objetiva, resolutiva.

## Content fundamentals
- **Voice:** direct, warm, consultative — never salesy hype. Portuguese (Brazil), addressing the reader as "você".
- **Casing:** short CTAs and campaign headlines in CAPS ("COTAR AGORA", "SEGURO DE VIDA", "RENOVE COM SEGURANÇA"); everything longer (body copy, explanatory headlines) in normal sentence case for readability.
- **Sentence length:** short, concrete sentences. Explain insurance in plain language, no jargon.
- **No emoji.** The brand's texture comes from icons and the arc motif, not emoji.
- **Example copy:** "Nossa corretora está preparada para cuidar de cada detalhe da proteção dos nossos segurados." / "Atendimento excelente e total confiança. Me senti seguro do início ao fim." — Mariana S., Cliente.
- **WhatsApp tone:** short, cordial, one topic per message — "Olá, [Nome]! Sua renovação está próxima. Posso revisar sua proteção e buscar as melhores condições para você?"
- Never generic superlatives ("o melhor seguro") without concrete backing.

## Visual foundations
- **Color:** Azul RR `#1B2457` is the authority base — institutional backgrounds, headings. Azul Cobalto `#2455B8` marks digital/interactive elements (links, focus rings). Laranja RR `#F7941D` is reserved for CTAs, action icons and key numbers — never a full-bleed background. Azul Névoa `#EAF2FF` is the soft surface for cards/info blocks. Rule: navy dominates; orange never exceeds navy in area.
- **Type:** Montserrat (Semibold/Bold) for display, headings, numbers, buttons; Inter (Regular/Medium) for body, forms, tables. Both loaded from Google Fonts (see Fonts note below).
- **Spacing:** 8px base grid — 8/16/24/32/48/64/96. Digital containers max-width 1120–1280px.
- **Backgrounds:** mostly flat color (navy or white/mist) — no photography washes, no heavy gradients. One controlled gradient (navy→cobalt) is allowed, never behind small text. No grain/texture unless nearly imperceptible.
- **Motif:** the RR logo's crescent arcs are the one proprietary graphic — used as a partial frame or subtle background shape (see Hero section of the website UI kit), never competing with text.
- **Animation:** minimal — this brief doesn't call for motion; keep any transitions to quick (120–200ms) ease-standard fades/opacity, no bounce.
- **Hover states:** buttons darken slightly (brightness 0.92); product tiles tint to Azul Névoa background.
- **Press states:** buttons scale to 0.97.
- **Borders/shadows:** thin `#D9DEE8` borders for inputs/dividers; cards use a soft shadow `0 8px 24px rgba(27,36,87,0.10)` rather than borders when elevated.
- **Radii:** 16px cards, 12px buttons, 10px inputs, pill badges.
- **Imagery style (when photography is added):** real, natural-looking people, natural or soft studio light, neutral color grade with small blue accents, clean composition with room for text, diverse ages/profiles. Avoid stock-handshake clichés and oversaturated blue treatments.
- **Illustration style:** outline minimalist/geometric icons as the default; flat-minimal for educational carousels; light 3D only for occasional campaign hero objects; isometric for corporate/tech/agro themes. Never mix cartoon/hyper-real 3D with the outline system in one piece.

## Iconography
No icon font, sprite or SVG set was supplied with the brand materials. The system uses **Lucide** (open-source, MIT, outline/rounded style matching the brief's "2px rounded outline" spec) loaded from CDN (`<script src="https://unpkg.com/lucide@0.462.0">`, then `<Icon name="…">` from `components/core/Icon.jsx`). This is a documented CDN substitution — swap in the brokerage's own icon set if one exists. Default icon color is Azul RR; orange marks actions/active states only. No emoji, no unicode-glyph icons.

## Fonts note
Montserrat and Inter are exactly the pairing specified in the brand brief and are both free Google Fonts — loaded via `@import` in `tokens/typography.css`, no substitution needed.

## Logo note
`assets/logo.png` is a crop of the user-provided logo file — no vector/SVG source was supplied. Ask for an AI/SVG/EPS master if one exists, especially for large-format or print use.

## Components
- **core/** — `Button`, `Badge`, `Card`, `Icon`
- **forms/** — `Input`
- **feedback/** — `Alert`
- **navigation/** — `Stepper`
- **content/** — `ProductIconTile`, `BenefitItem`, `Testimonial`, `ComparisonTable`

Intentional additions: `Icon` (CDN icon wrapper) and `ProductIconTile`/`Stepper`/`ComparisonTable` — not generic UI-kit staples, but each directly named in the brand brief's component section (icon tiles for products, up-to-5-step timeline, non-price-only comparison table).

## UI kits
- `ui_kits/website/` — institutional homepage (`index.html`, `Home.jsx`): header/nav, hero with arc motif, product grid, benefits, an interactive proposal-stepper + quote-form, comparison table, testimonial, footer. Marked as a Starting Point.

## Index
- `styles.css` → `tokens/{colors,typography,spacing,effects}.css`
- `assets/logo.png`
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand/logo/icons)
- `components/<group>/` — see above
- `ui_kits/website/` — homepage recreation
- `thumbnail.html` — project tile
- `SKILL.md` — Claude Code–compatible skill wrapper
