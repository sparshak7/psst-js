export const collectCanvasFingerpint = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 200;
  canvas.height = 50;
  const ctx = canvas.getContext("2d");

  if (!ctx) return "";

  ctx.textBaseline = "top";
  ctx.font = "14px Arial";
  ctx.fillText("psst-fingerprint", 2, 2);

  return canvas.toDataURL();
}