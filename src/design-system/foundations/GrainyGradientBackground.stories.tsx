import type { Meta, StoryObj } from "@storybook/react";
import { GrainyGradientBackground } from "./GrainyGradientBackground";
import { Card, CardContent, CardHeader, CardTitle } from "../molecules/Card";
import { Button } from "../atoms/Button";
import { Rocket, Zap, Target, Lightbulb, Leaf } from "lucide-react";

const meta = {
    title: "Foundations/GrainyGradientBackground",
    component: GrainyGradientBackground,
    parameters: {
        layout: "fullscreen"
    },
    tags: ["autodocs"]
} satisfies Meta<typeof GrainyGradientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <GrainyGradientBackground className="min-h-screen flex items-center justify-center">
            <div className="text-center px-4">
                <h1 className="text-5xl font-serif text-white mb-4">Grainy Gradient</h1>
                <p className="text-white/80 max-w-md mx-auto">
                    Artistic grainy gradient with multiple colored ellipses and blur
                    overlay. Creates organic, textured background perfect for creative
                    sections.
                </p>
            </div>
        </GrainyGradientBackground>
    )
};

export const WithHeroContent: Story = {
    render: () => (
        <GrainyGradientBackground className="min-h-screen flex items-center justify-center">
            <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-serif text-white mb-6">
                    Creative Excellence
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8">
                    Where innovation meets artistry. Build experiences that inspire.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button>Get Started</Button>
                    <Button variant="outline">Learn More</Button>
                </div>
            </div>
        </GrainyGradientBackground>
    )
};

export const WithCardOverlay: Story = {
    render: () => (
        <GrainyGradientBackground className="min-h-screen flex items-center justify-center">
            <Card variant="glass" className="max-w-lg mx-4">
                <CardHeader>
                    <Rocket className="w-6 h-6 mb-4 text-white" strokeWidth={1.5} />
                    <CardTitle>Creative Studio</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-white/70 mb-6">
                        Express your creativity with our powerful design tools. Create
                        stunning visuals that captivate your audience.
                    </p>
                    <ul className="space-y-2 text-white/60">
                        <li className="flex items-center gap-2">
                            <span className="text-[#52B788]">✓</span> Intuitive interface
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#52B788]">✓</span> Professional
                            templates
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-[#52B788]">✓</span> Real-time
                            collaboration
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </GrainyGradientBackground>
    )
};

export const WithFeatureCards: Story = {
    render: () => (
        <GrainyGradientBackground className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-serif text-white mb-4">Features</h1>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Discover what makes our platform unique and powerful.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Card variant="glass">
                        <CardHeader>
                            <Zap className="w-6 h-6 mb-4 text-white" strokeWidth={1.5} />
                            <CardTitle>Fast Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-white/60 text-sm">
                                Optimized for speed with instant loading times.
                            </p>
                        </CardContent>
                    </Card>
                    <Card variant="glass">
                        <CardHeader>
                            <Target
                                className="w-6 h-6 mb-4 text-white"
                                strokeWidth={1.5}
                            />
                            <CardTitle>Precision Design</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-white/60 text-sm">
                                Pixel-perfect control over every element.
                            </p>
                        </CardContent>
                    </Card>
                    <Card variant="glass">
                        <CardHeader>
                            <Lightbulb
                                className="w-6 h-6 mb-4 text-white"
                                strokeWidth={1.5}
                            />
                            <CardTitle>Smart Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-white/60 text-sm">
                                AI-powered tools that enhance your workflow.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </GrainyGradientBackground>
    )
};

export const WithAboutSection: Story = {
    render: () => (
        <GrainyGradientBackground className="min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-8">
                    <Leaf
                        className="w-6 h-6 mx-auto mb-4 text-[#52B788]"
                        strokeWidth={1.5}
                    />
                    <h1 className="text-5xl font-serif text-white mb-4">About Us</h1>
                </div>
                <Card variant="glass">
                    <CardContent className="p-8">
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                            We are a team of passionate creators, designers, and
                            developers dedicated to building exceptional digital
                            experiences. Our mission is to empower businesses with tools
                            that combine beauty and functionality.
                        </p>
                        <p className="text-white/80 text-lg leading-relaxed">
                            Founded on the principles of Scandinavian design, we believe
                            in simplicity, functionality, and elegance. Every pixel
                            matters, every interaction counts.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </GrainyGradientBackground>
    )
};
