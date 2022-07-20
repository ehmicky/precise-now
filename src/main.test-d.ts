import { expectType, expectError } from 'tsd'

import preciseNow from './main.js'

expectType<number>(preciseNow())
expectError(preciseNow(1))
