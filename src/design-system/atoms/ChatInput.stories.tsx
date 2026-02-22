import type { Meta, StoryObj } from "@storybook/react";
import { ChatInput } from "./ChatInput";
import { ArrowUp, Mic, Plus } from "lucide-react";
import { Button } from "./Button";

/**
 * ChatInput component - auto-resizing textarea for chat interfaces.
 *
 * Designed with Scandinavian principles: clean, functional, and beautiful.
 * Use controls below to explore different configurations.
 */
const meta = {
    title: "Atoms/ChatInput",
    component: ChatInput,
    parameters: {
        docs: {
            description: {
                component: `
The ChatInput component is optimized for AI chat boxes and messaging interfaces.
It features auto-resize height (min 44px, max 120px) and supports icons and action buttons.

**Features:**
- Auto-resize height (44px - 120px)
- Optional left icon
- Optional right action button
- Optional secondary right icon
- Dark theme optimized
- Accessible with proper focus states

**Use the Controls panel below** to experiment with different configurations.
        `
            }
        }
    },
    tags: ["autodocs"],
    argTypes: {
        placeholder: {
            control: "text",
            description: "Placeholder text"
        },
        disabled: {
            control: "boolean",
            description: "Disabled state"
        },
        rows: {
            control: "number",
            description: "Number of rows (default: 1)"
        }
    }
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive chat input - use Controls to change configuration
 */
export const Interactive: Story = {
    args: {
        placeholder: "Ask anything",
        rows: 1
    },
    render: args => (
        <div className="p-4 w-full max-w-2xl">
            <ChatInput {...args} />
        </div>
    )
};

/**
 * With Icon - chat input with left icon button
 */
export const WithIcon: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        placeholder: "Ask anything"
    },
    render: args => (
        <div className="p-4 w-full max-w-2xl">
            <ChatInput
                {...args}
                icon={
                    <Plus className="size-4" />
                }
            />
        </div>
    )
};

/**
 * With Action Button - chat input with send button
 */
export const WithActionButton: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        placeholder: "Ask anything"
    },
    render: args => (
        <div className="p-4 w-full max-w-2xl">
            <ChatInput
                {...args}
                actionButton={
                    <Button variant="icon">
                        <ArrowUp className="size-4" strokeWidth={2} />
                    </Button>
                }
            />
        </div>
    )
};

/**
 * Full Chat Interface - complete chat input with icon and action button
 */
export const FullChatInterface: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        placeholder: "Ask anything"
    },
    render: args => (
        <div className="p-4 w-full max-w-2xl">
            <ChatInput
                {...args}
                icon={
                    <Plus className="size-4" />
                }
                secondaryIcon={
                    <button
                        type="button"
                        className="pointer-events-auto hover:bg-cloud/10 rounded-full p-2 transition-colors"
                    >
                        <Mic className="size-4" />
                    </button>
                }
                actionButton={
                    <Button variant="icon">
                        <ArrowUp className="size-4" strokeWidth={2} />
                    </Button>
                }
            />
        </div>
    )
};

/**
 * States - disabled and loading states
 */
export const States: Story = {
    parameters: {
        controls: { hide: true }
    },
    args: {
        children: undefined as any
    },
    render: () => (
        <div className="p-4 space-y-4 w-full max-w-2xl">
            <div>
                <p className="text-sm text-muted-foreground mb-2">Default</p>
                <ChatInput placeholder="Ask anything" />
            </div>
            <div>
                <p className="text-sm text-muted-foreground mb-2">Disabled</p>
                <ChatInput placeholder="Ask anything" disabled />
            </div>
            <div>
                <p className="text-sm text-muted-foreground mb-2">With Action Button</p>
                <ChatInput
                    placeholder="Ask anything"
                    actionButton={
                        <Button variant="icon" disabled>
                            <ArrowUp className="size-4" strokeWidth={2} />
                        </Button>
                    }
                />
            </div>
        </div>
    )
};