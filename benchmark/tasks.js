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
