import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const panelVariants = cva(
    "rounded-2xl border bg-slate border-slate/40 backdrop-blur-[12px] relative overflow-hidden",
    {
        variants: {
            padding: {
                sm: "p-4",
                md: "p-6",
                lg: "p-8"
            },
            radius: {
                default: "rounded-2xl",
                lg: "rounded-3xl",
                xl: "rounded-[2rem]"
            }
        },
        defaultVariants: {
            padding: "md",
            radius: "default"
        }
    }
);

export interface PanelProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof panelVariants> {
    /**
     * Content to render inside the panel
     */
    children: React.ReactNode;
}

/**
 * Panel Component
 *
 * Base container component for all panel-like surfaces.
 * Provides consistent styling with rounded corners, backdrop blur, and border.
 *
 * **Styling:**
 * - rounded-2xl (24px)
 * - border border-slate/40
 * - bg-slate
 * - backdrop-blur-[12px]
 *
 * **Padding:**
 * - `sm` - Small padding (16px)
 * - `md` - Medium padding (24px, default)
 * - `lg` - Large padding (32px)
 *
 * **Radius:**
 * - `default` - Standard rounded corners (24px)
 * - `lg` - Large rounded corners (48px)
 * - `xl` - Extra large rounded corners (64px)
 *
 * **Usage:**
 * This is a base atom with optional padding. Unlike Card, Panel has no gradient effects.
 *
 * @example
 * ```tsx
 * <Panel>Content</Panel>
 *
 * <Panel padding="lg" radius="xl">
 *   Content with custom padding and radius
 * </Panel>
 * ```
 */
const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
    ({ className, padding, radius, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(panelVariants({ padding, radius }), className)}
            {...props}
        >
            {children}
        </div>
    )
);
Panel.displayName = "Panel";

export { Panel, panelVariants };