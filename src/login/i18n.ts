/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            doResend: "Resend code",
            otpFormTitle: "Enter Code",
            otpFormSubtitle: "We sent a code to",
            otpFormChangeEmail: "Use a different email"
        },
        sv: {
            doResend: "Skicka igen",
            otpFormTitle: "Ange kod",
            otpFormSubtitle: "Vi skickade en kod till",
            otpFormChangeEmail: "Använd en annan e-post"
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
