export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const MAX_ENDPOINTS = 5;
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINTS) {
    throw new Error('Endpoint load is high');
  }
}
