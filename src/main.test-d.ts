import { expectType, expectError } from 'tsd'

import preciseNow from 'precise-now'

expectType<number>(preciseNow())
expectError(preciseNow(1))
