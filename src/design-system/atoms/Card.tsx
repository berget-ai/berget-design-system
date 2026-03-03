import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const CardContext = React.createContext<"sm" | "md" | "lg">("md");

const cardVariants = cva(
    "rounded-2xl border relative overflow-hidden transition-colors duration-200",
    {
        variants: {
            variant: {
                highlight: "bg-slate/20 border-slate/40 hover:border-slate/50 backdrop-blur-v2-soft",
                glass: "bg-cloud/5 border-cloud/10 hover:border-cloud/15 backdrop-blur-v2-glass shadow-xl",
                solid: "bg-slate border-slate/40 hover:border-slate/50"
            }
        },
        defaultVariants: {
            variant: "highlight"
        }
    }
);

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
        Omit<VariantProps<typeof cardVariants>, "padding"> {
    /**
     * Content to render inside the card
     */
    children: React.ReactNode;
    /**
     * Padding size for card content
     * @default "md"
     */
    padding?: "sm" | "md" | "lg";
}

/**
 * Card Component
 *
 * Base container component for all card-like surfaces.
 * Provides consistent styling with rounded corners, backdrop blur, and border.
 *
 * **Variants:**
 * - `highlight` (default) - Semi-transparent, blends into background with sharp edge
 * - `glass` - Lighter, ethereal feel with cloud/5, perfect for overlays
 * - `solid` - Most authoritative, no transparency, perfect for fixed elements
 *
 * **Common styling:**
 * - rounded-2xl (24px)
 * - Radial gradient overlay with cloud opacity 0.04
 * - Top highlight (3px) with radial ellipse gradient, cloud opacity 0.3
 *
 * **Padding:**
 * - `sm` - Small padding (16px)
 * - `md` - Medium padding (24px, default)
 * - `lg` - Large padding (32px)
 *
 * **Usage:**
 * This is a base atom with optional padding.
 *
 * @example
 * ```tsx
 * <Card>Content</Card>
 * <Card variant="glass">Content</Card>
 * <Card variant="solid">Content</Card>
 * <Card padding="lg">Content with large padding</Card>
 * ```
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, padding, children, ...props }, ref) => {
        const paddingValue = padding || "md";
        return (
            <CardContext.Provider value={paddingValue}>
                <div
                    ref={ref}
                    className={cn(cardVariants({ variant }), className)}
                    {...props}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(229,221,213,0.04)_0%,_transparent_50%)] pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,_hsl(var(--berget-cloud)/0.3)_0%,_transparent_100%)] pointer-events-none" />
                    <div className="relative z-10">{children}</div>
                </div>
            </CardContext.Provider>
        );
    }
);
Card.displayName = "Card";

/**
 * Card Header
 *
 * Container for card title and description.
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const padding = React.useContext(CardContext);
        const paddingClass = padding === "sm" ? "p-4" : padding === "lg" ? "p-8" : "p-6";
        return (
            <div
                ref={ref}
                className={cn("flex flex-col space-y-1.5", paddingClass, className)}
                {...props}
            />
        );
    }
);
CardHeader.displayName = "CardHeader";

/**
 * Card Title
 *
 * Main heading for the card.
 */
const CardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-2xl font-medium leading-none tracking-tight", className)}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

/**
 * Card Description
 *
 * Supporting text for the card title.
 */
const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

/**
 * Card Content
 *
 * Main content area of the card.
 */
const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const padding = React.useContext(CardContext);
    const paddingClass = padding === "sm" ? "p-4" : padding === "lg" ? "p-8" : "p-6";
    return (
        <div ref={ref} className={cn(paddingClass, "pt-0", className)} {...props} />
    );
});
CardContent.displayName = "CardContent";

/**
 * Card Footer
 *
 * Bottom section for actions or metadata.
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const padding = React.useContext(CardContext);
        const paddingClass = padding === "sm" ? "p-4" : padding === "lg" ? "p-8" : "p-6";
        return (
            <div
                ref={ref}
                className={cn("flex items-center", paddingClass, "pt-0", className)}
                {...props}
            />
        );
    }
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };