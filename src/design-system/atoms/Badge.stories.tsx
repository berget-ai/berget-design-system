import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import {
    Shield,
    Lock,
    Check,
    AlertCircle,
    Info,
    AlertTriangle,
    XCircle,
    Wifi,
    WifiOff
} from "lucide-react";

/**
 * Badge component for status indicators, labels, and metadata.
 *
 * Use controls below to explore different variants.
 */
const meta = {
    title: "Atoms/Badge",
    component: Badge,
    parameters: {
        docs: {
            description: {
                component: `
Badge component for displaying small status indicators and labels.

**Design Principles:**
- Small and unobtrusive
- Clear semantic variants
- Consistent with Berget color palette
- Accessible color contrast

**When to Use:**
- Status indicators (Active, Pending, Failed)
- Feature flags (New, Beta, Premium)
- Tags and categories
- Notification counts
- Labels and metadata

**Use the Controls panel below** to experiment with different variants.
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "tag", "semantic"],
            description: "Variant type"
        },
        status: {
            control: "select",
            options: [
                "default",
                "active",
                "tagDefault",
                "tagActive",
                "tagGhost",
                "info",
                "success",
                "warning",
                "error"
            ],
            description: "Status (depends on variant)"
        },
        size: {
            control: "select",
            options: ["sm", "md"],
            description: "Size variant"
        },
        icon: {
            control: "select",
            options: [
                "none",
                "Shield",
                "Lock",
                "Check",
                "AlertCircle",
                "Info",
                "AlertTriangle",
                "XCircle",
                "Wifi",
                "WifiOff"
            ],
            mapping: {
                none: undefined,
                Shield,
                Lock,
                Check,
                AlertCircle,
                Info,
                AlertTriangle,
                XCircle,
                Wifi,
                WifiOff
            },
            description: "Optional icon"
        }
    }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive badge - use Controls to change variant
 */
export const Interactive: Story = {
    args: {
        children: "Badge",
        variant: "default",
        status: "default",
        size: "md"
    },
    render: args => (
        <div className="p-4">
            <Badge {...args} />
        </div>
    )
};

/**
 * All variants showcase - shows all badge combinations
 * Note: This is a static showcase. Use Interactive story to test individual variants with controls.
 */
export const AllVariants: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-8">
            {/* Default Variant */}
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Default Variant (2 status options)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="default" status="default">
                        Default
                    </Badge>
                    <Badge variant="default" status="default" icon={Check}>
                        GDPR compliant
                    </Badge>
                    <Badge variant="default" status="active">
                        Active
                    </Badge>
                    <Badge variant="default" status="active" icon={Check}>
                        Verified
                    </Badge>
                </div>
            </div>

            {/* Tag Variant */}
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Tag Variant (3 status options)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="tag" status="tagDefault">
                        Tag Default
                    </Badge>
                    <Badge variant="tag" status="tagDefault" icon={Check}>
                        Tag Default
                    </Badge>
                    <Badge variant="tag" status="tagActive">
                        Tag Active
                    </Badge>
                    <Badge variant="tag" status="tagActive" icon={Check}>
                        Tag Active
                    </Badge>
                    <Badge variant="tag" status="tagGhost">
                        Tag Ghost
                    </Badge>
                    <Badge variant="tag" status="tagGhost" icon={Check}>
                        Tag Ghost
                    </Badge>
                </div>
            </div>

            {/* Semantic Variant */}
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Semantic Variant (4 status options)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="semantic" status="info">
                        Info
                    </Badge>
                    <Badge variant="semantic" status="success">
                        Success
                    </Badge>
                    <Badge variant="semantic" status="warning">
                        Warning
                    </Badge>
                    <Badge variant="semantic" status="error">
                        Error
                    </Badge>
                </div>
            </div>

            {/* Size Variants */}
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Size Variants
                </h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs text-muted-foreground mb-2">Size: sm</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge size="sm" variant="default" status="default">
                                Default
                            </Badge>
                            <Badge size="sm" variant="tag" status="tagDefault">
                                Tag
                            </Badge>
                            <Badge size="sm" variant="semantic" status="info">
                                Info
                            </Badge>
                            <Badge size="sm" variant="semantic" status="success">
                                Success
                            </Badge>
                            <Badge size="sm" variant="semantic" status="warning">
                                Warning
                            </Badge>
                            <Badge size="sm" variant="semantic" status="error">
                                Error
                            </Badge>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs text-muted-foreground mb-2">Size: md</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge size="md" variant="default" status="default">
                                Default
                            </Badge>
                            <Badge size="md" variant="tag" status="tagDefault">
                                Tag
                            </Badge>
                            <Badge size="md" variant="semantic" status="info">
                                Info
                            </Badge>
                            <Badge size="md" variant="semantic" status="success">
                                Success
                            </Badge>
                            <Badge size="md" variant="semantic" status="warning">
                                Warning
                            </Badge>
                            <Badge size="md" variant="semantic" status="error">
                                Error
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>

            {/* With Icons */}
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    With Icons
                </h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs text-muted-foreground mb-2">Size: sm</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                size="sm"
                                variant="default"
                                status="default"
                                icon={Check}
                            >
                                GDPR compliant
                            </Badge>
                            <Badge
                                size="sm"
                                variant="tag"
                                status="tagActive"
                                icon={Check}
                            >
                                Active
                            </Badge>
                            <Badge size="sm" variant="semantic" status="info" icon={Info}>
                                Info
                            </Badge>
                            <Badge
                                size="sm"
                                variant="semantic"
                                status="success"
                                icon={Check}
                            >
                                Verified
                            </Badge>
                            <Badge
                                size="sm"
                                variant="semantic"
                                status="warning"
                                icon={AlertCircle}
                            >
                                Attention
                            </Badge>
                            <Badge
                                size="sm"
                                variant="semantic"
                                status="error"
                                icon={XCircle}
                            >
                                Error
                            </Badge>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs text-muted-foreground mb-2">Size: md</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                size="md"
                                variant="default"
                                status="default"
                                icon={Check}
                            >
                                GDPR compliant
                            </Badge>
                            <Badge
                                size="md"
                                variant="tag"
                                status="tagActive"
                                icon={Check}
                            >
                                Active
                            </Badge>
                            <Badge size="md" variant="semantic" status="info" icon={Info}>
                                Info
                            </Badge>
                            <Badge
                                size="md"
                                variant="semantic"
                                status="success"
                                icon={Check}
                            >
                                Verified
                            </Badge>
                            <Badge
                                size="md"
                                variant="semantic"
                                status="warning"
                                icon={AlertCircle}
                            >
                                Attention
                            </Badge>
                            <Badge
                                size="md"
                                variant="semantic"
                                status="error"
                                icon={XCircle}
                            >
                                Error
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>

            {/* Icon-Only Badges */}
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-4">
                    Icon-Only Badges (Semantic)
                </h3>
                <div className="space-y-4">
                    <div>
                        <h4 className="text-xs text-muted-foreground mb-2">Size: sm</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                size="sm"
                                variant="semantic"
                                status="info"
                                icon={Wifi}
                            />
                            <Badge
                                size="sm"
                                variant="semantic"
                                status="success"
                                icon={Wifi}
                            />
                            <Badge
                                size="sm"
                                variant="semantic"
                                status="warning"
                                icon={WifiOff}
                            />
                            <Badge
                                size="sm"
                                variant="semantic"
                                status="error"
                                icon={WifiOff}
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs text-muted-foreground mb-2">Size: md</h4>
                        <div className="flex flex-wrap gap-2">
                            <Badge
                                size="md"
                                variant="semantic"
                                status="info"
                                icon={Wifi}
                            />
                            <Badge
                                size="md"
                                variant="semantic"
                                status="success"
                                icon={Wifi}
                            />
                            <Badge
                                size="md"
                                variant="semantic"
                                status="warning"
                                icon={WifiOff}
                            />
                            <Badge
                                size="md"
                                variant="semantic"
                                status="error"
                                icon={WifiOff}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

/**
 * Common use cases - shows badge usage patterns
 * Note: This is a static showcase. Use Interactive story to test individual variants with controls.
 */
export const Examples: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="flex flex-col gap-6">
            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Status Indicators (Semantic)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="semantic" status="info">
                        Processing
                    </Badge>
                    <Badge variant="semantic" status="success">
                        Active
                    </Badge>
                    <Badge variant="semantic" status="warning">
                        Pending
                    </Badge>
                    <Badge variant="semantic" status="error">
                        Failed
                    </Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Feature Flags (Tag)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="tag" status="tagActive">
                        New
                    </Badge>
                    <Badge variant="tag" status="tagDefault">
                        Beta
                    </Badge>
                    <Badge variant="tag" status="tagActive">
                        Premium
                    </Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Tags & Categories (Tag)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="tag" status="tagDefault">
                        TypeScript
                    </Badge>
                    <Badge variant="tag" status="tagDefault">
                        React
                    </Badge>
                    <Badge variant="tag" status="tagDefault">
                        Design Systems
                    </Badge>
                    <Badge variant="tag" status="tagDefault">
                        Berget
                    </Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Ghost Tags (Tag)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="tag" status="tagGhost">
                        Disabled
                    </Badge>
                    <Badge variant="tag" status="tagGhost" icon={Check}>
                        Inactive
                    </Badge>
                    <Badge variant="tag" status="tagGhost">
                        Archived
                    </Badge>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Icon-Only Badges (Semantic)
                </h3>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="semantic" status="info" icon={Wifi} />
                    <Badge variant="semantic" status="success" icon={Wifi} />
                    <Badge variant="semantic" status="warning" icon={WifiOff} />
                    <Badge variant="semantic" status="error" icon={WifiOff} />
                </div>
            </div>

            <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                    Privacy & Security Badges (Default)
                </h3>
                <div className="flex flex-wrap gap-3">
                    <Badge variant="default" status="default" icon={Shield}>
                        No data leaves Sweden
                    </Badge>
                    <Badge variant="default" status="active" icon={Lock}>
                        End-to-end encrypted
                    </Badge>
                    <Badge variant="default" status="default" icon={Check}>
                        GDPR compliant
                    </Badge>
                </div>
            </div>
        </div>
    )
};
