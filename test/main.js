import { promisify } from 'node:util'

import test from 'ava'
import now from 'precise-now'

// TODO: replace with `timers/promises` `setTimeout()` after dropping support
// for Node <15.0.0
const pSetTimeout = promisify(setTimeout)

test('Returns an integer', (t) => {
  const time = now()

  t.true(Number.isInteger(time))
})

test('Returns the time since the library was loaded', (t) => {
  const time = now()

  t.true(time < LOADED_TIME_THRESHOLD)
})

const LOADED_TIME_THRESHOLD = 6e10

test('Returns the time in nanoseconds', async (t) => {
  const start = now()

  await pSetTimeout(TIMEOUT_MILLESECS)

  const duration = now() - start

  t.true(duration > TIMEOUT_MIN)
  t.true(duration < TIMEOUT_MAX)
})

const MILLISECS_TO_NANOSECS = 1e6
const TIMEOUT_MILLESECS = 1e3
const TIMEOUT_NANOSECS = TIMEOUT_MILLESECS * MILLISECS_TO_NANOSECS
const TOLERANCE = 2
const TIMEOUT_MIN = TIMEOUT_NANOSECS / TOLERANCE
const TIMEOUT_MAX = TIMEOUT_NANOSECS * TOLERANCE
