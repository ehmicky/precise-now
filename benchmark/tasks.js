import { performance } from 'perf_hooks'
import process from 'process'

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
