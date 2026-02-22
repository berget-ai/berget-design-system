import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { ChevronDown } from "lucide-react";

const selectVariants = cva(
    "flex w-full items-center justify-between rounded-xl border bg-input px-4 py-3 text-sm transition-all duration-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-cloud/20 hover:bg-moss/10",
                primary: "border-moss/50 bg-moss/10 hover:bg-moss/20",
                subtle: "border-cloud/10 hover:bg-moss/10",
                muted: "border-cloud/5 hover:bg-moss/10"
            },
            size: {
                sm: "px-3 py-2 text-xs",
                default: "px-4 py-3 text-sm",
                lg: "px-5 py-4 text-base"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

export interface SelectOption {
    /** Value of the option */
    value: string;
    /** Label to display */
    label: string;
    /** Whether the option is disabled */
    disabled?: boolean;
}

export interface SelectProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
        VariantProps<typeof selectVariants> {
    /** Label text to display above the select */
    label?: string;
    /** Description text to display below the label */
    description?: string;
    /** Error message to display */
    error?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Options to display */
    options: SelectOption[];
    /** Icon to display on the right side */
    icon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            className,
            variant,
            size,
            label,
            description,
            error,
            placeholder,
            options,
            icon,
            id,
            disabled,
            value,
            ...props
        },
        ref
    ) => {
        const selectId = id || React.useId();
        const errorId = `${selectId}-error`;
        const descriptionId = `${selectId}-description`;

        return (
            <div className="flex flex-col gap-2">
                {label && (
                    <label
                        htmlFor={selectId}
                        className={cn(
                            "text-sm font-medium leading-none",
                            disabled ? "text-muted-foreground cursor-not-allowed" : "text-foreground",
                            error && "text-error"
                        )}
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    <select
                        ref={ref}
                        id={selectId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={cn(
                            error && errorId,
                            description && descriptionId
                        )}
                        className={cn(
                            selectVariants({ variant, size }),
                            "appearance-none pr-10",
                            error && "border-error/50 bg-error/10",
                            disabled && "cursor-not-allowed",
                            className
                        )}
                        value={value}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        {icon || (
                            <ChevronDown
                                className={cn(
                                    "text-muted-foreground",
                                    size === "sm" && "w-4 h-4",
                                    size === "default" && "w-5 h-5",
                                    size === "lg" && "w-6 h-6"
                                )}
                                strokeWidth={1.5}
                            />
                        )}
                    </div>
                </div>

                {description && (
                    <p id={descriptionId} className="text-xs text-muted-foreground">
                        {description}
                    </p>
                )}

                {error && (
                    <p id={errorId} className="text-xs text-error">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);
Select.displayName = "Select";

export { Select, selectVariants };
