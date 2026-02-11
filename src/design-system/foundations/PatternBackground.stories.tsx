import type { Meta, StoryObj } from "@storybook/react";
import { PatternBackground } from "./PatternBackground";
import { Card, CardContent, CardHeader, CardTitle } from "../molecules/Card";

const meta = {
    title: "Foundations/PatternBackground",
    component: PatternBackground,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof PatternBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tileSize: 48
    },
    render: args => (
        <PatternBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <Card variant="glass" className="max-w-md">
                <CardHeader>
                    <CardTitle>Pattern Background</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white/70">
                        L-shaped pattern with small dots in corners repeated across the
                        background. Creates a subtle, structured grid effect perfect for
                        technical interfaces.
                    </p>
                </CardContent>
            </Card>
        </PatternBackground>
    )
};

export const SmallTiles: Story = {
    args: {
        tileSize: 32
    },
    render: args => (
        <PatternBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <Card variant="glass" className="max-w-md">
                <CardHeader>
                    <CardTitle>Small Tiles (32px)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white/70">
                        Smaller pattern tiles create a more detailed grid effect.
                    </p>
                </CardContent>
            </Card>
        </PatternBackground>
    )
};

export const LargeTiles: Story = {
    args: {
        tileSize: 48
    },
    render: args => (
        <PatternBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <Card variant="glass" className="max-w-md">
                <CardHeader>
                    <CardTitle>Large Tiles (48px)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white/70">
                        Larger pattern tiles create a more subtle grid effect.
                    </p>
                </CardContent>
            </Card>
        </PatternBackground>
    )
};

export const OverlayOnly: Story = {
    args: {
        tileSize: 48,
        overlayOnly: true
    },
    render: args => (
        <div className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center relative">
            <PatternBackground {...args} className="absolute inset-0" />
            <div className="relative z-10">
                <Card variant="glass" className="max-w-md">
                    <CardHeader>
                        <CardTitle>Overlay Only</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-white/70">
                            Pattern overlay without background color. Perfect for layering
                            on top of other backgrounds.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
};

export const WithContent: Story = {
    args: {
        tileSize: 48
    },
    render: args => (
        <PatternBackground {...args} className="min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-serif text-white mb-8">
                        Technical Dashboard
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card variant="glass">
                            <CardHeader>
                                <CardTitle>Metrics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-white/70">
                                        <span>Performance</span>
                                        <span className="text-[#52B788]">98%</span>
                                    </div>
                                    <div className="flex justify-between text-white/70">
                                        <span>Uptime</span>
                                        <span className="text-[#52B788]">99.9%</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card variant="glass">
                            <CardHeader>
                                <CardTitle>Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white/70">
                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                        <span>All systems operational</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </PatternBackground>
    )
};
