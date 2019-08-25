import test from 'ava'

import now from '../src/main.js'

test('dummy', t => {
  t.is(typeof now, 'function')
})
