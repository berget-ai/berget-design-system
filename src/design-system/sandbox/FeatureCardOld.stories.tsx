import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./FeatureCardOld";
import { Zap, Shield, Database, CircleX } from "lucide-react";

const meta: Meta<typeof FeatureCard> = {
    title: "Sandbox/Feature Card Old",
    component: FeatureCard,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
    args: {
        title: "Fast Performance",
        description: "Lightning-fast response times with our optimized infrastructure.",
        features: [
            "Sub-millisecond latency",
            "Global CDN distribution",
            "Automatic scaling"
        ],
        icon: <Zap className="size-8" />
    }
};

export const Glass: Story = {
    args: {
        ...Default.args,
        variant: "glass"
    }
};

export const Solid: Story = {
    args: {
        ...Default.args,
        variant: "solid"
    }
};

export const Dark: Story = {
    args: {
        ...Default.args,
        variant: "dark"
    }
};

export const WithoutCheckmarks: Story = {
    args: {
        ...Default.args,
        showCheckmarks: false
    }
};

export const WithoutFeatures: Story = {
    args: {
        title: "Simple Feature",
        description: "A simple feature card without a feature list.",
        icon: <CircleX className="size-8" />
    }
};

export const WithoutIcon: Story = {
    args: {
        title: "No Icon",
        description: "Feature card without an icon.",
        features: ["Feature 1", "Feature 2", "Feature 3"]
    }
};

export const MultipleCards: Story = {
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
                title="Lightning Fast"
                description="Optimized for speed and performance."
                features={["Sub-ms latency", "Global CDN", "Auto scaling"]}
                icon={<Zap className="size-8" />}
            />
            <FeatureCard
                title="Secure by Default"
                description="Enterprise-grade security built in."
                features={["End-to-end encryption", "SOC 2 compliant", "2FA support"]}
                icon={<Shield className="size-8" />}
                variant="glass"
            />
            <FeatureCard
                title="Scalable Database"
                description="Handle millions of requests effortlessly."
                features={[
                    "Auto-sharding",
                    "Point-in-time recovery",
                    "Real-time analytics"
                ]}
                icon={<Database className="size-8" />}
                variant="solid"
            />
        </div>
    )
};
