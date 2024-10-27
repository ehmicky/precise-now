// Mimics browsers by removing Node.js specific API
export const removeHrtime = () => {
  // eslint-disable-next-line fp/no-mutation, n/prefer-global/process
  globalThis.process.hrtime.bigint = undefined as never
}

// Mimics platforms without `performance.now()` by removing it
export const removePerformanceNow = () => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (globalThis?.performance?.now !== undefined) {
    Object.defineProperty(globalThis.performance, 'now', {
      value: undefined,
      enumerable: true,
      writable: true,
      configurable: true,
    })
  }
}
