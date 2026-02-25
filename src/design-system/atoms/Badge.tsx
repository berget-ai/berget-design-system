import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { LucideIcon } from "lucide-react";

const badgeVariants = cva(
    "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ring focus:ring-offset-2 focus:ring-opacity-20",
    {
        variants: {
            variant: {
                default: "px-8",
                tag: "px-4",
                semantic: "px-3"
            },
            status: {
                default: "bg-spruce text-warning",
                active: "bg-spruce text-peak/80",
                tagDefault: "bg-cloud text-slate/80",
                tagActive: "bg-slate text-cloud",
                tagGhost: "bg-cloud/30 text-slate/60",
                info: "bg-info/20 text-info",
                success: "bg-success/20 text-success",
                warning: "bg-warning/20 text-warning",
                error: "bg-error/20 text-error"
            },
            size: {
                sm: "text-xs h-5",
                md: "text-sm h-6"
            }
        },
        defaultVariants: {
            variant: "default",
            status: "default",
            size: "md"
        }
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
    /**
     * Optional icon component from lucide-react
     */
    icon?: LucideIcon;
    /**
     * Gap between icon and text
     * @default 2
     */
    iconGap?: number;
}

/**
 * Badge Component
 *
 * Small status indicators and labels.
 *
 * **Variants:**
 * - `default` - Default badges with 2 status options (default, active)
 * - `tag` - Tag badges with 2 status options (default, active)
 * - `semantic` - Semantic badges with 4 status options (success, info, warning, error)
 *
 * **Status (Color):**
 * - **Default variant:** `default`, `active`
 * - **Tag variant:** `default`, `active`
 * - **Semantic variant:** `success`, `info`, `warning`, `error`
 *
 * **Sizes:**
 * - `sm` - Text text-xs (0.75rem), height h-5 (1.25rem)
 * - `md` - Text text-sm (0.875rem), height h-6 (1.5rem)
 *
 * **Icon Support:**
 * Badges can optionally include an icon from lucide-react.
 * Icons scale proportionally with text: size-3 for sm, size-4 for md.
 *
 * **Use Cases:**
 * - Status indicators (Active, Pending, Failed)
 * - Tags and labels
 * - Feature flags (New, Beta, Premium)
 * - Notification counts
 * - Category labels
 * - Privacy indicators (e.g., "No data leaves Sweden")
 *
 * @example
 * ```tsx
 * // Default variant
 * <Badge variant="default" status="default">GDPR compliant</Badge>
 * <Badge variant="default" status="active" icon={Check}>Verified</Badge>
 *
 * // Tag variant
 * <Badge variant="tag" status="default">Tag</Badge>
 * <Badge variant="tag" status="active" icon={Check}>Active</Badge>
 *
 * // Semantic variant
 * <Badge variant="semantic" status="success">Success</Badge>
 * <Badge variant="semantic" status="info">Info</Badge>
 * <Badge variant="semantic" status="warning">Warning</Badge>
 * <Badge variant="semantic" status="error">Error</Badge>
 *
 * // Size variants
 * <Badge size="sm">Small</Badge>
 * <Badge size="md">Medium</Badge>
 * ```
 */
function Badge({
    className,
    variant,
    status,
    size,
    icon: Icon,
    iconGap = 2,
    children,
    ...props
}: BadgeProps) {
    const iconSize = size === "sm" ? "size-3" : "size-4";

    return (
        <div
            className={cn(badgeVariants({ variant, status, size }), className)}
            {...props}
        >
            {Icon && (
                <Icon
                    className={iconSize}
                    strokeWidth={1.5}
                    style={{ marginRight: children ? `${iconGap * 0.25}rem` : "0" }}
                />
            )}
            {children}
        </div>
    );
}

export { Badge, badgeVariants };
