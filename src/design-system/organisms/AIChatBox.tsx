import React, { useState, useRef, useEffect } from "react";
import { ArrowUp, Plus, Mic, X } from "lucide-react";
import { Panel } from "../molecules/Panel";
import { Button } from "../atoms/Button";
import { Textarea } from "../atoms/Textarea";

export interface AIChatMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp?: Date;
}

export interface AIChatBoxProps {
    /**
     * Array of chat messages
     */
    messages?: AIChatMessage[];
    /**
     * Whether the chat is in a loading state
     */
    loading?: boolean;
    /**
     * Whether the chat is disabled
     */
    disabled?: boolean;
    /**
     * Maximum height of the chat container
     */
    maxHeight?: string;
    /**
     * Callback when a message is sent
     */
    onSendMessage?: (message: string) => void;
    /**
     * Callback when attachment is clicked
     */
    onAttachmentClick?: () => void;
    /**
     * Callback when voice is clicked
     */
    onVoiceClick?: () => void;
    /**
     * Whether to show the header
     */
    showHeader?: boolean;
    /**
     * Header title
     */
    headerTitle?: string;
    /**
     * Whether to show the voice button
     */
    showVoice?: boolean;
    /**
     * Whether to show the clear button
     */
    showClear?: boolean;
    /**
     * Callback when clear is clicked
     */
    onClearClick?: () => void;
    /**
     * Compact variant with smaller padding
     */
    compact?: boolean;
}

export const AIChatBox: React.FC<AIChatBoxProps> = ({
    messages = [],
    loading = false,
    disabled = false,
    maxHeight = "500px",
    onSendMessage,
    onAttachmentClick,
    onVoiceClick,
    showHeader = true,
    headerTitle = "AI Assistant",
    showVoice = true,
    showClear = false,
    onClearClick,
    compact = false
}) => {
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    // Auto-resize textarea
    useEffect(() => {
        const textarea = inputRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
        }
    }, [inputValue]);

    const handleSend = () => {
        if (inputValue.trim() && !disabled && !loading) {
            onSendMessage?.(inputValue.trim());
            setInputValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <Panel
            variant="glass"
            className={`flex flex-col ${compact ? "p-4" : "p-6"}`}
            style={{ maxHeight }}
        >
            {showHeader && (
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{headerTitle}</h3>
                    {showClear && onClearClick && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClearClick}
                            disabled={disabled}
                        >
                            <X className="size-4" />
                        </Button>
                    )}
                </div>
            )}

            {/* Messages container */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
                {messages.length === 0 && !loading && (
                    <div className="text-center text-gray-400 py-8">
                        Start a conversation with the AI assistant
                    </div>
                )}

                {messages.map(message => (
                    <div
                        key={message.id}
                        className={`flex ${
                            message.role === "user" ? "justify-end" : "justify-start"
                        }`}
                    >
                        <div
                            className={`max-w-[80%] rounded-lg px-4 py-3 ${
                                message.role === "user"
                                    ? "bg-white/10 text-white"
                                    : "bg-black/20 text-gray-200"
                            }`}
                        >
                            <div className="text-sm">{message.content}</div>
                            {message.timestamp && (
                                <div className="text-xs text-gray-400 mt-1">
                                    {message.timestamp.toLocaleTimeString()}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-black/20 rounded-lg px-4 py-3">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                            </div>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="flex items-end gap-2">
                <div className="flex-1">
                    <Textarea
                        ref={inputRef}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask anything"
                        disabled={disabled || loading}
                        rows={1}
                        variant="default"
                        className="w-full bg-white/5 border-white/10 text-white placeholder-gray-400 resize-none"
                        style={{ minHeight: "44px", maxHeight: "120px" }}
                        icon={
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={onAttachmentClick}
                                disabled={disabled || loading}
                                className="pointer-events-auto"
                            >
                                <Plus className="size-4" />
                            </Button>
                        }
                        secondaryIcon={
                            showVoice &&
                            onVoiceClick && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={onVoiceClick}
                                    disabled={disabled || loading}
                                    className="pointer-events-auto"
                                >
                                    <Mic className="size-4" />
                                </Button>
                            )
                        }
                        actionButton={
                            <Button
                                variant="stone"
                                size="icon"
                                onClick={handleSend}
                                disabled={disabled || loading}
                            >
                                <ArrowUp className="size-4" />
                            </Button>
                        }
                    />
                </div>
            </div>
        </Panel>
    );
};
