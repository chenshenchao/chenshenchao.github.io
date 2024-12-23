export const loadFont = async (name: string, url: string): Promise<FontFace> => {
    const fontFace = new FontFace(name, `url(${url})`);
    if (!document.fonts.has(fontFace)) {
        document.fonts.add(fontFace);
        return await fontFace.load();
    }
    return fontFace;
}