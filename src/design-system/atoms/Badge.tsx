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
                default: "bg-[#2D6A4F] text-[#CFFF8B]",
                active: "bg-[#2D6A4F] text-[rgba(255,255,255,0.8)]",
                tagDefault: "bg-[#E5DDD5] text-[rgba(26,26,26,0.8)]",
                tagActive: "bg-[#1a1a1a] text-[#E5DDD5]",
                tagGhost: "bg-[#E5DDD5]/30 text-[rgba(26,26,26,0.6)]",
                info: "bg-[#3975D6]/20 text-[#3975D6] border border-[#3975D6]/40",
                success: "bg-[#52B788]/20 text-[#52B788] border border-[#52B788]/40",
                warning: "bg-[#CFFF8B]/20 text-[#CFFF8B] border border-[#CFFF8B]/40",
                error: "bg-[#D1392E]/20 text-[#D1392E] border border-[#D1392E]/40"
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
