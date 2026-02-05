import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-opacity-20 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg hover:bg-[hsl(var(--primary))]/90 hover:shadow-xl",
                primary:
                    "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-lg hover:bg-[hsl(var(--secondary))]/90 hover:shadow-xl",
                secondary:
                    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] shadow hover:bg-[hsl(var(--accent))]/80 hover:shadow-lg",
                outline:
                    "border-2 border-[hsl(var(--border))] bg-transparent hover:bg-[hsl(var(--accent))]/20 hover:border-[hsl(var(--accent))]",
                ghost: "hover:bg-[hsl(var(--accent))]/20 hover:text-[hsl(var(--accent-foreground))]",
                destructive:
                    "!bg-[#D1392E] !text-white shadow-sm hover:!bg-[#D1392E]/80 hover:shadow",
                link: "text-[hsl(var(--primary))] underline-offset-4 hover:underline",
                highlight:
                    "relative overflow-hidden bg-[rgba(26,26,26,0.4)] border border-[rgba(26,26,26,0.4)] backdrop-blur-[5px] text-white hover:bg-[rgba(26,26,26,0.8)] hover:border-[rgba(26,26,26,0.6)] hover:shadow-lg",
                stone: "!bg-[#E5DDD5] !text-[#1a1a1a] shadow-lg hover:!bg-[#E5DDD5]/90 hover:shadow-xl"
            },
            size: {
                default: "h-8 px-8 py-2",
                sm: "h-8 px-8 text-xs",
                lg: "h-8 px-8 text-base",
                icon: "!rounded-full h-8 w-8 p-2"
            },
            width: {
                default: "w-auto",
                full: "w-full"
            },
            defaultVariants: {
                variant: "default",
                size: "default",
                width: "default"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    /**
     * Change the component to a Slot component that merges props.
     * Useful for wrapping components like Next.js Link or React Router Link.
     */
    asChild?: boolean;
}

/**
 * Button Component
 *
 * Versatile button with multiple variants and sizes.
 * Follows Scandinavian design principles with natural colors and smooth interactions.
 *
 * **Variants:**
 * - `default` - Primary Berget Stone button (beige)
 * - `primary` - Moss green button
 * - `secondary` - Sage green button
 * - `outline` - Transparent with border
 * - `ghost` - Transparent, hover effect only
 * - `destructive` - Red for dangerous actions
 * - `link` - Styled as a link
 * - `highlight` - Dark glass with radial gradient and top highlight
 *
 * **Sizes:**
 * - `sm` - Small (32px height)
 * - `default` - Medium (32px height)
 * - `lg` - Large (32px height)
 * - `icon` - Square for icon-only buttons (32px)
 *
 * **Widths:**
 * - `default` - Auto width based on content
 * - `full` - Full width of container
 *
 * **Border System:**
 * Outline variant uses semantic `--border` token that adapts to theme.
 *
 * **Composition:**
 * Supports `asChild` prop for composition with other components like links.
 *
 * @example
 * ```tsx
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Different variants
 * <Button variant="primary" size="lg">Large Primary</Button>
 * <Button variant="outline">Outlined</Button>
 *
 * // As link (with React Router)
 * <Button asChild>
 *   <Link to="/products">View Products</Link>
 * </Button>
 *
 * // Disabled state
 * <Button disabled>Disabled</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, width, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const isHighlight = variant === "highlight";

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, width, className }))}
                ref={ref}
                {...props}
            >
                {isHighlight && (
                    <>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 top-[1px] h-[calc(100%-1px)] w-full bg-[radial-gradient(100%_100%_at_49.87%_0%,rgba(229,221,213,0.04)_0%,rgba(26,26,26,0)_100%)] pointer-events-none" />

                        {/* Top gradient highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[radial-gradient(55.66%_112.5%_at_50%_0%,#E5DDD5_0%,rgba(229,221,213,0)_92.4%)] opacity-[0.3] pointer-events-none" />
                    </>
                )}
                <span
                    className={cn(
                        "inline-flex items-center",
                        isHighlight && "relative z-10"
                    )}
                >
                    {children}
                </span>
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
