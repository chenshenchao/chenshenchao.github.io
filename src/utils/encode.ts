export const trimUtf8 = (buffer: Uint8Array): Uint8Array => {
  let i = buffer.length - 1;
  let c = buffer[i];
  let hasTrim = false;
  while ((c & 0b11000000) == 0b10000000 && i > 0) {
    c = buffer[--i] & 0b11000000;
    hasTrim = true;
  }
  if ((c & 0b11100000) == 0b11100000 || (c & 0b11110000) == 0b11110000) {
    hasTrim = true;
  }

  if (hasTrim) {
    --i;
    // console.log("trim", buffer.subarray(0, i + 1));
  }
  return i < buffer.length ? new Uint8Array(buffer.subarray(0, i + 1)) : buffer;
};
