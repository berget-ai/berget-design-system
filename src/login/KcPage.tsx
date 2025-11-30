import { Suspense } from "react";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import Login from "./Login";

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;
    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl":
                        return <Login kcContext={kcContext} i18n={i18n} />;
                    default:
                        return <div className="berget-auth-container">
                            <div className="text-white text-center">
                                <h2 className="text-2xl font-serif mb-4">Page: {kcContext.pageId}</h2>
                                <p className="text-white/60">This page is not implemented yet</p>
                            </div>
                        </div>;
                }
            })()}
        </Suspense>
    );
}
