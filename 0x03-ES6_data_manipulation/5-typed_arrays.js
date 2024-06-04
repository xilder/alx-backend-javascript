export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range')
  }
  const buffer = new ArrayBuffer(length);
  const int8view = new Int8Array(buffer);
  int8view.set([value], position);
  return new DataView(buffer);
}