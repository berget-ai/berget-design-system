# Atomic Design Implementation Guide

This document explains how the Berget Design System implements Atomic Design principles.

## What is Atomic Design?

Atomic Design is a methodology for creating design systems. It breaks down UI into five levels:

1. **Atoms** - Basic building blocks (buttons, inputs, labels)
2. **Molecules** - Groups of atoms working together (form fields, cards)
3. **Organisms** - Complex UI sections (headers, feature grids)
4. **Templates** - Page-level structures
5. **Pages** - Specific instances of templates

## Our Implementation

We use a simplified 4-level structure focused on React components:

```
design-system/
├── atoms/           # Atomic components
├── molecules/       # Composed components
├── organisms/       # Complex UI sections
├── foundations/     # Layout & spacing
├── utilities/       # Visual effects
└── templates/       # Complete layouts
```

---

## Atoms

**Definition:** The smallest possible components that cannot be broken down further.

**Characteristics:**

- Single responsibility
- No internal composition
- Highly reusable
- Minimal props
- No business logic

**Examples:**

- `Button` - Clickable action element
- `Input` - Text input field
- `Checkbox` - Form checkbox
- `Badge` - Status indicator
- `Alert` - Message notification
- `Panel` - Base surface container
- `Divider` - Visual separator
- `Link` - Styled link

**When to create an Atom:**

- Component has a single, clear purpose
- Can be used independently without context
- Doesn't need other components to function
- Styling is self-contained

**Example:**

```tsx
// ✅ GOOD - Simple, single-purpose atom
import { Button } from "@/design-system/atoms";

<Button variant="primary" size="md">
    Click me
</Button>;
```

---

## Molecules

**Definition:** Groups of atoms that work together to perform a specific function.

**Characteristics:**

- Combine 2+ atoms
- Have clear, single purpose
- Provide structure for content
- May include simple layout logic
- Reusable across contexts

**Examples:**

- `Card` - Panel + Header + Title + Description + Content + Footer
- `List` - Multiple list items with consistent styling
- `SectionHeader` - Title + Description + optional actions
- `Tabs` - Tab buttons + tab content panels

**When to create a Molecule:**

- You're repeatedly combining the same atoms
- The combination has a clear, single purpose
- The pattern appears in multiple contexts
- Internal structure is consistent

**Example:**

```tsx
// ✅ GOOD - Molecule combining atoms
import { Card } from "@/design-system/molecules";

<Card variant="elevated">
    <CardHeader>
        <CardTitle>API Configuration</CardTitle>
        <CardDescription>Configure your endpoint</CardDescription>
    </CardHeader>
    <CardContent>
        <Input label="API Key" />
    </CardContent>
    <CardFooter>
        <Button>Save</Button>
    </CardFooter>
</Card>;
```

---

## Organisms

**Definition:** Complex, distinct sections of the UI composed of molecules and atoms.

**Characteristics:**

- Combine molecules and atoms
- Represent complete UI sections
- May include business logic
- Self-contained functionality
- Context-specific

**Examples:**

- `FeatureCard` - Panel + Icon + Title + Description + Feature list
- `HeroBlock` - Full-width hero with background, content, actions
- `StatCard` - Display statistics with visual styling
- `CodeBlock` - Code display with syntax highlighting
- `EmailTemplate` - Complete email structure

**When to create an Organism:**

- Component represents a complete UI section
- Has complex internal structure
- Appears as a distinct section in layouts
- May need its own state or logic

**Example:**

```tsx
// ✅ GOOD - Organism for complete section
import { FeatureCard } from "@/design-system/organisms";

<FeatureCard
    icon={Cloud}
    title="Serverless"
    description="Deploy without infrastructure"
    features={["Auto-scaling", "Pay per use", "EU regions"]}
    variant="moss"
/>;
```

---

## Foundations

**Definition:** Layout and spacing utilities that provide structure.

**Characteristics:**

- No visual styling beyond layout
- Composable patterns
- Responsive behavior
- Framework-agnostic concepts

**Examples:**

- `Container` - Responsive width constraints
- `Stack` - Consistent vertical spacing

**Note:** These are not part of strict Atomic Design but are essential for our system.

---

## Utilities

**Definition:** Visual effects and enhancements.

**Characteristics:**

- Decorative or functional effects
- Can be applied to any component
- Self-contained

**Examples:**

- `GridBackground` - Subtle grid pattern
- `GradientBackground` - Animated gradients
- `NetworkBackground` - Particle network animation

---

## Decision Tree

### Where should my component go?

```
Start here
│
├─ Is it a basic building block?
│  └─ Can it be used independently?
│     └─ Does it combine other components?
│        ├─ YES → It's an ATOM
│        └─ NO → It's a MOLECULE
│
├─ Is it a complete UI section?
│  └─ Does it have complex structure?
│     └─ Is it self-contained?
│        └─ YES → It's an ORGANISM
│
├─ Is it for layout/spacing?
│  └─ YES → It's a FOUNDATION
│
└─ Is it a visual effect?
   └─ YES → It's a UTILITY
```

### Visual Guide

