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
//   - `hrtime()`:
//      - Node only
//      - duration since machine was started
//      - array of two integers (seconds and nanoseconds)
//   - `hrtime.bigint()`:
//      - Node only
//      - duration since machine was started
//      - bigint (nanoseconds)
//      - slightly slower than `hrtime()` but simpler to manipulate
/* eslint-disable no-restricted-globals, node/prefer-global/process, no-undef */
// eslint-disable-next-line import/no-default-export
export default function getNowFunc() {
  if (process !== undefined) {
    return hrtime.bind(undefined, process.hrtime())
  }

  if (performance !== undefined) {
    return performanceNow.bind(undefined, performance.now())
  }

  return dateNow.bind(undefined, Date.now())
}

const hrtime = function (start) {
  const end = process.hrtime()
  return (end[0] - start[0]) * NANOSECS_TO_SECS + end[1] - start[1]
}

// `hrtime()` is always faster than `hrtime.bigint()` at the moment
// const hrtimeBigint = function(start) {
//   return Number(process.hrtime.bigint() - start)
// }

const performanceNow = function (start) {
  return Math.round((performance.now() - start) * NANOSECS_TO_MILLISECS)
}

// We make `Date.now()` relative to process start instead of Epoch so that the
// returned number is much smaller. Otherwise the returned integer is over
// `MAX_SAFE_INTEGER`.
const dateNow = function (start) {
  return (Date.now() - start) * NANOSECS_TO_MILLISECS
}

const NANOSECS_TO_SECS = 1e9
const NANOSECS_TO_MILLISECS = 1e6
/* eslint-enable no-restricted-globals, node/prefer-global/process, no-undef */
