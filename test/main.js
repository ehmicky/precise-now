import test from 'ava'

import now from '../src/main.js'

test('Returns an integer', t => {
  const time = now()

  t.true(Number.isInteger(time))
})
