# Berget Design System - Bakgrundsguide

En sammanställning av alla bakgrunder i Berget Design System och när man ska använda vilka.

## 📋 Översikt

Vi har fyra huvudtyper av bakgrunder, var och en med sitt specifika användningsområde:

| Bakgrund       | Användning             | Känsla                    | Exempel                |
| -------------- | ---------------------- | ------------------------- | ---------------------- |
| **Solid Dark** | Standard applikationer | Professionell, fokuserad  | Console, dashboards    |
| **Grid**       | Strukturerad data      | Teknisk, precis           | Tabeller, formulär     |
| **Gradient**   | Marketing, Hero        | Visuell impact, varumärke | Landningssidor, CTA    |
| **Network**    | Tech/Enterprise        | Modern, sammankopplad     | Platform features, B2B |

---

## 1. Solid Dark Background

### 🎨 Utseende

-   Helt mörk bakgrund: `#0A0A0A` (HSL: 0 0% 4%) - Console-inspired deep black
-   Ren, minimal, utan distraktioner
-   Perfekt för fokuserat arbete

### 📍 Använd när:

-   ✅ Användaren ska fokusera på innehåll
-   ✅ Datatunga gränssnitt
-   ✅ Administrativa sidor
-   ✅ Formulär och input-fält
-   ✅ Modal dialogs

### 🚫 Undvik när:

-   ❌ Marketing/landningssidor
-   ❌ Hero sections
-   ❌ Du vill skapa visuell impact

### 💻 Kod:

```tsx
// Ingen specifik komponent - bara använd body/container
<div className="bg-[hsl(var(--background))] min-h-screen">
    <YourContent />
</div>
```

### 📦 Exempel från projekten:

-   Console application (hela appen)
-   Keycloak login-formulär (innehållsområdet)
-   Settings-sidor

---

## 2. Grid Background

### 🎨 Utseende

