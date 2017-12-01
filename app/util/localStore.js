export default {
  getItem: function(key){
    let value
    try {
      value = localStorage.getItem(key)
    } catch (e) {
      // 开发环境提示error
      if (__DEV__) {
        console.log('localStorage.getItem报错，', e.message);
      }
    } finally {
      return value
    }
  },
  setItem: function(key, value){
    try {
      // ios safari 无痕模式下，直接使用 localStorage.setItem 会报错
      value = localStorage.setItem(key, value)
    } catch (e) {
      // 开发环境提示error
      if (__DEV__) {
        console.log('localStorage.setItem报错，', e.message);
      }
    }
  }
}
