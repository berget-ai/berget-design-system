import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard, FeatureCards } from "./FeatureCards";
import { Zap, Shield, Database, Globe, Lock, Cpu } from "lucide-react";

const meta = {
    title: "Organisms/Feature Card",
    component: FeatureCard,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
Individual feature card with icon, title, description, and optional badge/link.

**Perfect for:**
- Feature showcases
- Product highlights
- Service descriptions
- Benefits sections

**Note:** Use FeatureCards component for grid layouts.
        `
            }
        }
    },
    tags: ["autodocs"]
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof FeatureCard>;

/**
 * Default feature card
 */
export const Default: Story = {
    args: {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed and performance with sub-millisecond latency.",
        badge: "New"
    }
};

/**
 * With link
 */
export const WithLink: Story = {
    args: {
        icon: Shield,
        title: "Secure by Default",
        description: "Enterprise-grade security built in with end-to-end encryption.",
        linkText: "Learn more",
        linkHref: "#"
    }
};

/**
 * With badge and link
 */
export const WithBadgeAndLink: Story = {
    args: {
        icon: Database,
        title: "Scalable Database",
        description: "Handle millions of requests effortlessly with auto-sharding.",
        badge: "Popular",
        linkText: "View docs",
        linkHref: "#"
    }
};

/**
 * Without icon
 */
export const WithoutIcon: Story = {
    args: {
        title: "Simple Feature",
        description: "A simple feature card without an icon."
    }
};

/**
 * Three column grid
 */
export const ThreeColumns: Story = {
    render: () => (
        <FeatureCards
            features={[
                {
                    icon: Zap,
                    title: "Lightning Fast",
                    description:
                        "Optimized for speed and performance with sub-millisecond latency.",
                    badge: "New"
                },
                {
                    icon: Shield,
                    title: "Secure by Default",
                    description:
                        "Enterprise-grade security built in with end-to-end encryption.",
                    linkText: "Learn more",
                    linkHref: "#"
                },
                {
                    icon: Database,
                    title: "Scalable Database",
                    description:
                        "Handle millions of requests effortlessly with auto-sharding.",
                    badge: "Popular",
                    linkText: "View docs",
                    linkHref: "#"
                }
            ]}
            columns={3}
        />
    ),
    parameters: {
        layout: "padded"
    }
};

/**
 * Two column grid
 */
export const TwoColumns: Story = {
    render: () => (
        <FeatureCards
            features={[
                {
                    icon: Zap,
                    title: "Lightning Fast",
                    description:
                        "Optimized for speed and performance with sub-millisecond latency.",
                    linkText: "Learn more",
                    linkHref: "#"
                },
                {
                    icon: Shield,
                    title: "Secure by Default",
                    description:
                        "Enterprise-grade security built in with end-to-end encryption.",
                    linkText: "Learn more",
                    linkHref: "#"
                }
            ]}
            columns={2}
        />
    ),
    parameters: {
        layout: "padded"
    }
};

/**
 * Four column grid
 */
export const FourColumns: Story = {
    render: () => (
        <FeatureCards
            features={[
                {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "Optimized for speed and performance.",
                    badge: "New"
                },
                {
                    icon: Shield,
                    title: "Secure by Default",
                    description: "Enterprise-grade security built in.",
                    linkText: "Learn more",
                    linkHref: "#"
                },
                {
                    icon: Database,
                    title: "Scalable Database",
                    description: "Handle millions of requests effortlessly."
                },
                {
                    icon: Globe,
                    title: "Global CDN",
                    description: "Deploy close to your users worldwide.",
                    badge: "Popular"
                }
            ]}
            columns={4}
        />
    ),
    parameters: {
        layout: "padded"
    }
};

/**
 * One column grid
 */
export const OneColumn: Story = {
    render: () => (
        <FeatureCards
            features={[
                {
                    icon: Zap,
                    title: "Lightning Fast",
                    description:
                        "Optimized for speed and performance with sub-millisecond latency.",
                    linkText: "Learn more",
                    linkHref: "#"
                }
            ]}
            columns={1}
        />
    ),
    parameters: {
        layout: "padded"
    }
};

/**
 * Full grid with six features
 */
export const FullGrid: Story = {
    render: () => (
        <FeatureCards
            features={[
                {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "Optimized for speed and performance.",
                    badge: "New"
                },
                {
                    icon: Shield,
                    title: "Secure by Default",
                    description: "Enterprise-grade security built in.",
                    linkText: "Learn more",
                    linkHref: "#"
                },
                {
                    icon: Database,
                    title: "Scalable Database",
                    description: "Handle millions of requests effortlessly."
                },
                {
                    icon: Globe,
                    title: "Global CDN",
                    description: "Deploy close to your users worldwide.",
                    badge: "Popular"
                },
                {
                    icon: Lock,
                    title: "Data Privacy",
                    description: "Your data never leaves the EU.",
                    linkText: "Read more",
                    linkHref: "#"
                },
                {
                    icon: Cpu,
                    title: "Auto Scaling",
                    description: "Scale automatically based on demand."
                }
            ]}
            columns={3}
        />
    ),
    parameters: {
        layout: "padded"
    }
};
