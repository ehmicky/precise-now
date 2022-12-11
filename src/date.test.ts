import { removeHrtime, removePerformanceNow } from './helpers/remove.test.js'

removeHrtime()
removePerformanceNow()
await import('./helpers/tests.test.js')
