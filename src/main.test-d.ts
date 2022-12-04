import preciseNow from 'precise-now'
import { expectType } from 'tsd'

expectType<number>(preciseNow())
// @ts-expect-error
preciseNow(1)
