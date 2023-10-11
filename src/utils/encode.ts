export const trimUtf8 = (buffer: Uint8Array): Uint8Array => {
    let i = buffer.length - 1;
    let c = buffer[i];
    let m = 0b10000000;
    while ((c & 0b11000000) == 0b10000000 && i > 0) {
        c = buffer[--i];
        m = (m >> 1) | 0b10000000;
    }
    if (m > 0b10000000 && (c & m) == m) {
        return buffer;
    }
    if (c >= 0b11000000 && i > 0) {
        --i;
    }
    const size = i + 1;
    return size < length ? new Uint8Array(buffer.subarray(0, size)) : buffer;
}