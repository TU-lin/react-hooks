/*
 * @LastEditors: linxiaotong
 * @Date: 2024-12-10 13:51:52
 * @LastEditTime: 2024-12-10 14:43:38
 * @Description: 
 */
function useThrottle(callback: Function, wait: number) {
  let timer
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this)
    },wait)
  }
}
export default useThrottle