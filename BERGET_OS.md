# BERGET OS (Design System Documentation)

Detta dokument utgör dokumentationen för Berget Design System. Det beskriver faktiska implementeringar och konventioner som används i kodbasen.

**Viktigt:** Detta dokument är en beskrivning av existerande kod, inte en preskriptiv specifikation. Vid konflikt mellan kod och dokumentation gäller koden.

## 1. Systemarkitektur (Atomic V2)

Alla komponenter och filer sorteras enligt följande struktur:

```
/atoms      – Odelbara element med slots: Button, Input, Badge, Panel, Card.
/molecules  – Kompositioner av atomer: Alert, List, Tabs, SectionHeader.
/organisms  – Komplexa sektioner: HeroBlock, Terminal, PricingGrid.
/utilities  – Visuella lager: Gradients, Backgrounds.
/tokens     – Tekniska fundament: tailwind.config.js, index.css.
/templates  – Sidscheman: AuthLayout, DashboardLayout.
/pages      – Slutliga rutter: home.tsx, login.tsx.
```

## 2. Design Tokens & Primitiver

### 2.1 Färger (HSL för Opacity-stöd)

Färger definieras som råa HSL-värden i CSS-variabler (`--berget-*`) i `src/design-system/tokens/index.css`. Tailwind mappar dessa till utility classes (`text-moss`, `bg-moss`, `border-moss`, etc.) med opacity-stöd via `/<alpha-value>`.

**Brand Colors:**
| Token | HSL-värde | Tailwind-klass | Beskrivning |
| :--- | :--- | :--- | :--- |
| moss | 151 44% 52% | text-moss, bg-moss, border-moss | Primär accent och success-state |
| lichen | 151 37% 63% | text-lichen, bg-lichen | Sekundär accent |
| spruce | 153 38% 30% | text-spruce, bg-spruce | Djup skogsgrön |
| fjord | 204 67% 21% | text-fjord, bg-fjord | Djup marinblå |
| cloud | 25 10% 84% | text-cloud, bg-cloud, border-cloud | Ljusa ytor |

**Neutral Colors:**
| Token | HSL-värde | Tailwind-klass | Beskrivning |
| :--- | :--- | :--- | :--- |
| peak | 0 0% 100% | text-peak, bg-peak | Ren vit (Text, ikoner, logo) |
| slate | 0 0% 10% | text-slate, bg-slate | Gråsvart |
| night | 0 0% 4% | text-night, bg-night | Bas för mörka ytor |

**Feedback Colors:**
| Token | HSL-värde | Tailwind-klass | Beskrivning |
| :--- | :--- | :--- | :--- |
| warning | 71 100% 75% | text-warning, bg-warning | Gul |
| error | 6 74% 50% | text-error, bg-error | Röd |
| info | 217 68% 53% | text-info, bg-info | Blå |

**Opacity-exempel:**
- `text-moss/80` - 80% opacity på moss-färg
- `bg-cloud/10` - 10% opacity på cloud-färg
- `border-slate/40` - 40% opacity på slate-färg

---

### 2.2 Typografi

Typografi implementeras med Tailwind utility classes. Font-familjer definieras i `tailwind.config.js`.

**Font-familjer:**
- **Serif:** Ovo (för headings)
- **Sans-serif:** DM Sans (för body text)

**Tailwind text-klasser:**
| Klass | Storlek | Användning |
| :--- | :--- | :--- |
| text-xs | 0.75rem (12px) | Small text, labels |
| text-sm | 0.875rem (14px) | UI text, descriptions |
| text-base | 1rem (16px) | Body text |
| text-lg | 1.125rem (18px) | Large body text |
| text-xl | 1.25rem (20px) | Subheadings |
| text-2xl | 1.5rem (24px) | H3 headings |
| text-4xl | 2.5rem (40px) | H2 headings |
| text-5xl | 5rem (80px) | H1 headings |

**Typografi-regler:**
- Headings (H1, H2) använder "Ovo" font
- Body text använder "DM Sans" font
- Standardfärg för text är `text-foreground` (definierad i CSS-variabler)
- Använd opacity-modifierare för text på olika bakgrunder (`text-peak/80`, `text-peak/60`)

