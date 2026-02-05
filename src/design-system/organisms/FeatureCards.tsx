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
            ...props
        },
        ref
    ) => {
        return (
            <Card
                ref={ref}
                variant="highlight"
                className={cn(
                    "p-6 transition-all duration-300 hover:scale-105",
                    className
                )}
                {...props}
            >
                {Icon && (
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary))]/20">
                        <Icon
                            className="h-6 w-6 text-[hsl(var(--secondary))]"
                            strokeWidth={2}
                        />
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

export { FeatureCard, featureCardVariants };
