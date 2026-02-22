import * as React from "react";
import { cn } from "../../utils/cn";

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * List items
     */
    children: React.ReactNode;
}

/**
 * List Component
 *
 * Container for list items with console-style spacing and borders.
 *
 * @example
 * ```tsx
 * <List>
 *   <ListItem>Item 1</ListItem>
 *   <ListItem>Item 2</ListItem>
 * </List>
 * ```
 */
export const List = React.forwardRef<HTMLDivElement, ListProps>(
    ({ className, children, ...props }, ref) => (
        <div ref={ref} className={cn("flex flex-col", className)} {...props}>
            {children}
        </div>
    )
);
List.displayName = "List";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Icon to display on the left
     */
    icon?: React.ReactNode;
    /**
     * Main content
     */
    children: React.ReactNode;
    /**
     * Whether the item is clickable/interactive
     */
    interactive?: boolean;
}

/**
 * ListItem Component
 *
 * Individual list item with icon, hover state, and console-style borders.
 *
 * @example
 * ```tsx
 * <ListItem icon={<Key />}>
 *   <div>
 *     <h3>API Key: Production</h3>
 *     <p>Plan: api-usage-eur</p>
 *   </div>
 * </ListItem>
 * ```
 */
export const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
    ({ className, icon, children, interactive = true, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "flex items-center gap-4 px-6 py-5 border-t border-[hsl(var(--border))]",
                "first:border-t-0",
                interactive &&
                    "transition-all duration-200 hover:bg-cloud/[0.02] cursor-pointer",
                className
            )}
            {...props}
        >
            {icon && (
                <div className="flex-shrink-0 flex items-center justify-center">
                    {icon}
                </div>
            )}
            <div className="flex-1 min-w-0">{children}</div>
        </div>
    )
);
ListItem.displayName = "ListItem";

export interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Header content (usually column labels)
     */
    children: React.ReactNode;
}

/**
 * ListHeader Component
 *
 * Header row for list with column labels.
 *
 * @example
 * ```tsx
 * <ListHeader>
 *   <div className="flex gap-4">
 *     <span className="flex-1">Name</span>
 *     <span className="w-32">Created</span>
 *     <span className="w-32">Last Used</span>
 *   </div>
 * </ListHeader>
 * ```
 */
export const ListHeader = React.forwardRef<HTMLDivElement, ListHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "px-6 py-4 text-sm text-muted-foreground border-b border-[hsl(var(--border))]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);
ListHeader.displayName = "ListHeader";

export interface FeatureListProps extends React.HTMLAttributes<HTMLUListElement> {
    /**
     * List items to display
     */
    items: string[];
    /**
     * Checkmark color
     * @default "success"
     */
    checkColor?: "success" | "primary";
}

const checkColorStyles = {
    success: "bg-success text-success-foreground",
    primary: "bg-primary text-primary-foreground",
} as const;

/**
 * FeatureList Component
 *
 * Feature lists with checkmarks or bullet points for showcasing features and benefits.
 * Designed for use in feature cards, benefits sections, and product highlights.
 *
 * **Design Principles:**
 * - Clear visual hierarchy
 * - Consistent spacing
 * - Semantic list structure
 * - Accessible color contrast
 *
 * **When to Use:**
 * - Feature descriptions in cards
 * - Benefits sections
 * - Product highlights
 * - Comparison lists
 *
 * @example
 * ```tsx
 * <FeatureList items={["Feature 1", "Feature 2", "Feature 3"]} />
 *
 * <FeatureList
 *   items={["Benefit 1", "Benefit 2"]}
 *   variant="checkmark"
 *   checkColor="success"
 * />
 *
 * <FeatureList
 *   items={["Point 1", "Point 2", "Point 3"]}
 *   variant="bullet"
 *   bulletColor="primary"
 * />
 * ```
 */
export const FeatureList = React.forwardRef<HTMLUListElement, FeatureListProps>(
    (
        {
            items,
            checkColor = "success",
            className,
            ...props
        },
        ref
    ) => {
        return (
            <ul ref={ref} className={cn("space-y-3", className)} {...props}>
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <div
                            className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                checkColorStyles[checkColor]
                            )}
                        >
                            <svg
                                className="w-3.5 h-3.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2.5}
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                ))}
            </ul>
        );
    }
);

FeatureList.displayName = "FeatureList";