---

### 2.3 Ikonografi (Lucide React)

Ikoner implementeras med `lucide-react` och skalar med Tailwind utility classes.

**Ikonstorlekar:**
| Klass | Storlek | Användning |
| :--- | :--- | :--- |
| size-3 | 12px | Small icons (badges, labels) |
| size-4 | 16px | Default icons (buttons, inputs) |
| size-6 | 24px | Large icons (cards, sections) |

**Stroke width:**
- Standard: `strokeWidth={1.5}`
- Small icons: `strokeWidth={0.75}` (12px)
- Medium icons: `strokeWidth={1.1}` (16px)
- Large icons: `strokeWidth={1.5}` (24px)

**Färgregler:**
- Ikoner ärver textfärg via `text-current` eller `className="text-current"`
- För specifika färger, använd `text-moss`, `text-peak`, etc.

**Exempel:**
```tsx
<Icon className="size-4 text-moss" strokeWidth={1.5} />
```

---

### 2.4 Radier

Radier implementeras med Tailwind utility classes.

| Klass | Radie | Användning |
| :--- | :--- | :--- |
| rounded-sm | 0.125rem (2px) | Small elements |
| rounded-md | 0.375rem (6px) | Inputs, small cards |
| rounded-lg | 0.5rem (8px) | Medium cards |
| rounded-xl | 0.75rem (12px) | Large cards |
| rounded-2xl | 1rem (16px) | Cards, panels |
| rounded-3xl | 1.5rem (24px) | Hero sections |
| rounded-full | 9999px | Buttons, badges |

**Konventioner:**
- Buttons/Badges: `rounded-full`
- Cards/Panels: `rounded-2xl`
- Inputs: `rounded-md`

---

### 2.5 Border Styling

Borders implementeras med Tailwind utility classes och CSS-variabler.

**Border utility classes:**
| Klass | Beskrivning |
| :--- | :--- |
| border | Standard border (1px) |
| border-2 | Thick border (2px) |
| border-0 | No border |

**Border colors:**
| Klass | CSS-variabel | Beskrivning |
| :--- | :--- | :--- |
| border | `--border` | Standard border (cloud/5%) |
| border-cloud | `--berget-cloud` | Cloud color border |
| border-slate | `--berget-slate` | Slate color border |
| border-moss | `--berget-moss` | Moss color border |

**Opacity-modifierare:**
- `border-slate/40` - 40% opacity på slate-färg
- `border-cloud/20` - 20% opacity på cloud-färg
- `border-moss/40` - 40% opacity på moss-färg

**Exempel:**
```tsx
<div className="border border-slate/40">Standard border</div>
<div className="border-2 border-moss/40">Thick moss border</div>
```

### 2.6 Spacing & Grid

Spacing implementeras med Tailwind utility classes.

**Tailwind spacing-klasser:**
- `p-0` till `p-12` (0rem till 3rem)
- `m-0` till `m-12` (0rem till 3rem)
- `gap-0` till `gap-12` (0rem till 3rem)

**Konventioner:**
- Använd standard Tailwind spacing-klasser
- Undvik godtyckliga värden i klammerparenteser (t.ex. `m-[13px]`)
- Följ 4px/8px-systemet (alla multipler av 0.5rem)

**Vertikala marginaler (Stacking):**
- H1 → H2: `mt-12` (3rem / 48px)
- H2 → H3: `mt-8` (2rem / 32px)
- H3 → Body: `mt-6` (1.5rem / 24px)
- Body → Body: `mt-4` (1rem / 16px)

---

### 2.7 Z-index

Z-index implementeras med Tailwind utility classes.

| Klass | Z-index | Användning |
| :--- | :--- | :--- |
| -z-10 | -10 | Bakgrundselement |
| z-0 | 0 | Base layer |
| z-10 | 10 | Dock, floating elements |
| z-50 | 50 | Navigation, dropdowns |
| z-[100] | 100 | Overlays, modals |
| z-[200] | 200 | Modals |
| z-[500] | 500 | Toasts, notifications |

