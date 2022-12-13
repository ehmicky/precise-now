// Returns the number of nanoseconds since the library was loaded.
// Meant to calculate time differences:
//  - precisely: use nanoseconds instead of milliseconds
//  - accurately: does not use huge integers since those are not exact anymore
//    (when above `1e16`)
//  - fast: use the fastest underlying method for the current platform
//  - cross-platform: works on either Node.js or browsers
// Comparison between methods:
//   - `Date.now()`:
//      - works in all environments
//      - duration since Epoch
//      - integers (milliseconds)
//      - fastest. Also faster than `new Date().getTime()` and
//        `Number(new Date())`
//      - less accurate. Can be skewed by OS clock.
//      - less precise: only milliseconds precise. The other methods are as
//        precise as the system time resolution.
//   - `performance.now()`:
//      - works in all environments.
//      - duration since process was started
//      - float (milliseconds)
//      - in Node, it is built on top of `hrtime()`. It converts it to
//        milliseconds, while leads to rounding errors, as opposed to keeping
//        and manipulating the seconds and nanoseconds fields separately.
//   - `hrtime[.bigint]()`:
//      - Node only
//      - duration since machine was started
//      - nanoseconds
const nowFunc = () => {
  // eslint-disable-next-line n/prefer-global/process
  if (globalThis?.process?.hrtime?.bigint !== undefined) {
    // eslint-disable-next-line n/prefer-global/process
    return hrtime.bind(undefined, globalThis.process.hrtime.bigint())
  }

  if (globalThis?.performance?.now !== undefined) {
    return performanceNow.bind(undefined, globalThis.performance.now())
  }

  return dateNow.bind(undefined, Date.now())
}

// eslint-disable-next-line n/prefer-global/process
const hrtime = (start) => Number(globalThis.process.hrtime.bigint() - start)

const performanceNow = (start) =>
  Math.round((globalThis.performance.now() - start) * NANOSECS_TO_MILLISECS)

const dateNow = (start) => (Date.now() - start) * NANOSECS_TO_MILLISECS

const NANOSECS_TO_MILLISECS = 1e6

export default nowFunc()
