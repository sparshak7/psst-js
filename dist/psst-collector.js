(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    const collectCanvasFingerpint = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        ctx.textBaseline = "top";
        ctx.font = "14px Arial";
        ctx.fillText("psst-fingerprint", 2, 2);
        return canvas.toDataURL();
    };

    const generateHashedFingerprint = async (data) => {
        const encoded = new TextEncoder().encode(JSON.stringify(data));
        const buffer = await crypto.subtle.digest("SHA-256", encoded);
        return [...new Uint8Array(buffer)]
            .map((b) => b.toString(16).padStart(2, "0"))
            .join("");
    };

    const collectNavigatorData = () => {
        return {
            userAgent: navigator.userAgent,
            language: navigator.language,
            languages: navigator.languages,
            geoLocation: navigator.geolocation,
            mediaCapabilities: navigator.mediaCapabilities,
            mediaSession: navigator.mediaSession,
            pdfViewerEnabled: navigator.pdfViewerEnabled,
        };
    };

    const collectScreenData = () => {
        return {
            screen: {
                width: screen.width,
                height: screen.height,
                colorDepth: screen.colorDepth,
                orientation: screen.orientation
            },
        };
    };

    const collect = async () => {
        const canvas = collectCanvasFingerpint();
        const navigatorData = collectNavigatorData();
        const screenData = collectScreenData();
        const hash = await generateHashedFingerprint({
            canvas,
            ...navigatorData,
            ...screenData,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            timezoneOffset: new Date().getTimezoneOffset(),
        });
        //make API call to backend
        console.log(hash);
    };

    window.psst = {
        collect
    };

}));
//# sourceMappingURL=psst-collector.js.map
