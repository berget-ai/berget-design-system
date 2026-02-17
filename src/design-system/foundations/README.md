# Foundations

Foundational components and primitives for the Berget Design System.

This directory contains the lowest-level building blocks that other components depend on:

## Background Components

Visual background primitives for creating immersive interfaces:

-   **GradientBackground** - Smooth color gradients
-   **GrainyGradientBackground** - Textured gradients with grain effect
-   **GridBackground** - Subtle grid pattern for structure
-   **NetworkBackground** - Animated network visualization
-   **PatternBackground** - Decorative pattern backgrounds

## Design Tokens (Coming Soon)

Future additions will include:

-   Color tokens
-   Typography tokens
-   Spacing tokens
-   Border radius tokens
-   Shadow tokens
-   Animation tokens

## Usage

Foundations are not meant to be used directly in most cases. They are consumed by higher-level components (Atoms, Molecules, Organisms).

```tsx
// ❌ Don't use directly in app code
import { GridBackground } from "./foundations/GridBackground";

// ✅ Use through components that consume them
import { Card } from "./molecules/Card"; // Card may use GridBackground internally
```
