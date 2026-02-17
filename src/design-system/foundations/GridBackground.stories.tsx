import type { Meta, StoryObj } from "@storybook/react";
import { GridBackground } from "./GridBackground";

const meta = {
    title: "Foundations/GridBackground",
    component: GridBackground,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof GridBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        gridSize: 24,
        opacity: 0.02
    },
    render: args => (
        <GridBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md">
                <h2 className="text-2xl font-serif text-white mb-4">Grid Background</h2>
                <p className="text-white/70">
                    Subtle grid pattern background used across the Berget Design System.
                    Creates a sense of structure and precision without being distracting.
                </p>
            </div>
        </GridBackground>
    )
};

export const SmallGrid: Story = {
    args: {
        gridSize: 16,
        opacity: 0.02
    },
    render: args => (
        <GridBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md">
                <h2 className="text-2xl font-serif text-white mb-4">Small Grid (16px)</h2>
                <p className="text-white/70">
                    Denser grid pattern for more structured layouts.
                </p>
            </div>
        </GridBackground>
    )
};

export const MediumGrid: Story = {
    args: {
        gridSize: 32,
        opacity: 0.02
    },
    render: args => (
        <GridBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md">
                <h2 className="text-2xl font-serif text-white mb-4">
                    Medium Grid (32px)
                </h2>
                <p className="text-white/70">Balanced grid size for most applications.</p>
            </div>
        </GridBackground>
    )
};

export const LargeGrid: Story = {
    args: {
        gridSize: 48,
        opacity: 0.02
    },
    render: args => (
        <GridBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md">
                <h2 className="text-2xl font-serif text-white mb-4">Large Grid (48px)</h2>
                <p className="text-white/70">
                    Larger grid cells for a more subtle effect.
                </p>
            </div>
        </GridBackground>
    )
};

export const LowOpacity: Story = {
    args: {
        gridSize: 24,
        opacity: 0.01
    },
    render: args => (
        <GridBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md">
                <h2 className="text-2xl font-serif text-white mb-4">
                    Low Opacity (0.01)
                </h2>
                <p className="text-white/70">Very subtle grid, barely visible.</p>
            </div>
        </GridBackground>
    )
};

export const HighOpacity: Story = {
    args: {
        gridSize: 24,
        opacity: 0.05
    },
    render: args => (
        <GridBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md">
                <h2 className="text-2xl font-serif text-white mb-4">
                    High Opacity (0.05)
                </h2>
                <p className="text-white/70">
                    More visible grid for technical interfaces.
                </p>
            </div>
        </GridBackground>
    )
};

export const CustomColor: Story = {
    args: {
        gridSize: 24,
        opacity: 0.03,
        color: "74, 199, 157" // Primary green
    },
    render: args => (
        <GridBackground
            {...args}
            className="min-h-screen flex items-center justify-center"
        >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 max-w-md">
                <h2 className="text-2xl font-serif text-white mb-4">Custom Color</h2>
                <p className="text-white/70">Grid using Berget primary green color.</p>
            </div>
        </GridBackground>
    )
};

export const WithDashboard: Story = {
    args: {
        gridSize: 24,
        opacity: 0.02
    },
    render: args => (
        <GridBackground {...args} className="min-h-screen">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-serif text-white mb-8">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-serif text-white mb-4">Overview</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-white/60">Users</span>
                                <span className="text-white">1,234</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-white/60">Sessions</span>
                                <span className="text-white">5,678</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-white/60">Conversions</span>
                                <span className="text-primary">12.3%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-serif text-white mb-4">
                            Performance
                        </h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-white/60">Response Time</span>
                                <span className="text-white">45ms</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-white/60">Uptime</span>
                                <span className="text-primary">99.9%</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-white/60">Errors</span>
                                <span className="text-white">0.01%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-serif text-white mb-4">Activity</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span className="text-white/60">System operational</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <span className="text-white/60">Deployed v2.4.1</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span className="text-white/60">
                                    Maintenance scheduled
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GridBackground>
    )
};
