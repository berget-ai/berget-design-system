import type { Meta, StoryObj } from "@storybook/react";
import { GradientBackground } from "./GradientBackground";
import { NetworkBackground } from "./NetworkBackground";
import { Card, CardContent, CardHeader, CardTitle } from "../molecules/Card";
import { Button } from "../atoms/Button";
import { Zap, Shield, Palette } from "lucide-react";

const meta = {
    title: "Foundations/GradientBackground",
    component: GradientBackground,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof GradientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "berget"
    },
    render: args => (
        <GradientBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="text-center px-4">
                <h1 className="text-5xl font-serif text-white mb-4">Berget Gradient</h1>
                <p className="text-white/80 max-w-md mx-auto">
                    Full-screen gradient background using Berget brand colors. Creates
                    visual impact and draws attention.
                </p>
            </div>
        </GradientBackground>
    )
};

export const Subtle: Story = {
    args: {
        variant: "subtle"
    },
    render: args => (
        <GradientBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <Card variant="glass" className="max-w-md">
                <CardHeader>
                    <CardTitle>Subtle Gradient</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white/70">
                        Very subtle dark gradient that provides depth without distraction.
                        Perfect for content-heavy pages.
                    </p>
                </CardContent>
            </Card>
        </GradientBackground>
    )
};

export const WithHeroContent: Story = {
    args: {
        variant: "berget"
    },
    render: args => (
        <GradientBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-serif text-white mb-6">
                    Welcome to Berget
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                    Build beautiful, scalable applications with our design system.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button>Get Started</Button>
                    <Button variant="outline">View Documentation</Button>
                </div>
            </div>
        </GradientBackground>
    )
};

export const WithSubtleHero: Story = {
    args: {
        variant: "subtle"
    },
    render: args => (
        <GradientBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
                    Enterprise Solutions
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                    Scalable infrastructure for growing businesses. Built with security
                    and performance in mind.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Button>Contact Sales</Button>
                    <Button variant="outline">Learn More</Button>
                </div>
            </div>
        </GradientBackground>
    )
};

export const WithNetworkOverlay: Story = {
    args: {
        variant: "berget"
    },
    render: args => (
        <GradientBackground
            {...args}
            className="min-h-screen relative flex items-center justify-center"
        >
            <NetworkBackground nodeCount={50} opacity={0.3} />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl font-serif text-white mb-6">
                    Connected Platform
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Network background layered on Berget gradient creates a powerful
                    tech/enterprise aesthetic perfect for product showcases.
                </p>
            </div>
        </GradientBackground>
    )
};

export const WithFeatureCards: Story = {
    args: {
        variant: "berget"
    },
    render: args => (
        <GradientBackground {...args} className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-white mb-4">
                        Platform Features
                    </h1>
                    <p className="text-white/80 max-w-2xl mx-auto">
                        Everything you need to build exceptional applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card variant="glass">
                        <CardHeader>
                            <Zap className="w-6 h-6 mb-4 text-white" strokeWidth={1.5} />
                            <CardTitle>Lightning Fast</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-white/70">
                                Optimized performance for instant response times.
                            </p>
                        </CardContent>
                    </Card>
                    <Card variant="glass">
                        <CardHeader>
                            <Shield
                                className="w-6 h-6 mb-4 text-white"
                                strokeWidth={1.5}
                            />
                            <CardTitle>Secure by Design</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-white/70">
                                Enterprise-grade security built into every layer.
                            </p>
                        </CardContent>
                    </Card>
                    <Card variant="glass">
                        <CardHeader>
                            <Palette
                                className="w-6 h-6 mb-4 text-white"
                                strokeWidth={1.5}
                            />
                            <CardTitle>Beautiful UI</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-white/70">
                                Stunning components ready to use out of the box.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GradientBackground>
    )
};

export const WithPricingCards: Story = {
    args: {
        variant: "subtle"
    },
    render: args => (
        <GradientBackground {...args} className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-white mb-4">
                        Simple Pricing
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Choose the plan that fits your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card variant="glass">
                        <CardHeader>
                            <CardTitle>Starter</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-serif text-white mb-4">$0</div>
                            <ul className="space-y-2 text-white/60 mb-6">
                                <li>✓ 1 project</li>
                                <li>✓ Basic features</li>
                                <li>✓ Community support</li>
                            </ul>
                            <Button variant="outline" className="w-full">
                                Get Started
                            </Button>
                        </CardContent>
                    </Card>
                    <Card variant="glass" className="border-[#52B788]/30">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#52B788] text-white text-xs font-medium rounded-full">
                            Popular
                        </div>
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-serif text-white mb-4">$29</div>
                            <ul className="space-y-2 text-white/60 mb-6">
                                <li>✓ Unlimited projects</li>
                                <li>✓ Advanced features</li>
                                <li>✓ Priority support</li>
                            </ul>
                            <Button className="w-full">Get Started</Button>
                        </CardContent>
                    </Card>
                    <Card variant="glass">
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-serif text-white mb-4">
                                Custom
                            </div>
                            <ul className="space-y-2 text-white/60 mb-6">
                                <li>✓ Everything in Pro</li>
                                <li>✓ Custom integrations</li>
                                <li>✓ Dedicated support</li>
                            </ul>
                            <Button variant="outline" className="w-full">
                                Contact Sales
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GradientBackground>
    )
};
