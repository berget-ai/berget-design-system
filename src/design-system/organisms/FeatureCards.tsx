import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { LucideIcon } from "lucide-react";
import { Card } from "../molecules/Card";

const featureCardVariants = cva("", {
    variants: {
        variant: {
            default: "",
            highlight: ""
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

export interface FeatureCardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof featureCardVariants> {
    /**
     * Icon to display
     */
    icon?: LucideIcon;
    /**
     * Title of the feature
     */
    title: string;
    /**
     * Description of the feature
     */
    description: string;
    /**
     * Optional badge text
     */
    badge?: string;
    /**
     * Optional link text
     */
    linkText?: string;
    /**
     * Optional link href
     */
    linkHref?: string;
    /**
     * Number of columns in the grid
     * @default 3
     */
    columns?: 1 | 2 | 3 | 4;
}

/**
 * Feature Card Component
 *
 * Feature card with icon, title, description, and optional badge/link.
 * Based on Card highlight variant.
 *
 * **Use Cases:**
 * - Feature showcases
 * - Product highlights
 * - Service descriptions
 * - Benefits sections
 *
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Zap}
 *   title="Lightning Fast"
 *   description="Optimized for speed and performance."
 *   badge="New"
 *   linkText="Learn more"
 *   linkHref="/features"
 *   columns={3}
 * />
 * ```
 */
const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
    (
        {
            className,
            variant,
            icon: Icon,
            title,
            description,
            badge,
            linkText,
            linkHref,
            columns,
            ...props
        },
        ref
    ) => {
        return (
            <Card
                ref={ref}
                variant="highlight"
                className={cn(
                    "w-full min-w-[280px] max-w-[400px] p-6 transition-all duration-300 hover:scale-105",
                    className
                )}
                {...props}
            >
                {Icon && (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary))]/20">
                        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                )}

                <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    {badge && (
                        <span className="rounded-full bg-[#2D6A4F] px-2 py-0.5 text-xs font-medium text-[#CFFF8B]">
                            {badge}
                        </span>
                    )}
                </div>

                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4">
                    {description}
                </p>

                {linkText && linkHref && (
                    <a
                        href={linkHref}
                        className="text-sm text-[hsl(var(--secondary))] hover:underline"
                    >
                        {linkText} →
                    </a>
                )}
            </Card>
        );
    }
);
FeatureCard.displayName = "FeatureCard";

export interface FeatureCardsProps {
    /**
     * Array of feature cards to display
     */
    features: FeatureCardProps[];
    /**
     * Number of columns in the grid
     * @default 3
     */
    columns?: 1 | 2 | 3 | 4;
    /**
     * Additional CSS classes
     */
    className?: string;
}

/**
 * Feature Cards Component
 *
 * Displays multiple feature cards in a responsive grid layout.
 * Perfect for feature showcases, product highlights, and benefits sections.
 *
 * @example
 * ```tsx
 * const features = [
 *   {
 *     icon: Zap,
 *     title: "Lightning Fast",
 *     description: "Optimized for speed and performance.",
 *     badge: "New"
 *   },
 *   {
 *     icon: Shield,
 *     title: "Secure by Default",
 *     description: "Enterprise-grade security built in.",
 *     linkText: "Learn more",
 *     linkHref="/security"
 *   },
 * ]
 *
 * <FeatureCards features={features} columns={3} />
 * ```
 */
export const FeatureCards = React.forwardRef<HTMLDivElement, FeatureCardsProps>(
    ({ features, columns = 3, className }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "grid gap-6 md:gap-8 p-6",
                    // Explicit classes so Tailwind compiles them
                    columns === 1 && "grid-cols-1 max-w-md mx-auto",
                    columns === 2 && "grid-cols-1 md:grid-cols-2",
                    columns === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
                    columns === 4 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
                    className
                )}
            >
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        );
    }
);
FeatureCards.displayName = "FeatureCards";

export { FeatureCard, featureCardVariants };
