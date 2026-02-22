import * as React from "react";
import { cn } from "../../utils/cn";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Number of columns for each breakpoint
     * @default { sm: 1, md: 2, lg: 3 }
     */
    columns?: {
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    /**
     * Spacing between grid items
     * @default "md"
     */
    gap?: "sm" | "md" | "lg" | "xl";
    /**
     * Maximum width for the grid container
     * @default undefined
     */
    maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
    /**
     * Children to render in the grid
     */
    children?: React.ReactNode;
}

const gapStyles = {
    sm: "gap-4",
    md: "gap-8",
    lg: "gap-12",
    xl: "gap-16",
} as const;

const maxWidthStyles = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
} as const;

/**
 * Grid Component
 *
 * Responsive grid layouts for feature cards, quotes, and other content.
 * Provides consistent spacing and column layouts across breakpoints.
 *
 * **Design Principles:**
 * - Mobile-first responsive design
 * - Consistent spacing system
 * - Flexible column configurations
 * - Semantic max-width containers
 *
 * **When to Use:**
 * - Feature card grids
 * - Quote/testimonial grids
 * - Product showcases
 * - Any responsive grid layout
 *
 * **Breakpoint Defaults:**
 * - sm (< 640px): 1 column
 * - md (640px+): 2 columns
 * - lg (1024px+): 3 columns
 * - xl (1280px+): 3 columns
 *
 * @example
 * ```tsx
 * <Grid>
 *   <div>Card 1</div>
 *   <div>Card 2</div>
 *   <div>Card 3</div>
 * </Grid>
 *
 * <Grid columns={{ sm: 1, md: 2, lg: 4 }} gap="lg">
 *   <div>Card 1</div>
 *   <div>Card 2</div>
 *   <div>Card 3</div>
 *   <div>Card 4</div>
 * </Grid>
 *
 * <Grid maxWidth="lg" gap="xl">
 *   <FeatureCard />
 *   <FeatureCard />
 *   <FeatureCard />
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    (
        {
            columns = { sm: 1, md: 2, lg: 3, xl: 3 },
            gap = "md",
            maxWidth,
            children,
            className,
            style,
            ...props
        },
        ref
    ) => {
        const getColumnClasses = () => {
            const classes = [];
            if (columns.sm) classes.push(`grid-cols-${columns.sm}`);
            if (columns.md) classes.push(`md:grid-cols-${columns.md}`);
            if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`);
            if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`);
            return classes.join(" ");
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "grid w-full",
                    getColumnClasses(),
                    gapStyles[gap],
                    maxWidth && maxWidthStyles[maxWidth],
                    "mx-auto",
                    className
                )}
                style={style}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Grid.displayName = "Grid";