import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Card } from "../../design-system/molecules/Card";
import { Button } from "../../design-system/atoms/Button";
import { BergetSymbol } from "../../design-system/atoms/Berget Symbol";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import "../berget-theme.css";
import "../../index.css";

export default function OtpForm(
    props: PageProps<Extract<KcContext, { pageId: "otp-form.ftl" }>, I18n>
) {
    const { kcContext, i18n } = props;
    const { msg, msgStr, advancedMsgStr } = i18n;
    const { auth, url, messagesPerField } = kcContext;

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
                        {advancedMsgStr("otpFormTitle")}
                    </h1>

                    <p
                        style={{
                            margin: "0 0 32px 0",
                            color: "rgba(255, 255, 255, 0.6)",
                            textAlign: "center"
                        }}
                    >
                        {advancedMsgStr("otpFormSubtitle")}{" "}
                        <span style={{ color: "#ffffff", fontWeight: 500 }}>
                            {auth.attemptedUsername}
                        </span>
                    </p>

                    <div className="space-y-6">
                        <form
                            id="kc-otp-login-form"
                            action={url.loginAction}
                            method="post"
                            className="space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="otp"
                                    className="block text-white/60 text-sm font-medium mb-2"
                                >
                                    {msg("loginOtpOneTime")}
                                </label>
                                <input
                                    id="otp"
                                    name="otp"
                                    autoComplete="one-time-code"
                                    type="text"
                                    className="berget-input w-full text-center text-2xl tracking-[0.5em] font-mono"
                                    autoFocus
                                    placeholder="000000"
                                    maxLength={6}
                                    aria-invalid={
                                        messagesPerField.existsError("totp")
                                            ? "true"
                                            : undefined
                                    }
                                />
                                {messagesPerField.existsError("totp") && (
                                    <span
                                        id="input-error-otp-code"
                                        className="text-red-400 text-sm mt-2 block text-center"
                                        aria-live="polite"
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(
                                                messagesPerField.get("totp")
                                            )
                                        }}
                                    />
                                )}
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button
                                    type="submit"
                                    name="submit"
                                    id="kc-submit"
                                    width="full"
                                >
                                    {msgStr("doSubmit")}
                                </Button>
                                <Button
                                    type="submit"
                                    name="resend"
                                    id="kc-resend"
                                    variant="outline"
                                    width="full"
                                >
                                    {advancedMsgStr("doResend")}
                                </Button>
                            </div>
                        </form>

                        <div className="text-center pt-6 border-t border-white/10">
                            <a
                                href={url.loginRestartFlowUrl}
                                className="text-sm text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors"
                                aria-label={msgStr("restartLoginTooltip")}
                            >
                                {advancedMsgStr("otpFormChangeEmail")}
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
