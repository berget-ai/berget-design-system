import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../design-system/atoms/Card";
import { BergetSymbol } from "../../../design-system/atoms/Berget Symbol";
import { EmailButton, EmailDivider, EmailLink } from "./EmailTemplate";

function PasswordResetEmail() {
    const link = "https://auth.berget.ai/reset-password?token=abc123";
    const realmName = "Berget AI";
    const expiration = "5 minutes";

    return (
        <div
            style={{
                backgroundColor: "#0a0a0a",
                minHeight: "100vh",
                padding: "40px 20px",
                fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
            }}
        >
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
                <Card variant="highlight" className="p-10">
                    {/* Berget Symbol inside Card */}
                    <div className="text-center mb-8">
                        <BergetSymbol size={48} variant="light" />
                    </div>

                    <h1
                        style={{
                            margin: "0 0 24px 0",
                            fontSize: 24,
                            fontWeight: 500,
                            color: "#ffffff",
                            textAlign: "center"
                        }}
                    >
                        Reset Your Password
                    </h1>

                    <p
                        style={{
                            margin: "0 0 24px 0",
                            color: "rgba(255, 255, 255, 0.7)",
                            textAlign: "center"
                        }}
                    >
                        Someone requested to reset the password for your{" "}
                        <strong style={{ color: "#ffffff" }}>{realmName}</strong> account.
                        If this was you, click the button below to set a new password.
                    </p>

                    <EmailButton href={link}>Reset Password</EmailButton>

                    <p
                        style={{
                            margin: "0 0 16px 0",
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: 14,
                            textAlign: "center"
                        }}
                    >
                        This link will expire in{" "}
                        <strong style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                            {expiration}
                        </strong>
                        .
                    </p>

                    <p
                        style={{
                            margin: 0,
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: 14,
                            textAlign: "center"
                        }}
                    >
                        If you didn't request this, you can safely ignore this email. Your
                        password will remain unchanged.
                    </p>

                    <EmailDivider />

                    <p
                        style={{
                            margin: 0,
                            color: "rgba(255, 255, 255, 0.4)",
                            fontSize: 13,
                            textAlign: "center"
                        }}
                    >
                        If the button doesn't work, copy and paste this link into your
                        browser:
                    </p>
                    <p
                        style={{
                            margin: "8px 0 0 0",
                            wordBreak: "break-all",
                            textAlign: "center"
                        }}
                    >
                        <EmailLink href={link}>{link}</EmailLink>
                    </p>
                </Card>

                {/* Footer outside Card */}
                <div style={{ textAlign: "center", paddingTop: 32 }}>
                    <p
                        style={{
                            margin: 0,
                            color: "rgba(255, 255, 255, 0.4)",
                            fontSize: 13
                        }}
                    >
                        © {new Date().getFullYear()} Berget AI. All rights reserved.
                    </p>
                    <p
                        style={{
                            margin: "8px 0 0 0",
                            color: "rgba(255, 255, 255, 0.3)",
                            fontSize: 12
                        }}
                    >
                        European AI Infrastructure
                    </p>
                </div>
            </div>
        </div>
    );
}

const meta = {
    title: "email/Password Reset",
    component: PasswordResetEmail,
    parameters: {
        layout: "fullscreen"
    }
} satisfies Meta<typeof PasswordResetEmail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
