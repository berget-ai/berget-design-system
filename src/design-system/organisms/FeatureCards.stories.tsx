import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./FeatureCards";
import { Zap, Shield, Database, Globe, Lock, Cpu } from "lucide-react";

const meta = {
    title: "Organisms/Feature Cards",
    component: FeatureCard,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: `
Feature cards for showcasing product features and benefits.

**Perfect for:**
- Feature showcases
- Product highlights
- Service descriptions
- Benefits sections
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
 * Grid of feature cards
 */
export const Grid: Story = {
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for speed and performance."
                badge="New"
            />
            <FeatureCard
                icon={Shield}
                title="Secure by Default"
                description="Enterprise-grade security built in."
                linkText="Learn more"
                linkHref="#"
            />
            <FeatureCard
                icon={Database}
                title="Scalable Database"
                description="Handle millions of requests effortlessly."
            />
            <FeatureCard
                icon={Globe}
                title="Global CDN"
                description="Deploy close to your users worldwide."
                badge="Popular"
            />
            <FeatureCard
                icon={Lock}
                title="Data Privacy"
                description="Your data never leaves the EU."
                linkText="Read more"
                linkHref="#"
            />
            <FeatureCard
                icon={Cpu}
                title="Auto Scaling"
                description="Scale automatically based on demand."
            />
        </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-4xl">
            <FeatureCard
                icon={Zap}
                title="Lightning Fast"
                description="Optimized for speed and performance with sub-millisecond latency."
                linkText="Learn more"
                linkHref="#"
            />
            <FeatureCard
                icon={Shield}
                title="Secure by Default"
                description="Enterprise-grade security built in with end-to-end encryption."
                linkText="Learn more"
                linkHref="#"
            />
        </div>
    ),
    parameters: {
        layout: "padded"
    }
};
