export const collectCanvasFingerpint = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx!.textBaseline = "top";
  ctx!.font = "14px Arial";
  ctx!.fillText("psst-fingerprint", 2, 2);

  return canvas.toDataURL();
}