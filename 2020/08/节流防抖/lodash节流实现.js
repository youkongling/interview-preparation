function debounce(func, wait) {
  let timerId,
      lastThis,
      lastArgs,
      FUNC_ERROR_TEXT = 'Expected a function'

  formatArgs()

  return debounced

  function formatArgs() {
    if (typeof func !== 'function') {
      throw new TypeError(FUNC_ERROR_TEXT)
    }
    wait = +wait || 0
  }

  function timeExpired() {
    return invokeFunc()
  }

  function invokeFunc() {
    let args = lastArgs,
        thisArg = lastThis
    lastArgs = lastThis = undefined
    func.apply(thisArg, args)
  }

  function startTimer(time) {
    return setTimeout(timeExpired, time)
  }

  function debounced() {
    lastThis = this
    lastArgs = arguments

    clearTimeout(timerId)
    timerId = startTimer(wait)
  }
}