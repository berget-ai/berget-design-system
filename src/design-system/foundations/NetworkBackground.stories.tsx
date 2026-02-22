import type { Meta, StoryObj } from "@storybook/react";
import { NetworkBackground } from "./NetworkBackground";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/Card";
import { Link, Zap, Shield } from "lucide-react";

const meta = {
    title: "Foundations/NetworkBackground",
    component: NetworkBackground,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof NetworkBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        nodeCount: 50,
        opacity: 0.4
    },
    render: args => (
        <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] relative flex items-center justify-center">
            <NetworkBackground {...args} />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl font-serif text-white mb-4">Connected Network</h1>
                <p className="text-white/70 max-w-md mx-auto">
                    Animated network of connected nodes that creates a tech/enterprise
                    aesthetic. Nodes float slowly and particles travel along connections.
                </p>
            </div>
        </div>
    )
};

export const LowOpacity: Story = {
    args: {
        nodeCount: 50,
        opacity: 0.2
    },
    render: args => (
        <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] relative flex items-center justify-center">
            <NetworkBackground {...args} />
            <div className="relative z-10">
                <Card variant="glass" className="max-w-md">
                    <CardHeader>
                        <CardTitle>Low Opacity (0.2)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/70">
                            Subtle network effect that doesn't distract from content.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export const HighOpacity: Story = {
    args: {
        nodeCount: 50,
        opacity: 0.6
    },
    render: args => (
        <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] relative flex items-center justify-center">
            <NetworkBackground {...args} />
            <div className="relative z-10">
                <Card variant="glass" className="max-w-md">
                    <CardHeader>
                        <CardTitle>High Opacity (0.6)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/70">
                            More prominent network effect for visual impact.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export const FewNodes: Story = {
    args: {
        nodeCount: 20,
        opacity: 0.4
    },
    render: args => (
        <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] relative flex items-center justify-center">
            <NetworkBackground {...args} />
            <div className="relative z-10">
                <Card variant="glass" className="max-w-md">
                    <CardHeader>
                        <CardTitle>Few Nodes (20)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/70">
                            Sparse network with fewer connections.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export const ManyNodes: Story = {
    args: {
        nodeCount: 80,
        opacity: 0.4
    },
    render: args => (
        <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] relative flex items-center justify-center">
            <NetworkBackground {...args} />
            <div className="relative z-10">
                <Card variant="glass" className="max-w-md">
                    <CardHeader>
                        <CardTitle>Many Nodes (80)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/70">
                            Dense network with many connections and particles.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export const WithGradientBackground: Story = {
    args: {
        nodeCount: 50,
        opacity: 0.3
    },
    render: args => (
        <div className="min-h-screen bg-gradient-to-br from-[#2D6A4F] via-[#40916C] to-[#52B788] relative flex items-center justify-center">
            <NetworkBackground {...args} />
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl font-serif text-white mb-4">
                    Enterprise Platform
                </h1>
                <p className="text-white/90 max-w-md mx-auto">
                    Network background layered on top of Berget brand gradient. Perfect
                    for hero sections and product showcases.
                </p>
            </div>
        </div>
    )
};

export const WithCardContent: Story = {
    args: {
        nodeCount: 40,
        opacity: 0.3
    },
    render: args => (
        <div className="min-h-screen bg-[#0A0A0A] relative flex items-center justify-center">
            <NetworkBackground {...args} />
            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-serif text-white mb-12 text-center">
                        Platform Features
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card variant="glass">
                            <CardHeader>
                                <Link
                                    className="w-6 h-6 mb-4 text-white"
                                    strokeWidth={1.5}
                                />
                                <CardTitle>Connected</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/60 text-sm">
                                    Seamlessly integrate with your existing
                                    infrastructure.
                                </p>
                            </CardContent>
                        </Card>
                        <Card variant="glass">
                            <CardHeader>
                                <Zap
                                    className="w-6 h-6 mb-4 text-white"
                                    strokeWidth={1.5}
                                />
                                <CardTitle>Fast</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/60 text-sm">
                                    High-performance architecture for real-time
                                    operations.
                                </p>
                            </CardContent>
                        </Card>
                        <Card variant="glass">
                            <CardHeader>
                                <Shield
                                    className="w-6 h-6 mb-4 text-white"
                                    strokeWidth={1.5}
                                />
                                <CardTitle>Secure</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-white/60 text-sm">
                                    Enterprise-grade security with end-to-end encryption.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
};
