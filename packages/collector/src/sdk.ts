import { collectCanvasFingerpint } from "./utils/canvas.util.js"
import { generateHashedFingerprint } from "./utils/hash.util.js";
import { collectNavigatorData } from "./utils/navigator.util.js";
import { collectScreenData } from "./utils/screen.util.js";

export const collect = async(): Promise<string> => {
  const canvas = collectCanvasFingerpint();
  const navigatorData = collectNavigatorData();
  const screenData = collectScreenData();

  const hash = await generateHashedFingerprint({
    canvas,
    ...navigatorData,
    ...screenData,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    devicePixelRatio: window.devicePixelRatio
  });

  //make API call to backend
  return hash
}