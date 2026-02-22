import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { Panel } from "../atoms/Panel";
import { Zap, Shield, Database, Globe, Lock, Server } from "lucide-react";

const meta = {
    title: "Utilities/Grid",
    component: Grid,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
Responsive grid layouts for feature cards, quotes, and other content.

**Design Principles:**
- Mobile-first responsive design
- Consistent spacing system
- Flexible column configurations
- Semantic max-width containers

**When to Use:**
- Feature card grids
- Quote/testimonial grids
- Product showcases
- Any responsive grid layout

**Breakpoint Defaults:**
- sm (< 640px): 1 column
- md (640px+): 2 columns
- lg (1024px+): 3 columns
- xl (1280px+): 3 columns
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        gap: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
            description: "Spacing between grid items"
        },
        maxWidth: {
            control: "select",
            options: ["sm", "md", "lg", "xl", "full"],
            description: "Maximum width for the grid container"
        }
    }
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
    padding="lg" radius="lg">
        <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-sm text-white/60">{description}</p>
        </div>
    </Panel>
);

/**
 * Default grid - 3 columns with medium gap
 */
export const Default: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <Grid>
                <DemoCard title="Feature 1" description="Description for feature 1" icon={Zap} />
                <DemoCard title="Feature 2" description="Description for feature 2" icon={Shield} />
                <DemoCard title="Feature 3" description="Description for feature 3" icon={Database} />
            </Grid>
        </div>
    )
};

/**
 * Two columns - Smaller grid
 */
export const TwoColumns: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <Grid columns={{ sm: 1, md: 2 }}>
                <DemoCard title="Feature 1" description="Description for feature 1" icon={Zap} />
                <DemoCard title="Feature 2" description="Description for feature 2" icon={Shield} />
            </Grid>
        </div>
    )
};

/**
 * Four columns - Larger grid
 */
export const FourColumns: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <Grid columns={{ sm: 1, md: 2, lg: 4 }}>
                <DemoCard title="Feature 1" description="Description 1" icon={Zap} />
                <DemoCard title="Feature 2" description="Description 2" icon={Shield} />
                <DemoCard title="Feature 3" description="Description 3" icon={Database} />
                <DemoCard title="Feature 4" description="Description 4" icon={Globe} />
            </Grid>
        </div>
    )
};

/**
 * Compact - Smaller gaps
 */
export const Compact: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <Grid gap="sm">
                <DemoCard title="Feature 1" description="Description for feature 1" icon={Zap} />
                <DemoCard title="Feature 2" description="Description for feature 2" icon={Shield} />
                <DemoCard title="Feature 3" description="Description for feature 3" icon={Database} />
            </Grid>
        </div>
    )
};

/**
 * Spacious - Larger gaps
 */
export const Spacious: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <Grid gap="xl">
                <DemoCard title="Feature 1" description="Description for feature 1" icon={Zap} />
                <DemoCard title="Feature 2" description="Description for feature 2" icon={Shield} />
                <DemoCard title="Feature 3" description="Description for feature 3" icon={Database} />
            </Grid>
        </div>
    )
};

/**
 * With max width - lg container
 */
export const WithMaxWidth: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <Grid maxWidth="lg">
                <DemoCard title="Feature 1" description="Description for feature 1" icon={Zap} />
                <DemoCard title="Feature 2" description="Description for feature 2" icon={Shield} />
                <DemoCard title="Feature 3" description="Description for feature 3" icon={Database} />
            </Grid>
        </div>
    )
};

/**
 * Complex layout - 6 items, 3 columns, large gap
 */
export const ComplexLayout: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <Grid gap="lg">
                <DemoCard title="Feature 1" description="Description for feature 1" icon={Zap} />
                <DemoCard title="Feature 2" description="Description for feature 2" icon={Shield} />
                <DemoCard title="Feature 3" description="Description for feature 3" icon={Database} />
                <DemoCard title="Feature 4" description="Description for feature 4" icon={Globe} />
                <DemoCard title="Feature 5" description="Description for feature 5" icon={Lock} />
                <DemoCard title="Feature 6" description="Description for feature 6" icon={Server} />
            </Grid>
        </div>
    )
};

/**
 * Responsive comparison - Shows how grid adapts to screen size
 */
export const ResponsiveComparison: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div className="min-h-screen bg-background py-12">
            <div className="space-y-16">
                <div>
                    <h3 className="text-center text-lg font-medium mb-4">
                        1 Column (sm) → 2 Columns (md) → 3 Columns (lg)
                    </h3>
                    <Grid columns={{ sm: 1, md: 2, lg: 3 }}>
                        <DemoCard title="Card 1" description="Responsive card 1" icon={Zap} />
                        <DemoCard title="Card 2" description="Responsive card 2" icon={Shield} />
                        <DemoCard title="Card 3" description="Responsive card 3" icon={Database} />
                    </Grid>
                </div>

                <div>
                    <h3 className="text-center text-lg font-medium mb-4">
                        1 Column (sm) → 2 Columns (md) → 4 Columns (lg)
                    </h3>
                    <Grid columns={{ sm: 1, md: 2, lg: 4 }}>
                        <DemoCard title="Card 1" description="Responsive card 1" icon={Zap} />
                        <DemoCard title="Card 2" description="Responsive card 2" icon={Shield} />
                        <DemoCard title="Card 3" description="Responsive card 3" icon={Database} />
                        <DemoCard title="Card 4" description="Responsive card 4" icon={Globe} />
                    </Grid>
                </div>
            </div>
        </div>
    )
};