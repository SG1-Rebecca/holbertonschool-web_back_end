export default function createInt8TypedArray(length, position, value) {
  // Create a new Int8Array with the specified length
  const buffer = new ArrayBuffer(length);

  // Check if the position is within the bounds of the array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const int8Array = new Int8Array(buffer);
  int8Array[position] = value;

  return buffer;
}
