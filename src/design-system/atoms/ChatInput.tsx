import * as React from "react";
import { cn } from "../../utils/cn";

export interface ChatInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Icon to display inside the input (left side) */
    icon?: React.ReactNode;
    /** Action button to display inside the input (right side) */
    actionButton?: React.ReactNode;
    /** Secondary icon to display inside the input (right side, before action button) */
    secondaryIcon?: React.ReactNode;
}

/**
 * Chat Input Component
 *
 * Text input field for chat interfaces with auto-resize height.
 * Optimized for AI chat boxes and messaging interfaces.
 *
 * **Features:**
 * - Auto-resize height (min 44px, max 120px)
 * - Optional icon and action button inside the input
 * - Dark theme optimized
 * - Accessible with proper focus states
 *
 * **Use Cases:**
 * - AI chat box
 * - Messaging input
 * - Chat interfaces
 * - Command palette
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
 * <ChatInput
 *   placeholder="Ask anything"
 *   aria-label="Chat input"
 *   icon={<Plus />}
 *   actionButton={<Button variant="icon"><ArrowUp /></Button>}
 * />
 * ```
 */
const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(
    ({ className, icon, actionButton, secondaryIcon, ...props }, ref) => {
        const inputRef = React.useRef<HTMLTextAreaElement>(null);
        const mergedRef = ref || inputRef;

        // Auto-resize textarea
        React.useEffect(() => {
            const textarea = inputRef.current || (ref as React.RefObject<HTMLTextAreaElement>)?.current;
            if (textarea) {
                const resize = () => {
                    textarea.style.height = "auto";
                    const newHeight = Math.min(textarea.scrollHeight, 120);
                    textarea.style.height = `${Math.max(newHeight, 44)}px`;
                };
                
                textarea.addEventListener("input", resize);
                resize(); // Initial resize
                
                return () => textarea.removeEventListener("input", resize);
            }
        }, [ref]);

        return (
            <div className="relative w-full">
                {icon && (
                    <button
                        type="button"
                        className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-auto hover:bg-cloud/10 rounded-full p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={props.disabled}
                    >
                        {icon}
                    </button>
                )}
                <textarea
                    ref={mergedRef}
                    className={cn(
                        "flex w-full rounded-xl border bg-card border-cloud/10 px-4 py-3 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:border-moss/40 disabled:cursor-not-allowed disabled:opacity-50 resize-none hover:bg-cloud/[0.02] text-foreground placeholder-muted-foreground",
                        icon && "pl-11",
                        (actionButton || secondaryIcon) && "pr-20",
                        actionButton && !secondaryIcon && "pr-12",
                        secondaryIcon && actionButton && "pr-20",
                        className
                    )}
                    style={{ minHeight: "44px", maxHeight: "120px" }}
                    rows={1}
                    {...props}
                />
                {secondaryIcon && (
                    <div className="absolute right-12 top-1/2 -translate-y-1/2">
                        {secondaryIcon}
                    </div>
                )}
                {actionButton && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        {actionButton}
                    </div>
                )}
            </div>
        );
    }
);
ChatInput.displayName = "ChatInput";

export { ChatInput };