```
ATOMS (Building Blocks)
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Button    │  │    Input    │  │   Badge     │
└─────────────┘  └─────────────┘  └─────────────┘

MOLECULES (Composed)
┌─────────────────────────────────────┐
│  Card                              │
│  ┌─────────────────────────────┐   │
│  │ Header: Title + Description │   │
│  ├─────────────────────────────┤   │
│  │ Content: [Your content]     │   │
│  ├─────────────────────────────┤   │
│  │ Footer: Actions             │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘

ORGANISMS (Complex Sections)
┌─────────────────────────────────────┐
│  FeatureCard                        │
│                                     │
│     🎨 Icon                        │
│                                     │
│  Feature Title                      │
│  Brief description text             │
│                                     │
│  ✓ Feature bullet 1                │
│  ✓ Feature bullet 2                │
│  ✓ Feature bullet 3                │
│                                     │
└─────────────────────────────────────┘
```

---

## Classification Examples

### Panel → Atom

**Why:** Panel is a base container with no internal structure. It's the foundation for other components.

```tsx
// ✅ ATOM - Simple container
<Panel variant="elevated" padding="lg">
    Content
</Panel>
```

### Card → Molecule

**Why:** Card combines Panel with structured sections (Header, Title, Description, Content, Footer).

```tsx
// ✅ MOLECULE - Structured composition
<Card>
    <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardDescription>Description</CardDescription>
    </CardHeader>
    <CardContent>Content</CardContent>
    <CardFooter>Actions</CardFooter>
</Card>
```

### Alert → Atom

**Why:** Alert is a simple component with variants. It doesn't combine other components internally.

```tsx
// ✅ ATOM - Simple variant component
<Alert variant="success">
    <AlertDescription>Success message</AlertDescription>
</Alert>
```

### FeatureCard → Organism

**Why:** FeatureCard is a complete marketing section with complex structure (icon, title, description, features).

```tsx
// ✅ ORGANISM - Complete UI section
<FeatureCard
    icon={Cloud}
    title="Serverless"
    description="Deploy without infrastructure"
    features={["Auto-scaling", "Pay per use"]}
    variant="moss"
/>
```

---

## Migration Guide

### From Legacy Structure

**Old Structure:**

```
design-system/
├── primitives/      # Mixed atoms and molecules
├── layout/          # Foundations
├── blocks/          # Mixed molecules and organisms
├── effects/         # Utilities
└── templates/       # Templates
```

**New Structure:**

```
design-system/
├── atoms/           # Primitives (simple)
├── molecules/       # Primitives (composed) + some blocks
├── organisms/       # Complex blocks
├── foundations/     # Layout
├── utilities/       # Effects
└── templates/       # Templates
```

### Component Migration

| Old Path                     | New Path                       | Reason                         |
| ---------------------------- | ------------------------------ | ------------------------------ |
| `primitives/Panel.tsx`       | `atoms/Panel.tsx`              | Base container, no composition |
| `primitives/Card.tsx`        | `molecules/Card.tsx`           | Composed of Panel + structure  |
| `primitives/Alert.tsx`       | `atoms/Alert.tsx`              | Simple variant component       |
| `blocks/FeatureCard.tsx`     | `organisms/FeatureCard.tsx`    | Complex UI section             |
| `layout/Container.tsx`       | `foundations/Container.tsx`    | Layout utility                 |
| `effects/GridBackground.tsx` | `utilities/GridBackground.tsx` | Visual effect                  |

---

## Best Practices

### ✅ DO

- **Start with atoms** - Build from the bottom up
- **Compose molecules from atoms** - Reuse existing components
- **Keep atoms simple** - Single responsibility
- **Make molecules focused** - Clear, single purpose
- **Design organisms as sections** - Self-contained UI
- **Document composition** - Explain what components combine

### ❌ DON'T

- **Put complex logic in atoms** - Keep them simple
- **Over-compose molecules** - Don't combine unrelated atoms
- **Make organisms too generic** - They should be specific
- **Mix levels** - Don't put molecules inside atoms
- **Skip levels** - Don't jump from atom to organism without good reason

---

## Testing Strategy

### Atoms

- Test all variants
- Test props individually
- Test accessibility
- Test edge cases (disabled, loading, etc.)

### Molecules

- Test composition of atoms
- Test structure variations
- Test responsive behavior
- Test accessibility of composed elements

### Organisms

- Test complete functionality
- Test state management
- Test integration with other organisms
- Test user flows

---

## Common Questions

### Q: Why is Alert an atom and not a molecule?

**A:** Alert has variants but doesn't combine other components. It's a simple component with different styles, similar to Button.

### Q: Why is Card a molecule and not an atom?

**A:** Card combines Panel with structured sections (Header, Title, Description, Content, Footer). It's a composition of multiple components.

### Q: Why is FeatureCard an organism and not a molecule?

**A:** FeatureCard represents a complete UI section with complex structure (icon, title, description, features). It's more than just composition—it's a self-contained feature showcase.

### Q: Can I have molecules inside organisms?

**A:** Yes! Organisms often contain molecules. For example, a complex organism might contain multiple Card molecules.

### Q: What if a component doesn't fit clearly?

**A:** Start with the simpler level (atom or molecule). You can always promote it later if it becomes more complex.

---

## Resources

- **[Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)** - Original methodology
- **[COMPONENT-GUIDE.md](./COMPONENT-GUIDE.md)** - Component selection guide
- **[README.md](./README.md)** - Design system overview

---

**Remember:** Atomic Design is a guide, not a strict rule. Use judgment to create a system that works for your team and project.
