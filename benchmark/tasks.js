// TODO: `performance` is a global variable since Node 16.0.0, i.e. remove this
// import after dropping support for Node <16.0.0
// eslint-disable-next-line no-shadow
import { performance } from 'node:perf_hooks'
import process from 'node:process'

export const hrtime = () => {
  process.hrtime()
}

export const hrtimeBig = () => {
  process.hrtime.bigint()
}

export const performanceNow = () => {
  performance.now()
}

export const dateNow = () => {
  Date.now()
}

export const dateGetTime = () => {
  // eslint-disable-next-line unicorn/prefer-date-now
  new Date().getTime()
}

export const dateNumber = () => {
  // eslint-disable-next-line unicorn/prefer-date-now
  Number(new Date())
}
