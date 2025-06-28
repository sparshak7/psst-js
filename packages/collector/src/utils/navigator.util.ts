export const collectNavigatorData = () => {
  const uaData = (navigator as any).userAgentData;

  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    languages: navigator.languages,
    platform: uaData?.platform ?? null,
    brands: uaData?.brands ?? null,
    mobile: uaData?.mobile ?? null,
    hardwareConcurrency: navigator.hardwareConcurrency,
    geoLocation: navigator.geolocation,
    mediaCapabilities: navigator.mediaCapabilities,
    mediaSession: navigator.mediaSession,
    pdfViewerEnabled: navigator.pdfViewerEnabled,
    maxTouchPoints: navigator.maxTouchPoints,
  };
};

