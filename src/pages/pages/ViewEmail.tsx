import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Card } from "../../design-system/atoms/Card";
import { BergetSymbol } from "../../design-system/atoms/Berget Symbol";
import "../berget-theme.css";
import "../../index.css";

export default function ViewEmail(
    props: PageProps<Extract<KcContext, { pageId: "view-email.ftl" }>, I18n>
) {
    const { kcContext, i18n } = props;
    const { msgStr, advancedMsgStr } = i18n;
    const { auth, url } = kcContext;

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
                        {advancedMsgStr("checkYourEmail")}
                    </h1>

                    <div className="space-y-6 text-center">
                        <div className="space-y-3 py-4">
                            <p
                                style={{
                                    margin: 0,
                                    color: "#ffffff",
                                    fontWeight: 500,
                                    fontSize: 18
                                }}
                            >
                                {auth.attemptedUsername}
                            </p>
                            <p
                                style={{
                                    margin: 0,
                                    color: "rgba(255, 255, 255, 0.6)"
                                }}
                            >
                                {advancedMsgStr("magicLinkConfirmation")}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <a
                                href={url.loginRestartFlowUrl}
                                className="text-sm text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors"
                                aria-label={msgStr("restartLoginTooltip")}
                            >
                                {advancedMsgStr("tryAnotherWay")}
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
