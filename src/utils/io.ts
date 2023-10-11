export const fetchPart = async (url: string, length: number): Promise<Uint8Array> => {
    const response = await fetch(url);
    const reader = response.body?.getReader();
    const buffer = new Uint8Array(length);
    let index = 0;
    while (reader != null && index < length) {
        const { done, value } = await reader.read();
        for (let i = 0; value != null && i < value.length && index < length; ++i) {
            buffer[index++] = value[i];
        }
        if (done) {
            break;
        }
    }
    await reader?.cancel();
    return index < length ? new Uint8Array(buffer.subarray(0, index)) : buffer;
}