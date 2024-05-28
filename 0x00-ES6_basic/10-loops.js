/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const newArr = []
  for (const idx of array) {
    newArr.push(appendString + idx);
  }

  return newArr;
}