---

## 3. Animationer

Animationer definieras i `src/design-system/tokens/index.css` och är tillgängliga som Tailwind utility classes.

**Tillgängliga animationer:**
| Klass | Beskrivning | Duration |
| :--- | :--- | :--- |
| animate-fade-in | Fade in med scale | 0.5s |
| animate-slide-up | Slide up från 20px | 0.6s |
| animate-shimmer | Horisontell shimmer | 2s |
| animate-gradient-flow | Gradient background flow | 15s |
| animate-fadeIn | Fade in | 0.3s |
| animate-pulse-subtle | Subtle pulse | 3s |
| animate-bounce-subtle | Subtle bounce | 2s |
| animate-float-slow | Slow float | 40s |
| animate-float-medium | Medium float | 30s |
| animate-float-fast | Fast float | 20s |

**Exempel:**
```tsx
<div className="animate-slide-up">Content</div>
<div className="animate-gradient-flow">Background</div>
```

## 4. Komponentregler & Governance

### 4.1 Namngivning
- Filer och komponenter i singularis (FeatureCard.tsx, inte FeatureCards.tsx)
- Använd beskrivande namn som reflekterar komponentens syfte

### 4.2 Logikskydd
- Radera aldrig `id`, `name`, `ref` eller `action` vid refaktorering
- Dessa attribut kan vara kritiska för integrationer (t.ex. Keycloak, forms)

### 4.3 Styling-konventioner
- Använd Tailwind utility classes för all styling
- Färger ska använda definierade tokens (moss, lichen, cloud, etc.)
- Undvik hårdkodade hex-koder - använd HSL CSS-variabler istället
- Använd opacity-modifierare (`text-moss/80`, `bg-cloud/10`) för flexibilitet

### 4.4 Best Practices
- Komponenter ska vara återanvändbara och komponerbara
- Använd CVA (class-variance-authority) för variant-hantering
- Implementera proper TypeScript-typning
- Använd `forwardRef` för ref-forwarding

## 5. Keycloak Integration

Keycloak-temat implementeras med Keycloakify och konsumerar samma design tokens som resten av systemet.

### 5.1 Principer
- Mappa Keycloakify-mallar mot existerande atomer
- Ingen källkod för komponenter får dupliceras i temat
- Temat konsumerar `tailwind.config.js` och `src/design-system/tokens/index.css`

### 5.2 Migrationsprotokoll
Vid migration av Keycloak-mallar:
1. **Behåll alla funktionella attribut** - `id`, `name`, `action`, `method`, `type` får aldrig raderas eller byta namn
2. **Keycloakify-klasser** - Klasser som börjar med `kc...` (t.ex. `kcLabelClass`) får endast modifieras via `kcProps`-mappningen i `KcContext`
3. **Visuell struktur** - Rensa från ad-hoc styling och ersätt med Tailwind utility classes
4. **Validering** - Kontrollera att form-postar skickas till exakt samma slutpunkter som originalet

### 5.3 Uppdatering
Temat uppdateras genom att bygga om projektet med `npm run build-keycloak-theme`, vilket genererar uppdaterade theme-filer i `dist_keycloak/`.

---

## 6. ESLint & Linting

För att upprätthålla konsistens i design systemet, använd följande ESLint-regler:

### 6.1 Förbjudna mönster
- Hårdkodade hex-koder (t.ex. `#FFFFFF`, `#000000`) - använd Tailwind färg-klasser istället
- Godtyckliga värden i klammerparenteser (t.ex. `m-[13px]`, `w-[327px]`) - använd standard Tailwind-klasser
- Duplicerad komponent-kod i Keycloak-temat

### 6.2 Rekommenderade mönster
- Använd definierade färg-tokens (moss, lichen, cloud, etc.)
- Använd opacity-modifierare (`text-moss/80`, `bg-cloud/10`)
- Använd standard Tailwind spacing-klasser (`p-4`, `m-8`, `gap-6`)

---

**Status:** Aktiv | **Version:** 2.0 | **Senast uppdaterad:** 2026-03-03