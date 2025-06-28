export const collectNavigatorData = () => {
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
//# sourceMappingURL=navigator.util.js.map