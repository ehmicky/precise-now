import { hrtime } from 'process'
import { performance } from 'perf_hooks'

export const tasks = [
  {
    id: 'hrtime',
    title: 'process.hrtime()',
    main: () => hrtime(),
  },
  {
    id: 'hrtime-bigint',
    title: 'process.hrtime.bigint()',
    main: () => hrtime.bigint(),
  },
  {
    id: 'performance-now',
    title: 'performance.now()',
    main: () => performance.now(),
  },
  {
    id: 'date-now',
    title: 'Date.now()',
    main: () => Date.now(),
  },
  {
    id: 'date-gettime',
    title: 'new Date().getTime()',
    main: () => new Date().getTime(),
  },
  {
    id: 'number-new-date',
    title: 'Number(new Date())',
    main: () => Number(new Date()),
  },
]
