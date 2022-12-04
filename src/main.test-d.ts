import { expectType } from 'tsd'

import preciseNow from 'precise-now'

expectType<number>(preciseNow())
// @ts-expect-error
preciseNow(1)
