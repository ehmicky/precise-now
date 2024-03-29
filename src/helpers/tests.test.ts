import { setTimeout } from 'node:timers/promises'

import test from 'ava'
import now from 'precise-now'

test('Returns an integer', (t) => {
  t.true(Number.isInteger(now()))
})

test('Returns the time since the library was loaded', (t) => {
  t.true(now() < LOADED_TIME_THRESHOLD)
})

const LOADED_TIME_THRESHOLD = 6e10

test('Returns the time in nanoseconds', async (t) => {
  const start = now()
  await setTimeout(TIMEOUT_MILLESECS)
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
