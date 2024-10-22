export type MediaType = "pc" | "mobile";

export const getMediaType = (): MediaType => /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "pc";
