import { Card } from "../design-system/atoms/Card";
import { Button } from "../design-system/atoms/Button";
import { BergetSymbol } from "../design-system/atoms/Berget Symbol";

export default function SimpleBergetPage() {
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
                        myrealm
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

                    <div className="space-y-5">
                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-2">
                                Username or email
                            </label>
                            <input
                                type="text"
                                className="berget-input w-full"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label className="block text-white/70 text-sm font-medium mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                className="berget-input w-full"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-2">
                            <label className="flex items-center text-white/80 text-sm cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="mr-2 w-4 h-4 rounded accent-primary"
                                />
                                Remember me
                            </label>
                            <a
                                href="#"
                                className="text-primary hover:text-secondary transition-colors text-sm"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <Button width="full">Sign In</Button>

                        <div className="text-center pt-6">
                            <span className="text-white/60 text-sm">
                                New user?{" "}
                                <a
                                    href="#"
                                    className="text-primary hover:text-secondary transition-colors"
                                >
                                    Register
                                </a>
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