-   Mörk bakgrund med subtilt rutmönster
-   24×24px grid som standard
-   Opacity: 0.02 (nästan osynlig, men märkbar struktur)
-   Färg: Berget Stone (#E5DDD5)

### 📍 Använd när:

-   ✅ Du vill ge struktur utan att distrahera
-   ✅ Tekniska/professionella kontexter
-   ✅ Bakom cards och content areas
-   ✅ Dashboards med metrics
-   ✅ Data visualiseringar

### 🚫 Undvik när:

-   ❌ Marketing material
-   ❌ Över fotografier
-   ❌ På redan komplexa bakgrunder

### 💻 Kod:

```tsx
import { GridBackground } from '@/design-system/effects/GridBackground'

// Standard grid
<GridBackground>
  <YourContent />
</GridBackground>

// Anpassad grid
<GridBackground
  gridSize={32}
  opacity={0.05}
  color="96, 165, 128" // Moss green
>
  <YourContent />
</GridBackground>
```

### 🎛️ Varianter:

```tsx
// Subtle (default) - nästan osynlig
<GridBackground opacity={0.02} />

// Visible - tydligare struktur
<GridBackground opacity={0.05} />

// Large grid - mer luft
<GridBackground gridSize={48} />
```

### 📦 Exempel från projekten:

-   Console body background
-   Website content sections
-   Behind card grids

---

## 3. Gradient Background

### 🎨 Utseende

-   Fullskärms gradient från mörkt till ljusare
-   2 färgvarianter: berget, subtle

### 📍 Använd när:

-   ✅ Hero sections
-   ✅ Landing pages första sektion
-   ✅ Call-to-action områden
-   ✅ Marketing content
-   ✅ Feature showcases
-   ✅ Du vill skapa visuell impact

### 🚫 Undvik när:

-   ❌ I applikationsgränssnitt
-   ❌ Bakom mycket text
-   ❌ På arbetsytor/dashboards

### 💻 Kod:

```tsx
import { GradientBackground } from "@/design-system/effects/GradientBackground";

<GradientBackground variant="berget">
    <Hero />
</GradientBackground>;
```

### 🎨 Varianter:

#### **Berget** (default)

Grön gradient med Berget varumärkesfärger

```tsx
<GradientBackground variant="berget">
// Gradient: #2D6A4F → #40916C → #52B788
```

**Använd för:**

-   Berget's hero section
-   Main landing page
-   Brand storytelling

#### **Subtle**

Väldigt subtil mörk gradient

```tsx
<GradientBackground variant="subtle">
// Gradient: #0A0A0A → #121212 → #1A1A1A
```

**Använd för:**

-   Pricing sections
-   FAQ sections
-   Footer areas

### 📦 Exempel från projekten:

-   Website Hero section
-   Landing page header

---

## 4. Network Background

### 🎨 Utseende

-   Animerad nod-nätverksbakgrund
-   Flytande noder med förbindelselinjer
-   Partiklar som rör sig längs förbindelserna
-   Spark-effekter när partiklar når noder
-   Canvas-baserad, 60fps animation

### 📍 Använd när:

-   ✅ Tech/SaaS landing pages
-   ✅ Platform/infrastructure messaging
-   ✅ "Connected" eller "Network" features
-   ✅ Enterprise B2B content
-   ✅ API/Integration showcases
-   ✅ Du vill förmedla sammankoppling

### 🚫 Undvik när:

-   ❌ Simpla produkter
-   ❌ Consumer-facing content (kan kännas för tekniskt)
-   ❌ På mobila enheter (performance)
-   ❌ Bakom text-tung innehåll

### 💻 Kod:

```tsx
import { GradientBackground } from "@/design-system/effects/GradientBackground";
import { NetworkBackground } from "@/design-system/effects/NetworkBackground";

// Kombinera med gradient för bästa effekt
<GradientBackground variant="berget">
    <NetworkBackground opacity={0.4} nodeCount={50} />
    <Hero />
</GradientBackground>;
```

### 🎛️ Props:

```tsx
<NetworkBackground
    nodeCount={50} // Antal noder (default: 50)
    opacity={0.4} // Opacity 0-1 (default: 0.4)
    className="" // Extra CSS classes
/>
```

### ⚡ Performance:

-   Använder Canvas API för smooth animation
-   Responsiv till container-storlek
-   Pausas automatiskt när inte synlig
-   **OBS:** Kan vara CPU-intensiv på svagare enheter

### 📦 Exempel från projekten:

-   Website Hero section
-   Platform features showcase

---

## 🎨 Kombinera Bakgrunder

### Rekommenderade kombinationer:

#### 1. **Hero Section (Maximum Impact)**

```tsx
<GradientBackground variant="berget">
    <NetworkBackground opacity={0.3} />
    <div className="relative z-10">
        <Hero />
    </div>
</GradientBackground>
```

**Resultat:** Visuellt slående, tech-känsla, perfekt för landningssidor

---

#### 2. **Professional Dashboard**

```tsx
<GridBackground opacity={0.03}>
    <Dashboard />
</GridBackground>
```

**Resultat:** Strukturerad, professionell, fokuserad

---

#### 3. **Pricing Section**

```tsx
<GradientBackground variant="subtle">
    <div className="relative z-10">
        <PricingCards />
    </div>
</GradientBackground>
```

**Resultat:** Subtil separation, lyfter fram content

---

#### 4. **Content Heavy Page**

```tsx
<div className="bg-[hsl(var(--background))]">
    <Article />
</div>
```

**Resultat:** Ren, läsbar, ingen distraktion

---

## 📐 Design Principer

### Hierarki

1. **Solid Dark** = Mest fokuserad, minst distraktion
2. **Grid** = Lite struktur, fortfarande fokuserad
3. **Gradient (subtle)** = Lite mer visuellt intresse
4. **Gradient + Network** = Maximum visuell impact

### Val av bakgrund - beslutsträd:

```
Är det en marketing/landing page?
├─ JA → Gradient eller Gradient + Network
└─ NEJ → Är det en arbetsyta/app?
    ├─ JA → Solid Dark eller Grid
    └─ NEJ → Är det innehållstungt?
        ├─ JA → Solid Dark
        └─ NEJ → Grid
```

### Tillgänglighet

-   ✅ Alla bakgrunder har tillräcklig kontrast för vit text
-   ✅ Grid opacity är subtil nog att inte störa läsbarhet
-   ⚠️ Network animation kan distrahera vissa användare
-   💡 Överväg att erbjuda "Reduced motion" alternativ

---

## 🔧 Tekniska Detaljer

### CSS Variables

Alla bakgrunder använder Berget Design System tokens:

```css
--background: 0 0% 10% /* Solid dark */ --berget-stone: 45 15% 88% /* Grid color */
    --grid-line: rgba(229, 221, 213, 0.02) /* Grid opacity */;
```

### Z-Index Layers

När du kombinerar bakgrunder:

```tsx
<div className="relative">
    {/* Layer 1: Gradient (bottom) */}
    <GradientBackground>
        {/* Layer 2: Network (middle) */}
        <NetworkBackground className="absolute inset-0" />
        {/* Layer 3: Content (top) */}
        <div className="relative z-10">
            <Content />
        </div>
    </GradientBackground>
</div>
```

---

## 📚 Sammanfattning

| Kontext               | Rekommenderad Bakgrund             |
| --------------------- | ---------------------------------- |
| **Landing Page Hero** | Gradient + Network                 |
| **Dashboard**         | Grid eller Solid Dark              |
| **Pricing Section**   | Gradient (subtle)                  |
| **Admin Forms**       | Solid Dark                         |
| **Feature Showcase**  | Gradient + Network                 |
| **Blog Post**         | Solid Dark                         |
| **Data Tables**       | Grid                               |
| **Modal Dialogs**     | Solid Dark                         |
| **Footer**            | Gradient (subtle) eller Solid Dark |

**Tumregel:** Ju mer "fokus på innehåll", desto mindre visuell bakgrund. Ju mer "skapa intryck", desto mer visuell bakgrund.
