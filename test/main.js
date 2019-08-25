import test from 'ava'

import now from '../src/main.js'

test('Returns an integer', t => {
  const time = now()

  t.true(Number.isInteger(time))
})

test('Returns the time since the library was loaded', t => {
  const time = now()

  t.true(time < LOADED_TIME_THRESHOLD)
})

const LOADED_TIME_THRESHOLD = 6e10
