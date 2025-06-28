export const generateHashedFingerprint = async (data: object) => {
  const json = JSON.stringify(data);

  if (typeof window !== "undefined" && window.crypto?.subtle) {
    const encoded = new TextEncoder().encode(json);
    const buffer = await window.crypto.subtle.digest("SHA-256", encoded);
    return [...new Uint8Array(buffer)]
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  const { createHash } = await import("crypto");
  return createHash("sha256").update(json).digest("hex");
}