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
                    "bg-cloud text-slate shadow-lg hover:bg-cloud/90 hover:shadow-xl",
                primary:
                    "bg-moss text-peak shadow-lg hover:bg-moss/90 hover:shadow-xl",
                secondary:
                    "bg-lichen text-night shadow hover:bg-lichen/80 hover:shadow-lg",
                outline:
                    "border-2 border-cloud/20 bg-transparent hover:bg-moss/20 hover:border-moss/40",
                ghost: "hover:bg-moss/20 hover:text-foreground",
                destructive:
                    "bg-error text-peak shadow-sm hover:bg-error/80 hover:shadow",
                link: "text-moss underline-offset-4 hover:underline",
                highlight:
                    "relative overflow-hidden bg-night border border-cloud/20 backdrop-blur-[5px] text-foreground hover:bg-night/80 hover:border-cloud/30 hover:shadow-lg",
                icon: "!flex !flex-row !justify-center !items-center !p-0 !w-[32px] !h-[32px] !bg-cloud !text-slate shadow-[0px_1px_3px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] !rounded-full"
            },
            size: {
                sm: "h-6 px-4 py-1.5 text-xs",
                default: "h-8 px-8 py-2",
                lg: "h-10 px-10 py-2.5 text-base",
                icon: "!w-[32px] !h-[32px] !p-0"
            },
            width: {
                default: "w-auto",
                full: "w-full"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            width: "default"
        }
    }
);

export interface ButtonProps
    extends
        React.ButtonHTMLAttributes<HTMLButtonElement>,
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
 * Versatile button with multiple variants.
 * Follows Scandinavian design principles with natural colors and smooth interactions.
 *
 * **Variants:**
 * - `default` - Cloud colored button (cream white with slate text)
 * - `primary` - Moss green button with white text
 * - `secondary` - Lichen green button with dark text
 * - `outline` - Transparent with border, moss hover
 * - `ghost` - Transparent, moss hover effect only
 * - `destructive` - Error red for dangerous actions
 * - `link` - Styled as a link (moss color)
 * - `highlight` - Dark glass with radial gradient and top highlight
 * - `icon` - Fixed size icon button (32px × 32px, no padding)
 *
 * **Widths:**
 * - `default` - Auto width based on content
 * - `full` - Full width of container
 *
 * **Border System:**
 * Outline variant uses cloud border with moss hover.
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
 * <Button variant="primary">Primary</Button>
 * <Button variant="outline">Outlined</Button>
 *
 * // Icon-only button (32px × 32px, no padding)
 * <Button variant="icon">
 *   <X className="w-4 h-4" />
 * </Button>
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
                        <div className="absolute inset-0 top-[1px] h-[calc(100%-1px)] w-full bg-[radial-gradient(100%_100%_at_49.87%_0%,hsl(var(--cloud)/0.04)_0%,transparent_100%)] pointer-events-none" />

                        {/* Top gradient highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[radial-gradient(55.66%_112.5%_at_50%_0%,hsl(var(--cloud))_0%,transparent_92.4%)] opacity-[0.3] pointer-events-none" />
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
