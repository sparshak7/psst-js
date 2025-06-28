export const generateHashedFingerprint = async (data) => {
    const encoded = new TextEncoder().encode(JSON.stringify(data));
    const buffer = await crypto.subtle.digest("SHA-256", encoded);
    return [...new Uint8Array(buffer)]
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
};
//# sourceMappingURL=hash.util.js.map