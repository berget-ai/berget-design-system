import * as React from "react";
import { cn } from "../../utils/cn";

export interface GradientBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Gradient variant
     * - berget: Green gradient (Berget brand colors)
     * - subtle: Very subtle dark gradient
     * - night: Dark gradient (night to slate)
     * @default "berget"
     */
    variant?: "berget" | "subtle" | "night";
    /**
     * Children to render on top of the gradient
     */
    children?: React.ReactNode;
}

const gradientVariants = {
    berget: "from-spruce via-moss to-lichen",
    subtle: "from-night via-slate to-night",
    night: "from-slate via-night to-slate"
};

/**
 * Gradient Background Component
 *
 * Full-screen gradient background for hero sections and landing pages.
 * Creates visual impact and draws attention.
 *
 * **Use Cases:**
 * - Hero sections
 * - Landing pages
 * - Marketing pages
 * - Feature showcases
 *
 * **Best For:**
 * - First impressions
 * - Call-to-action sections
 * - Brand storytelling
 *
 * **Combines Well With:**
 * - NetworkBackground (for tech/enterprise feel)
 * - Large typography
 * - CTAs and feature highlights
 *
 * @example
 * ```tsx
 * <GradientBackground variant="berget">
 *   <Hero />
 * </GradientBackground>
 *
 * <GradientBackground variant="subtle">
 *   <PricingSection />
 * </GradientBackground>
 *
 * <GradientBackground variant="night">
 *   <AboutSection />
 * </GradientBackground>
 * ```
 */
export const GradientBackground = React.forwardRef<
    HTMLDivElement,
    GradientBackgroundProps
>(({ variant = "berget", children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "relative min-h-screen overflow-hidden bg-gradient-to-br",
                gradientVariants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});
GradientBackground.displayName = "GradientBackground";