import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Card } from "../../design-system/molecules/Card";
import { Button } from "../../design-system/atoms/Button";
import { BergetSymbol } from "../../design-system/atoms/Berget Symbol";
import "../berget-theme.css";
import "../../index.css";

export default function EmailConfirmation(
    props: PageProps<Extract<KcContext, { pageId: "email-confirmation.ftl" }>, I18n>
) {
    const { kcContext, i18n } = props;
    const { advancedMsgStr } = i18n;
    const { magicLinkContinuation } = kcContext;

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

                    {/* Success checkmark icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[hsl(var(--berget-primary))]/20 flex items-center justify-center">
                        <svg
                            className="w-10 h-10 text-[hsl(var(--berget-primary))]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
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
                        {advancedMsgStr("magicLinkSuccessfulLogin")}
                    </h1>

                    <div className="space-y-6 text-center">
                        {magicLinkContinuation.sameBrowser && (
                            <div className="pt-4">
                                <Button asChild width="full">
                                    <a href={magicLinkContinuation.url}>
                                        {advancedMsgStr("continueToApp")}
                                    </a>
                                </Button>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}
