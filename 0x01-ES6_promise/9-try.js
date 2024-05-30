export default function guardrail(mathFunction) {
  const newArr = [];
  try {
    newArr.push(mathFunction());
  } catch (err) {
    newArr.push(`Error: ${err.message}`);
  } finally {
    newArr.push('Guardrail was processed');
    return newArr;
  }
}
