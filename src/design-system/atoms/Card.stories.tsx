import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { GradientBackground } from "../foundations/GradientBackground";

/**
 * Card component - base container for card-like surfaces.
 *
 * Designed with Scandinavian principles: clean, functional, and beautiful.
 */
const meta = {
    title: "Atoms/Card",
    component: Card,
    parameters: {
        docs: {
            description: {
                component: `
The Card component is a base container for all card-like surfaces.
It provides consistent styling with rounded corners, backdrop blur, and gradient effects.

**Variants:**
- \`highlight\` (default) - Semi-transparent, blends into background with sharp edge
- \`glass\` - Lighter, ethereal feel with cloud/5, perfect for overlays
- \`solid\` - Most authoritative, no transparency, perfect for fixed elements

**Common Features:**
- rounded-2xl (24px)
- Radial gradient overlay with cloud opacity 0.04
- Top highlight (3px) with radial ellipse gradient, cloud opacity 0.3
- Subtle hover effect: border opacity increases on hover

**Padding Options:**
- \`sm\` - Small padding (16px)
- \`md\` - Medium padding (24px, default)
- \`lg\` - Large padding (32px)

**Usage:**
This is a base atom with optional padding.
                `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["highlight", "glass", "solid"],
            description: "Visual style variant"
        },
        padding: {
            control: "select",
            options: ["sm", "md", "lg"],
            description: "Internal padding"
        }
    }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Card - shows the card with default (highlight) styling
 */
export const Default: Story = {
    args: {
        variant: "highlight",
        children: (
            <div className="p-6">
                <h3 className="text-lg font-medium mb-2">Card Title</h3>
                <p className="text-muted-foreground">
                    This is a card with the default highlight styling. Semi-transparent with sharp edge.
                </p>
            </div>
        )
    },
    render: args => (
        <GradientBackground variant="berget">
            <div className="p-4 w-full max-w-md">
                <Card {...args} />
            </div>
        </GradientBackground>
    )
};

/**
 * Glass Variant - lighter, ethereal feel
 */
export const Glass: Story = {
    args: {
        variant: "glass",
        children: (
            <div className="p-6">
                <h3 className="text-lg font-medium mb-2">Glass Card</h3>
                <p className="text-muted-foreground">
                    Lighter, ethereal feel with cloud/5. Perfect for overlays.
                </p>
            </div>
        )
    },
    render: args => (
        <GradientBackground variant="berget">
            <div className="p-4 w-full max-w-md">
                <Card {...args} />
            </div>
        </GradientBackground>
    )
};

/**
 * Solid Variant - most authoritative
 */
export const Solid: Story = {
    args: {
        variant: "solid",
        children: (
            <div className="p-6">
                <h3 className="text-lg font-medium mb-2">Solid Card</h3>
                <p className="text-muted-foreground">
                    Most authoritative, no transparency. Perfect for fixed elements.
                </p>
            </div>
        )
    },
    render: args => (
        <GradientBackground variant="berget">
            <div className="p-4 w-full max-w-md">
                <Card {...args} />
            </div>
        </GradientBackground>
    )
};

/**
 * With Content - card with rich content
 */
export const WithContent: Story = {
    args: {
        variant: "highlight",
        children: (
            <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-moss/20 flex items-center justify-center">
                        <span className="text-moss">AI</span>
                    </div>
                    <div>
                        <h3 className="font-medium">AI Assistant</h3>
                        <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                    This card demonstrates how to add rich content including icons, headers, and descriptions.
                </p>
                <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-sm rounded-full bg-moss text-peak">
                        Action
                    </button>
                    <button className="px-3 py-1.5 text-sm rounded-full border border-cloud/20">
                        Cancel
                    </button>
                </div>
            </div>
        )
    },
    render: args => (
        <GradientBackground variant="berget">
            <div className="p-4 w-full max-w-md">
                <Card {...args} />
            </div>
        </GradientBackground>
    )
};

/**
 * All Variants - shows all variants side by side on gradient background
 */
export const AllVariants: Story = {
    args: {},
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <GradientBackground variant="berget">
            <div className="flex flex-wrap gap-6 p-6">
                <Card variant="highlight">
                    <div className="p-6">
                        <h3 className="text-lg font-medium mb-2">Highlight</h3>
                        <p className="text-muted-foreground text-sm">
                            Semi-transparent, blends into background with sharp edge
                        </p>
                    </div>
                </Card>
                <Card variant="glass">
                    <div className="p-6">
                        <h3 className="text-lg font-medium mb-2">Glass</h3>
                        <p className="text-muted-foreground text-sm">
                            Lighter, ethereal feel with cloud/5
                        </p>
                    </div>
                </Card>
                <Card variant="solid">
                    <div className="p-6">
                        <h3 className="text-lg font-medium mb-2">Solid</h3>
                        <p className="text-muted-foreground text-sm">
                            Most authoritative, no transparency
                        </p>
                    </div>
                </Card>
            </div>
        </GradientBackground>
    )
};

/**
 * Padding Options - shows all padding options side by side
 */
export const PaddingOptions: Story = {
    args: {},
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <GradientBackground variant="berget">
            <div className="flex flex-wrap gap-6 p-6">
                <Card variant="highlight" padding="sm">
                    <h3 className="text-lg font-medium mb-2">Small Padding</h3>
                    <p className="text-muted-foreground text-sm">
                        p-4 (16px) - Compact spacing
                    </p>
                </Card>
                <Card variant="highlight" padding="md">
                    <h3 className="text-lg font-medium mb-2">Medium Padding</h3>
                    <p className="text-muted-foreground text-sm">
                        p-6 (24px) - Default comfortable spacing
                    </p>
                </Card>
                <Card variant="highlight" padding="lg">
                    <h3 className="text-lg font-medium mb-2">Large Padding</h3>
                    <p className="text-muted-foreground text-sm">
                        p-8 (32px) - Generous spacing
                    </p>
                </Card>
            </div>
        </GradientBackground>
    )
};