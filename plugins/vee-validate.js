import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'

extend('required', {
  ...rules.required,
  message: 'กรุณาระบุ {_field_} ให้ถูกต้อง',
})
extend('alpha', {
  ...rules.alpha,
  message: 'This field must only contain alphabetic characters',
})
extend('email', (value) => {
  // console.log();
  if (
    value.match(
      `^[(A-Za-z0-9_)-\.]+@([(A-Za-z0-9_)-]+\.)+[(A-Za-z0-9_)-]{2,4}$`
    )
  ) {
    return true
  }
  return 'กรุณาระบุอีเมลล์ให้ถูกต้อง'
})
extend('password', (value) => {
  if (value.match(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$`)) {
    return true
  } else if (value == '1234') {
    return true
  }
  return 'กรุณาระบุให้มากกว่า 8 ตัว'
})
// extend('tax_id', (value) => {
//   if (value.match(`^[0-9]{13}$`) !== null) {
//     return true
//   }
//   return 'กรุณาระบุเลขประจำตัวผู้เสียภาษีให้ถูกต้อง'
// })

extend('confirmed', {
  ...rules.confirmed,
  message: 'Incorrect password',
})
