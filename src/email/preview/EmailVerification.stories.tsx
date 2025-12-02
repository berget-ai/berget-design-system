import type { Meta, StoryObj } from "@storybook/react";
import { EmailTemplate, EmailButton, EmailDivider, EmailLink } from "./EmailTemplate";

function EmailVerificationEmail() {
    const link = "https://auth.berget.ai/verify-email?token=abc123";
    const realmName = "Berget AI";
    const expiration = "24 hours";

    return (
        <EmailTemplate>
            <h1
                style={{
                    margin: "0 0 24px 0",
                    fontSize: 24,
                    fontWeight: 500,
                    color: "#ffffff"
                }}
            >
                Verify Your Email
            </h1>

            <p style={{ margin: "0 0 24px 0", color: "rgba(255, 255, 255, 0.7)" }}>
                Welcome to <strong style={{ color: "#ffffff" }}>{realmName}</strong>!
                Please verify your email address by clicking the button below.
            </p>

            <EmailButton href={link}>Verify Email Address</EmailButton>

            <p
                style={{
                    margin: "0 0 16px 0",
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: 14
                }}
            >
                This link will expire in{" "}
                <strong style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                    {expiration}
                </strong>
                .
            </p>

            <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.5)", fontSize: 14 }}>
                If you didn't create this account, you can safely ignore this email.
            </p>

            <EmailDivider />

            <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.4)", fontSize: 13 }}>
                If the button doesn't work, copy and paste this link into your browser:
            </p>
            <p style={{ margin: "8px 0 0 0", wordBreak: "break-all" }}>
                <EmailLink href={link}>{link}</EmailLink>
            </p>
        </EmailTemplate>
    );
}

const meta = {
    title: "email/Email Verification",
    component: EmailVerificationEmail,
    parameters: {
        layout: "fullscreen"
    }
} satisfies Meta<typeof EmailVerificationEmail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
