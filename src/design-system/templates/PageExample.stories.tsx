import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { FeatureCards } from "../organisms/FeatureCards";
import { Card } from "../molecules/Card";
import { Divider } from "../atoms/Divider";
import { PatternBackground } from "../foundations/PatternBackground";
import { ArrowRight, Cloud, Server, Cpu, Library, Heart, Leaf } from "lucide-react";

const meta = {
    title: "Templates/Page Examples",
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
Complete page examples showing how to combine block components.
        `
            }
        }
    },
    tags: ["autodocs"]
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Hero Landing Page
 *
 * Centered hero section with background image.
 */
export const HeroLanding: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/hero_bg_001.png')" }}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                <div className="max-w-3xl text-center space-y-8">
                    {/* Badge */}
                    <Badge variant="default" status="default" size="md">
                        No data leaves Sweden
                    </Badge>

                    {/* Heading */}
                    <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-[-0.02em] text-white font-normal font-['Ovo']">
                        We champion AI sovereignty to unlock innovation and growth in
                        Europe
                    </h1>

                    {/* Body */}
                    <p className="text-lg md:text-xl leading-[1.6] text-white/80 font-normal font-['DM_Sans'] max-w-2xl mx-auto">
                        EU-compliant inference service and AI infrastructure built by
                        developers for developers.
                    </p>

                    {/* Button */}
                    <Button className="inline-flex items-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
};

/**
 * Services Page
 *
 * Pattern background with radial gradient overlay, centered text, and 3 feature cards.
 */
export const Services: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <PatternBackground className="min-h-screen">
            {/* Radial gradient overlay */}
            <div
                className="absolute left-0 right-0 top-0 h-[1090px] opacity-30"
                style={{
                    background:
                        "radial-gradient(37.47% 75.74% at 50% 0.05%, rgba(229, 221, 213, 0.2) 0%, rgba(229, 221, 213, 0) 100%)",
                    zIndex: 1
                }}
            />

            <div className="relative z-10 flex flex-col items-center px-4 py-24">
                {/* Centered text block */}
                <div className="max-w-3xl text-center mb-16 space-y-6">
                    <h1 className="text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.02em] text-white font-normal font-['Ovo']">
                        Inference services and agentic infrastructure in one place
                    </h1>
                    <p className="text-lg md:text-xl leading-[1.6] text-white/80 font-normal font-['DM_Sans']">
                        Sovereign, Open and Sustainable AI – ready to scale.
                    </p>
                </div>

                {/* Feature Cards */}
                <FeatureCards
                    features={[
                        {
                            icon: Cloud,
                            title: "Serverless Inference",
                            description:
                                "Use the power of the world's leading LLMs without managing infrastructure.",
                            items: [
                                "OpenAI-compatible API",
                                "Get started in minutes",
                                "Scale as you go"
                            ]
                        },
                        {
                            icon: Server,
                            title: "Dedicated Inference",
                            description:
                                "Run and scale any model, including your own fine-tuned models on dedicated capacity.",
                            badge: "Coming Soon",
                            items: [
                                "Customizable instances",
                                "High-demand workloads",
                                "Dedicated resources"
                            ]
                        },
                        {
                            icon: Cpu,
                            title: "Berget AI Platform",
                            description:
                                "Unlock your developer team with our intuitive platform designed for development and deployment of AI applications.",
                            badge: "Coming Soon",
                            items: [
                                "Powerful dashboard",
                                "Resource management",
                                "Cost transparency"
                            ]
                        }
                    ]}
                    columns={3}
                />

                {/* Button */}
                <Button className="inline-flex items-center gap-2 mt-16">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </PatternBackground>
    )
};

/**
 * Benefits Page
 *
 * Pattern background with radial gradient overlay, centered text, and 3 feature cards.
 */
export const Benefits: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <PatternBackground className="min-h-screen">
            {/* Radial gradient overlay */}
            <div
                className="absolute left-0 right-0 top-0 h-[1090px] opacity-30"
                style={{
                    background:
                        "radial-gradient(37.47% 75.74% at 50% 0.05%, rgba(229, 221, 213, 0.2) 0%, rgba(229, 221, 213, 0) 100%)",
                    zIndex: 1
                }}
            />

            <div className="relative z-10 flex flex-col items-center px-4 py-24">
                {/* Centered text block */}
                <div className="max-w-3xl text-center mb-16 space-y-6">
                    <h1 className="text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.02em] text-white font-normal font-['Ovo']">
                        Benefits of Berget AI
                    </h1>
                    <p className="text-lg md:text-xl leading-[1.6] text-white/80 font-normal font-['DM_Sans']">
                        We serve (public and private sector) organisations that seek to
                        harness the power of AI with full control and with a minimum
                        impact on the planet.
                    </p>
                </div>

                {/* Feature Cards */}
                <FeatureCards
                    features={[
                        {
                            icon: Library,
                            title: "Sovereign AI",
                            description:
                                "Run models while all data stays within EU borders, our infrastructure is all in Europe, with full compliance with EU regulations.",
                            items: [
                                "Enables AI and Data Sovereignty",
                                "Aligned with EU regulations",
                                "Full control of your data"
                            ]
                        },
                        {
                            icon: Heart,
                            title: "(truly) Open AI",
                            description:
                                "We are champions of open innovation and we host and serve open models. Our services are fully built on open source.",
                            items: ["Open Models", "Open Source", "Open Innovation"]
                        },
                        {
                            icon: Leaf,
                            iconColor: "text-[#52B788]",
                            title: "Sustainable AI",
                            description:
                                "Our infrastructure is built with sustainability in focus, from fossil-free electricity to heat recovery and circular hardware.",
                            items: [
                                "100% Fossil-free Energy",
                                "CO₂ Tracking",
                                "Circular Hardware"
                            ]
                        }
                    ]}
                    columns={3}
                />

                {/* Button */}
                <Button className="inline-flex items-center gap-2 mt-16">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </PatternBackground>
    )
};

/**
 * Why Berget Page
 *
 * Background image with dark overlay, centered text, and 3 quote cards.
 */
export const WhyBerget: Story = {
    parameters: {
        controls: { hide: true }
    },
    render: () => (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/Why_Berget_001.png')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 flex flex-col items-center px-4 py-24">
                {/* Centered text block */}
                <div className="max-w-3xl text-center mb-16 space-y-6">
                    <h1 className="text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.02em] text-white font-normal font-['Ovo']">
                        Why do we need Berget?
                    </h1>
                    <p className="text-lg md:text-xl leading-[1.6] text-white/80 font-normal font-['DM_Sans']">
                        We asked some of Sweden's leading experts in law and data security
                        about why a Swedish cloud service for AI and sensitive data
                        handling is needed.
                    </p>
                </div>

                {/* Quote Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
                    {/* Card 1 */}
                    <Card variant="glass" className="flex flex-col p-8 h-full">
                        <p className="flex-grow text-base leading-[1.6] text-white/90 font-normal font-['DM_Sans']">
                            "With a Swedish cloud provider, administrative work and
                            regulatory risk decrease as there is no third-country
                            transfer, eliminating the need to stay updated with
                            third-country transfer regulations, adequacy decisions, or
                            conduct impact assessments. Furthermore, you get a provider
                            that must comply with the same legislation that applies to
                            you, meaning much of the documentation will be prepared by the
                            provider in a way that's already adapted to Swedish
                            conditions."
                        </p>
                        <div className="mt-auto">
                            <Divider className="mb-4" />
                            <div>
                                <h3 className="text-lg font-medium text-white font-['Ovo'] mb-1">
                                    Jim Runsten
                                </h3>
                                <p className="text-sm text-white/70 font-normal font-['DM_Sans']">
                                    CEO Synch Law Firm
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 2 */}
                    <Card variant="glass" className="flex flex-col p-8 h-full">
                        <p className="flex-grow text-base leading-[1.6] text-white/90 font-normal font-['DM_Sans']">
                            "Berget's approach with reused hardware is smart from both a
                            sustainability and security perspective. By building the
                            system with the assumption that things can break,
                            vulnerability is reduced. Many of today's cyber attacks
                            exploit the fact that many servers remain untouched for too
                            long without important security updates."
                        </p>
                        <div className="mt-auto">
                            <Divider className="mb-4" />
                            <div>
                                <h3 className="text-lg font-medium text-white font-['Ovo'] mb-1">
                                    Ann-Marie Eklund Löwinder
                                </h3>
                                <p className="text-sm text-white/70 font-normal font-['DM_Sans']">
                                    one of Sweden's leading IT security experts
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Card 3 */}
                    <Card variant="glass" className="flex flex-col p-8 h-full">
                        <p className="flex-grow text-base leading-[1.6] text-white/90 font-normal font-['DM_Sans']">
                            "Data is today one of the most valuable assets that exists.
                            It's a reasonable business decision to train AI models in
                            services that don't use your data to train someone else's
                            models."
                        </p>
                        <div className="mt-auto">
                            <Divider className="mb-4" />
                            <div>
                                <h3 className="text-lg font-medium text-white font-['Ovo'] mb-1">
                                    André Catry
                                </h3>
                                <p className="text-sm text-white/70 font-normal font-['DM_Sans']">
                                    Senior Advisor in IT/Information Security and Cyber
                                    Risk, Kahn Pedersen Law Firm
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
};
