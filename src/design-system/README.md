# Berget Design System

A Scandinavian-inspired design system built with React, TypeScript, and Tailwind CSS.

## Philosophy

Berget Design System draws inspiration from Scandinavian design principles:

- **Minimalism** - Clean, uncluttered interfaces
- **Functionality** - Form follows function
- **Natural Colors** - Earth tones, moss greens, stone grays
- **Quality** - Attention to detail and craftsmanship
- **Timeless** - Classic design that ages well

## Structure

```
design-system/
├── tokens/          # Design tokens (colors, typography, spacing)
├── primitives/      # Base components (Button, Card, Badge, Input)
├── effects/         # Visual effects (Bokeh, NoiseGradient, AnimatedLine)
├── layout/          # Layout components (Container, Grid, Stack)
├── composed/        # Complex components (GradientCard, IconBox)
└── marketing/       # Marketing sections (Hero, Pricing, Features)
```

## Design Tokens

### Colors

**Brand Colors:**
- `--berget-stone` (#E5DDD5) - Primary brand color, inspired by Scandinavian stone
- `--berget-moss` (#60A580) - Nature accent, Nordic forest green
- `--berget-sage` (#8EB29F) - Secondary green, soft sage
- `--berget-earth` (#342F2D) - Dark earth tone

**Semantic Colors:**
- Dark theme (default) with `#1A1A1A` background
- Light theme support via `.light` class or `data-theme="light"`

### Typography

**Fonts:**
- **Headings:** Ovo (serif) - Classic, readable serif for headings
- **Body:** DM Sans (sans-serif) - Modern, clean sans-serif

**OpenType Features:**
- Stylistic sets (ss01, ss02)
- Contextual alternates (cv01, cv02)
- Antialiasing enabled

### Animations

- `bokeh-float` - Gentle floating effect for background elements
- `fadeIn` - Smooth fade and scale entrance
- `slideUp` - Slide up entrance animation
- `shimmer` - Loading shimmer effect
- `gradient-flow` - Flowing gradient animation

## Component Categories

### Primitives
Basic building blocks that other components are built upon:
- Button
- Card
- Badge
- Alert
- Input
- Checkbox
- Switch

### Effects
Visual enhancements and animations:
- Bokeh (animated background glow)
- NoiseGradient (textured gradient backgrounds)
- AnimatedLine (flowing connection lines)
- GlowingDot (status indicators)
- GridBackground (subtle grid pattern)

### Layout
Structural components:
- Container
- Grid
- Stack
- Section

### Composed
Complex components built from primitives:
- GradientCard
- IconBox
- StatusBadge
- FeatureCard

### Marketing
Section components for marketing pages:
- Hero
- Pricing
- Features
- CTA (Call to Action)

## Usage

### Basic Import

```tsx
import { Button } from '@/design-system/primitives/Button'
import { Card } from '@/design-system/primitives/Card'
import { Bokeh } from '@/design-system/effects/Bokeh'
```

### With Design Tokens

```tsx
// Import the design tokens CSS
import '@/design-system/tokens'

// Use CSS variables in your components
<div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
  Content
</div>
```

### Theme Switching

```tsx
// Toggle between light and dark themes
document.documentElement.classList.toggle('light')
```

## Storybook

All components have Storybook stories for development and documentation.

Run Storybook:
```bash
npm run storybook
```

## Development Guidelines

### Component Structure

Each component should have:
1. **Component file** (`Component.tsx`)
2. **Story file** (`Component.stories.tsx`)
3. **Type definitions** (included in component file)
4. **Documentation** (in Story file)

### Naming Conventions

- **Components:** PascalCase (e.g., `Button`, `GradientCard`)
- **Files:** PascalCase matching component name
- **CSS Classes:** kebab-case or Tailwind utilities
- **CSS Variables:** `--berget-*` prefix for brand tokens

### Props Pattern

Use TypeScript interfaces and React.forwardRef:

```tsx
export interface ButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // Component implementation
  }
)
```

### Variant Pattern

Use `class-variance-authority` for component variants:

```tsx
import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'variant-classes',
        primary: 'primary-classes',
      },
      size: {
        sm: 'small-classes',
        md: 'medium-classes',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)
```

## Accessibility

All components follow WAI-ARIA guidelines:
- Semantic HTML elements
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox
- CSS Custom Properties

## License

MIT
