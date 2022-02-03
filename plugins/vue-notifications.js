import VueNotifications from 'vue-notifications'
import Vue from 'vue'
import VueToasted from 'vue-toasted'

// We shall setup types of the messages. ('error' type - red and 'success' - green in mini-toastr)
// const toastTypes = {
//   success: 'success',
//   error: 'error',
//   info: 'info',
//   warn: 'warn',
// }
function toast({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'show'
  return Vue.toasted[type](message, { duration: timeout })
}

Vue.use(VueToasted)

// Here we map vue-notifications method to function abowe (to mini-toastr)
// By default vue-notifications can have 4 methods: 'success', 'error', 'info' and 'warn'
// But you can specify whatever methods you want.
// If you won't specify some method here, output would be sent to the browser's console
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast,
}

// Activate plugin
// VueNotifications have auto install but if we want to specify options we've got to do it manually.
Vue.use(VueNotifications, options)
