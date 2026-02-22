# Berget AI Design System - Brand Guidelines V2

**Single Source of Truth** för Berget AI:s grafiska profil och design tokens.
Ersätter alla tidigare versioner.

---

## 📋 Innehåll

1. [Färgpalett](#färgpalett)
2. [Semantiska Färger](#semantiska-färger)
3. [Border Tokens](#border-tokens)
4. [Typografi](#typografi)
5. [Spacing & Layout](#spacing--layout)
6. [Effekter](#effekter)
7. [Migreringsguide](#migreringsguide)

---

## 🎨 Färgpalett

### Primära Brand Färger

| Token | Hex | HSL | Beskrivning |
|-------|-----|-----|-------------|
| `--berget-moss` | #52B788 | 151 44% 52% | Primary Brand Green |
| `--berget-lichen` | #74C69D | 151 37% 63% | Secondary Green |
| `--berget-spruce` | #2D6A4F | 153 38% 30% | Deep Forest Green |
| `--berget-fjord` | #0F405A | 204 67% 21% | Deep Navy Blue |

### Neutrala Färger

| Token | Hex | HSL | Beskrivning |
|-------|-----|-----|-------------|
| `--berget-peak` | #FFFFFF | 0 0% 100% | Pure White |
| `--berget-cloud` | #E5DDD5 | 25 10% 84% | Cloud Off-White |
| `--berget-slate` | #1A1A1A | 0 0% 10% | Dark Gray |
| `--berget-night` | #0A0A0A | 0 0% 4% | Deep Black |

### Feedback Färger

| Token | Hex | HSL | Användning |
|-------|-----|-----|-----------|
| `--success` | #52B788 | 151 44% 52% | Success, positivt (Moss) |
| `--warning` | #CFFF8B | 71 100% 75% | Varning, uppmärksamhet |
| `--error` | #D1392E | 6 74% 50% | Fel, destruktiva handlingar |
| `--info` | #3975D6 | 217 68% 53% | Information |

---

## 🎭 Semantiska Färger

Dessa tokens mappar brand-färgerna till UI-komponenter.

### Dark Theme (Default)

| Semantic Token | HSL Värde | Brand Källa | Användning |
|----------------|-----------|-------------|-----------|
| `--background` | 0 0% 4% | Night | Huvudbakgrund |
| `--foreground` | 0 0% 100% | Peak | Primär text |
| `--card` | 0 0% 7% | Night | Card bakgrund |
| `--card-foreground` | 0 0% 100% | Peak | Card text |
| `--primary` | 151 44% 52% | Moss | Primära actions |
| `--primary-foreground` | 0 0% 100% | Peak | Text på primary |
| `--secondary` | 151 37% 63% | Lichen | Sekundära actions |
| `--secondary-foreground` | 0 0% 4% | Night | Text på secondary |
| `--accent` | 204 67% 21% | Fjord | Accenter, highlights |
| `--accent-foreground` | 0 0% 100% | Peak | Text på accent |
| `--muted` | 0 0% 10% | Slate | Muted bakgrunder |
| `--muted-foreground` | 25 10% 84% / 0.6 | Cloud 60% | Muted text |

### Light Theme

| Semantic Token | HSL Värde | Brand Källa |
|----------------|-----------|-------------|
| `--background` | 0 0% 96% | Ljus bakgrund |
| `--foreground` | 0 0% 10% | Mörk text |
| `--card` | 0 0% 100% | Vit card bakgrund |
| `--card-foreground` | 0 0% 10% | Mörk card text |
| `--muted` | 0 0% 90% | Ljus muted bakgrund |

---

## 🔲 Border Tokens

### Base Borders (Subtla, console-inspired)

| Token | HSL Värde | Opacity | Användning |
|-------|-----------|---------|-----------|
| `--border` | 25 10% 84% | 0.05 | Standard borders |
| `--border-hover` | 25 10% 84% | 0.1 | Hover states |
| `--border-strong` | 25 10% 84% | 0.08 | Starkare borders |

### Themed Borders (Brand-färgade)

| Token | HSL Värde | Opacity | Brand Källa |
|-------|-----------|---------|-------------|
| `--border-moss` | 151 44% 52% | 0.2 | Moss green |
| `--border-lichen` | 151 37% 63% | 0.2 | Lichen green |
| `--border-spruce` | 153 38% 30% | 0.2 | Spruce green |
| `--border-fjord` | 204 67% 21% | 0.2 | Fjord blue |
| `--border-cloud` | 25 10% 84% | 0.2 | Cloud gray |

### State Borders

| Token | HSL Värde | Opacity | Användning |
|-------|-----------|---------|-----------|
| `--border-success` | 151 44% 52% | 0.5 | Success states |
| `--border-warning` | 71 100% 75% | 0.5 | Warning states |
| `--border-destructive` | 6 74% 50% | 0.5 | Error states |
| `--border-info` | 217 68% 53% | 0.5 | Info states |

### Input & Focus

| Token | HSL Värde | Användning |
|-------|-----------|-----------|
| `--input` | 0 0% 15% | Input bakgrunder |
| `--ring` | 151 44% 52% | Focus ring (Moss) |

### Special Effects

| Token | Värde | Användning |
|-------|-------|-----------|
| `--grid-line` | rgba(229, 221, 213, 0.02) | Subtla grid lines (Cloud) |
| `--glass` | rgba(26, 26, 26, 0.4) | Glass morphism |
| `--glow` | rgba(82, 183, 136, 0.1) | Glow effects (Moss) |

---

## 📝 Typografi

### Fonter

| Element | Font | Weight | Features |
|---------|------|--------|----------|
| H1, H2 | Ovo | 400 (Regular) | Serif |
| H3, H4, H5, H6 | DM Sans | 400 (Regular) | Sans-serif |
| Body, UI | DM Sans | 400 (Regular) | Sans-serif, ss01, ss02, cv01, cv02 |

### Rubriker

| Level | Font | Storlek | Line Height | Letter Spacing |
|-------|------|---------|-------------|----------------|
| H1 | Ovo | 5rem (64px) | 1.375 (88px) | -0.03em |
| H2 | Ovo | 2.5rem (40px) | 1.4 (56px) | -0.03em |
| H3 | DM Sans | 1.5rem (24px) | 2.33 (56px) | 0 |
| H4 | DM Sans | 1.25rem (20px) | 1.5 (30px) | 0 |
| H5 | DM Sans | 1.125rem (18px) | 1.67 (30px) | 0 |
| H6 | DM Sans | 1rem (16px) | 1.5 (24px) | 0 |

### Body Text

| Element | Font | Storlek | Line Height |
|---------|------|---------|-------------|
| Body | DM Sans | 1rem (16px) | 1.5 (24px) |
| Small | DM Sans | 0.875rem (14px) | 1.43 (20px) |
| XSmall | DM Sans | 0.75rem (12px) | 1.67 (20px) |

### Text Färger

| Element | Token | Hex |
|---------|-------|-----|
| Primary text | `--foreground` | #FFFFFF |
| Secondary text | `--muted-foreground` | #E5DDD5 @ 60% |
| Muted text | `--muted-foreground` | #E5DDD5 @ 60% |

---

## 📐 Spacing & Layout

### Border Radius

| Element | Värde | Tailwind |
|---------|-------|---------|
| Cards | 1.5rem (24px) | `rounded-2xl` |
| Buttons | Full rounded | `rounded-full` |
| Badges | Full rounded | `rounded-full` |
| Inputs | 0.5rem (8px) | `rounded-md` |

### Container Max Widths

| Size | Värde | Tailwind |
|------|-------|---------|
| Small | 768px | `max-w-3xl` |
| Medium | 1024px | `max-w-5xl` |
| Large | 1280px | `max-w-7xl` |
| Extra Large | 1400px | `max-w-[1400px]` |
| Full | 100% | `max-w-full` |

### Grid Gaps

| Size | Värde | Tailwind |
|------|-------|---------|
| Small | 1rem | `gap-4` |
| Medium | 2rem | `gap-8` |
| Large | 3rem | `gap-12` |
| Extra Large | 4rem | `gap-16` |

---

## ✨ Effekter

### Animationer

| Name | Duration | Easing | Användning |
|------|----------|--------|-----------|
| `bokeh-float` | 20s | ease-in-out | Bokeh effects |
| `fade-in` | 0.5s | ease-out | Fade in elements |
| `slide-up` | 0.6s | ease-out | Slide up elements |
| `shimmer` | 2s | linear | Loading states |
| `gradient-flow` | 15s | ease | Gradient animations |

### Glass Effects

| Effect | Blur | Användning |
|--------|------|-----------|
| Standard glass | 12px | Glass panels |
| Liquid glass | 12px + SVG filter | Apple-inspired refraction |

### Glow Effects

| Effect | Values | Användning |
|--------|--------|-----------|
| Panel glow (static) | 0 0 0 1px rgba(229, 221, 213, 0.02) | Subtla borders |
| Panel glow (hover) | 0 0 0 1px rgba(229, 221, 213, 0.05) | Hover states |

### Backdrop Blur

| Element | Blur | Användning |
|---------|------|-----------|
| Cards | 20px | Glaseffekter |
| Panels | 12px | Glass panels |

### Icon Stroke

| Element | Stroke Width | Användning |
|---------|--------------|-----------|
| Icons | 1.5px | Lucide standard |

---

## 🔄 Migreringsguide

### Gammal → Ny Mappning

| Gammal Token | Ny Token / Värde | Status |
|--------------|------------------|--------|
| `--berget-sage` | `--berget-lichen` (#74C69D) | Uppdaterad |
| `--accent` (Guld) | `--warning` (#CFFF8B) | Ersatt |
| `--berget-stone` | `--berget-cloud` (#E5DDD5) | Namnbyte |
| H1 (36px) | H1 (64px) | Storleksändring |
| H2 (32px) | H2 (40px) | Storleksändring |

### Tailwind Klasser

Använd alltid dessa klasser istället för hårdkodade värden:

| Färg | Tailwind Klass |
|------|---------------|
| Moss | `bg-moss`, `text-moss`, `border-moss` |
| Lichen | `bg-lichen`, `text-lichen`, `border-lichen` |
| Spruce | `bg-spruce`, `text-spruce`, `border-spruce` |
| Fjord | `bg-fjord`, `text-fjord`, `border-fjord` |
| Peak | `bg-peak`, `text-peak` |
| Cloud | `bg-cloud`, `text-cloud` |
| Slate | `bg-slate`, `text-slate` |
| Night | `bg-night`, `text-night` |

### Opacity Modifier

Använd `/` för opacity på Tailwind-klasser:

| Exempel | Resultat |
|---------|----------|
| `bg-cloud/60` | Cloud @ 60% opacity |
| `text-moss/50` | Moss @ 50% opacity |
| `border-lichen/20` | Lichen @ 20% opacity |

---

## ✅ Compliance Checklist

För Berget Code:

- [ ] Använder Ovo endast för H1 och H2
- [ ] Använder DM Sans för H3 och nedåt
- [ ] Inga hårdkodade hex-koder; använd endast variabler
- [ ] Ikoner använder `strokeWidth={1.5}`
- [ ] Border radius för cards är 1.5rem (24px)
- [ ] Buttons och badges är full rounded
- [ ] Färgpalett enligt BRAND_GUIDELINES.md V2
- [ ] Typografi enligt spec (H1: 64px, H2: 40px, letter-spacing: -0.03em)

---

## 📚 Användning

### CSS Variables

```css
/* Färger */
color: hsl(var(--foreground));
background: hsl(var(--background));
border-color: hsl(var(--border));

/* Borders */
border: 1px solid hsl(var(--border));
box-shadow: 0 0 0 1px hsl(var(--border-moss));
```

### Tailwind Classes

```tsx
/* Färger */
<div className="bg-background text-foreground">
<div className="bg-moss text-white">
<div className="border-lichen/20">

/* Spacing */
<div className="rounded-2xl"> {/* Cards */}
<div className="rounded-full"> {/* Buttons, Badges */}

/* Layout */
<Grid gap="md" columns={{ sm: 1, md: 2, lg: 3 }}>
<Container size="lg">
```

---

## 📞 Support

Frågor? Kontakta design teamet eller se `AGENTS.md` för agent-specifik information.

---

*Senast uppdaterad: 2026-02-20*
*Version: V2*