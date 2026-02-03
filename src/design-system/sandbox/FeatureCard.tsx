import React from "react";
import { Check } from "lucide-react";
import { Panel } from "../molecules/Panel";

export interface FeatureCardProps {
    /**
     * Icon to display
     */
    icon?: React.ReactNode;
    /**
     * Title of the feature
     */
    title: string;
    /**
     * Description of the feature
     */
    description?: string;
    /**
     * List of features to display
     */
    features?: string[];
    /**
     * Variant of the card
     */
    variant?: "highlight" | "glass" | "solid" | "dark";
    /**
     * Whether to show checkmarks for features
     */
    showCheckmarks?: boolean;
    /**
     * Additional CSS classes
     */
    className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    icon,
    title,
    description,
    features = [],
    variant = "highlight",
    showCheckmarks = true,
    className = ""
}) => {
    return (
        <Panel variant={variant} className={`flex flex-col ${className}`}>
            {icon && <div className="mb-4 text-white/90">{icon}</div>}
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            {description && <p className="text-gray-300 mb-4">{description}</p>}
            {features.length > 0 && (
                <ul className="space-y-2 mt-auto">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300">
                            {showCheckmarks && (
                                <Check className="size-4 text-white/70 shrink-0 mt-0.5" />
                            )}
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </Panel>
    );
};
