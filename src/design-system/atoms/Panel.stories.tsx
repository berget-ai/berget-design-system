import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./Panel";

/**
 * Panel - base container component for all panel-like surfaces.
 *
 * Panel provides consistent styling with rounded corners, backdrop blur, and border.
 * Unlike Card, Panel has no gradient effects.
 */
const meta = {
    title: "Atoms/Panel",
    component: Panel,
    parameters: {
        docs: {
            description: {
                component: `
# Panel Component

Base container component for all panel-like surfaces.
Provides consistent styling with rounded corners, backdrop blur, and border.

**Styling:**
- rounded-2xl (24px)
- border border-slate/40
- bg-slate
- backdrop-blur-[12px]

**Difference from Card:**
- Panel: No gradient effects, pure surface
- Card: Includes radial gradient overlay and top highlight

**Padding Options:**
- \`sm\`, \`md\` (default), \`lg\`

**Use the Controls panel below** to experiment with different options.
                `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        padding: {
            control: "select",
            options: ["sm", "md", "lg"],
            description: "Internal padding"
        },
        radius: {
            control: "select",
            options: ["default", "lg", "xl"],
            description: "Border radius size"
        }
    }
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive panel - use Controls to change padding and radius
 */
export const Interactive: Story = {
    args: {
        padding: "md",
        radius: "default",
        children: (
            <div className="relative z-10">
                <h3 className="font-medium mb-2">Panel Component</h3>
                <p className="text-sm text-muted-foreground">
                    Base container with rounded corners, backdrop blur, and border.
                    Unlike Card, Panel has no gradient effects.
                </p>
            </div>
        )
    }
};

/**
 * Default panel - shows the panel with default styling
 */
export const Default: Story = {
    args: {
        children: (
            <div className="relative z-10">
                <h3 className="font-medium mb-2">Panel Title</h3>
                <p className="text-sm text-muted-foreground">
                    This is a panel with the default styling.
                </p>
            </div>
        )
    },
    render: args => (
        <div className="p-4 w-full max-w-md">
            <Panel {...args} />
        </div>
    )
};

/**
 * Padding options - shows all padding options at once
 */
export const PaddingOptions: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-4 w-[600px]">
            <Panel padding="sm">
                <p className="text-sm">Small - Compact spacing</p>
            </Panel>
            <Panel padding="md">
                <p className="text-sm">Medium - Default comfortable spacing</p>
            </Panel>
            <Panel padding="lg">
                <p className="text-sm">Large - Generous spacing</p>
            </Panel>
        </div>
    )
};

/**
 * Border radius variants
 */
export const RadiusVariants: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-6 w-[600px]">
            <Panel radius="default" padding="lg">
                <div className="relative z-10">
                    <p className="text-base font-medium mb-1">Default (rounded-2xl)</p>
                    <p className="text-sm text-white/60">Standard 24px border radius</p>
                </div>
            </Panel>

            <Panel radius="lg" padding="lg">
                <div className="relative z-10">
                    <p className="text-base font-medium mb-1">Large (rounded-3xl)</p>
                    <p className="text-sm text-white/60">
                        Larger 48px radius - perfect for stat cards
                    </p>
                </div>
            </Panel>

            <Panel radius="xl" padding="lg">
                <div className="relative z-10">
                    <p className="text-base font-medium mb-1">XL (rounded-[2rem])</p>
                    <p className="text-sm text-white/60">
                        Extra large 64px radius - for big content panels
                    </p>
                </div>
            </Panel>
        </div>
    )
};