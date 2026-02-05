import * as React from "react";
import { cn } from "../../utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Icon to display inside the input */
    icon?: React.ReactNode;
    /** Action button to display inside the input */
    actionButton?: React.ReactNode;
}

/**
 * Input Component
 *
 * Text input field for forms and user input.
 *
 * **Features:**
 * - Clean Scandinavian design
 * - Dark theme optimized
 * - Accessible with proper focus states
 * - Full HTML input attributes support
 * - Optional icon and action button inside the input
 *
 * **Use Cases:**
 * - Text input
 * - Email input
 * - Password input
 * - Number input
 * - Search fields
 * - Chat input with send button
 * - Any single-line text entry
 *
 * **Accessibility:**
 * - Always use with a label
 * - Include placeholder for hints (not as label replacement)
 * - Provide clear error messages
 * - Ensure sufficient color contrast
 * - Support keyboard navigation
 *
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="you@example.com"
 *   aria-label="Email address"
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Input
 *   placeholder="Ask anything"
 *   actionButton={<Button>Send</Button>}
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, actionButton, ...props }, ref) => {
        return (
            <div className="relative w-full">
                {icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-[#1a1a1a] px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#52B788]/40 disabled:cursor-not-allowed disabled:opacity-50",
                        icon && "pl-10",
                        actionButton && "pr-12",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {actionButton && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        {actionButton}
                    </div>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
