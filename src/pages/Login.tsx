import type { KcContext } from "./KcContext";
import type { I18n } from "./i18n";
import { Card } from "../design-system/atoms/Card";
import { Alert, AlertDescription } from "../components/ui/Alert";
import { Button } from "../design-system/atoms/Button";
import Checkbox from "../components/ui/Checkbox";
import { BergetSymbol } from "../design-system/atoms/Berget Symbol";
import { kcSanitize } from "keycloakify/lib/kcSanitize";
import "./berget-theme.css";
import "../index.css";

interface LoginProps {
    kcContext: Extract<KcContext, { pageId: "login.ftl" }>;
    i18n: I18n;
}

export default function Login({ kcContext, i18n }: LoginProps) {
    const { msg, msgStr } = i18n;
    const { url, realm, usernameHidden, login, messagesPerField, social, message } =
        kcContext;

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
                <Card variant="solid" className="p-10">
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
                        {realm.displayName || realm.name}
                    </h1>

                    <p
                        style={{
                            margin: "0 0 32px 0",
                            color: "rgba(255, 255, 255, 0.6)",
                            textAlign: "center"
                        }}
                    >
                        Sign in to continue
                    </p>

                    <div className="space-y-6">
                        {message && (
                            <Alert
                                variant={
                                    message.type === "error"
                                        ? "destructive"
                                        : message.type === "success"
                                          ? "success"
                                          : "default"
                                }
                            >
                                <AlertDescription>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: kcSanitize(message.summary)
                                        }}
                                    />
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Social Providers */}
                        {social?.providers && social.providers.length > 0 && (
                            <div className="space-y-4">
                                <div className="text-center text-sm text-white/60">
                                    Or continue with
                                </div>
                                <div className="grid grid-cols-1 gap-2">
                                    {social.providers.map(provider => (
                                        <Button
                                            key={provider.providerId}
                                            variant="outline"
                                            width="full"
                                        >
                                            <a
                                                href={provider.loginUrl}
                                                className="flex items-center justify-center gap-2 w-full h-full"
                                            >
                                                <i className={provider.iconClasses} />
                                                <span>{provider.displayName}</span>
                                            </a>
                                        </Button>
                                    ))}
                                </div>
                                {social.providers.length > 0 && (
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t border-white/10" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-background px-2 text-white/60">
                                                Or
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Login Form */}
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                // Handle form submission
                            }}
                            action={url.loginAction}
                            method="post"
                            className="space-y-6"
                        >
                            {!usernameHidden && (
                                <div>
                                    <label
                                        htmlFor="username"
                                        className="block text-white/60 text-sm font-medium mb-2"
                                    >
                                        {msg("usernameOrEmail")}
                                    </label>
                                    <input
                                        tabIndex={1}
                                        id="username"
                                        className="berget-input w-full"
                                        name="username"
                                        defaultValue={login?.username ?? ""}
                                        type="text"
                                        autoFocus={true}
                                        autoComplete="off"
                                    />
                                    {messagesPerField.existsError("username") && (
                                        <span className="text-red-400 text-sm mt-1 block">
                                            {messagesPerField.get("username")}
                                        </span>
                                    )}
                                </div>
                            )}

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-white/60 text-sm font-medium mb-2"
                                >
                                    {msg("password")}
                                </label>
                                <input
                                    tabIndex={2}
                                    id="password"
                                    className="berget-input w-full"
                                    name="password"
                                    type="password"
                                    autoComplete="off"
                                />
                                {messagesPerField.existsError("password") && (
                                    <span className="text-red-400 text-sm mt-1 block">
                                        {messagesPerField.get("password")}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <Checkbox
                                    id="rememberMe"
                                    name="rememberMe"
                                    checked={login?.rememberMe === "on"}
                                    label={msg("rememberMe")}
                                />

                                {realm.resetPasswordAllowed && (
                                    <div>
                                        <a
                                            tabIndex={5}
                                            href={url.loginResetCredentialsUrl}
                                            className="text-sm text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors"
                                        >
                                            {msg("doForgotPassword")}
                                        </a>
                                    </div>
                                )}
                            </div>

                            <Button
                                type="submit"
                                tabIndex={4}
                                name="login"
                                id="kc-login"
                                width="full"
                            >
                                {msgStr("doLogIn")}
                            </Button>
                        </form>

                        {realm.registrationAllowed && (
                            <div className="text-center pt-6 border-t border-white/10">
                                <span className="text-white/60 text-sm">
                                    {msg("noAccount")}{" "}
                                    <a
                                        href={url.registrationUrl}
                                        className="text-[hsl(var(--berget-primary))] hover:text-[hsl(var(--berget-secondary))] transition-colors"
                                    >
                                        {msg("doRegister")}
                                    </a>
                                </span>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}
