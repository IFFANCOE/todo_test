<template>
  <div class="flex justify-center items-center mt-52">
    <div class="w-full max-w-xs">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Email</label
          >
          <ValidationObserver ref="form">
            <ValidationProvider rules="email" v-slot="{ errors }" name="email">
              <input
                id="identity"
                class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email"
                aria-describedby="emailHelp"
                v-model="user.email"
              />
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center mb-3 text-red-500"
              >
                <p>{{ errors[0] }}</p>
              </div>
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="password"
              rules="password"
            >
              <div class="password-input">
                <label
                  for="identity"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >Password</label
                >

                <input
                  aria-describedby="passwordHelp"
                  v-model="user.password"
                  class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="text"
                  placeholder="*******"
                />
                <!-- <span class="text-xs text-red-700" id="passwordHelp"></span> -->
              </div>
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-500"
              >
                <p>{{ errors[0] }}</p>
              </div>
            </ValidationProvider>
            <div class="flex items-center justify-center m-4">
              <button
                class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                @click="gologin()"
              >
                Login
              </button>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  // name: 'Login',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  middleware: 'unAuth',
  layout: '',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      test: this.$store.getters['login/gettersIs_Access'],
    }
  },
  computed: {
    isAccess() {
      return this.$store.getters['login/gettersIs_Access']
    },
  },
  methods: {
    async gologin() {
      // console.log('logging in')
      // console.log(this.user)
      // e.preventDefault()
      try {
        const success = await this.$refs.form.validate()
        if (!success) {
          alert('Email or Password Incorrect')
          return
        }
        await this.$store.dispatch('login/loginApi', this.user)
        await this.$router.go('/')
        // console.log('res: ', res)
      } catch (e) {
        console.log('error', e)
        alert('Error')
      }
    },
  },
}
</script>
<style>

</style>
