import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

export interface IconProps extends Omit<ComponentProps<LucideIcon>, "size"> {
    icon: LucideIcon;
    size?: "sm" | "md";
    variant?: "default" | "leaf";
}

export const Icon = ({
    icon: Icon,
    size = "md",
    variant = "default",
    className = "",
    ...props
}: IconProps) => {
    const sizeClasses = size === "sm" ? "w-5 h-5" : "w-6 h-6";
    const strokeWidth = size === "sm" ? 1 : 1.5;
    const variantClasses = variant === "leaf" ? "text-[#52B788]" : "text-white";

    return (
        <Icon
            className={`${sizeClasses} ${variantClasses} ${className}`}
            strokeWidth={strokeWidth}
            {...props}
        />
    );
};
