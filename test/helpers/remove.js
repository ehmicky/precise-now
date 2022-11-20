// TODO: remove after dropping support for Node <16.0.0
// eslint-disable-next-line no-shadow
import performance from 'node:perf_hooks'

// Mimics browsers by removing Node.js specific API
export const removeHrtime = function () {
  // eslint-disable-next-line fp/no-mutation, n/prefer-global/process
  globalThis.process.hrtime.bigint = undefined
}

// Mimics platforms without `performance.now()` by removing it
export const removePerformanceNow = function () {
  // eslint-disable-next-line fp/no-mutation
  performance.now = undefined

  if (globalThis?.performance?.now !== undefined) {
    // eslint-disable-next-line fp/no-mutating-methods
    Object.defineProperty(globalThis.performance, 'now', {
      value: undefined,
      enumerable: true,
      writable: true,
      configurable: true,
    })
  }
}
