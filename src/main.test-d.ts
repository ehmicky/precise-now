import preciseNow from 'precise-now'
import { expectType, expectError } from 'tsd'

expectType<number>(preciseNow())
expectError(preciseNow(1))
