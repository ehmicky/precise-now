// TODO: `performance` is a global variable since Node 16.0.0, i.e. remove this
// import after dropping support for Node <16.0.0
// eslint-disable-next-line no-shadow
import { performance } from 'node:perf_hooks'
import process from 'node:process'

export const hrtime = function () {
  process.hrtime()
}

export const hrtimeBig = function () {
  process.hrtime.bigint()
}

export const performanceNow = function () {
  performance.now()
}

export const dateNow = function () {
  Date.now()
}

export const dateGetTime = function () {
  new Date().getTime()
}

export const dateNumber = function () {
  Number(new Date())
}
