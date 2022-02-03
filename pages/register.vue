<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Register!</h2>

          <Notification :message="error" v-if="error" />

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  type="text"
                  class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="username"
                  v-model="username"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="email"
                  v-model="email"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  type="password"
                  class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="password"
                  v-model="password"
                  required
                />
              </div>
            </div>
            <div class="control">
              <button
                type="submit"
                class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>
          </form>

          <div class="mt-4" >
            Already got an account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Notification from '~/components/Notification'

export default {
  //   components: {
  //     Notification,
  //   },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: null,
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })

        // await this.$auth.loginWith('local', {
        //   data: {
        //   email: this.email,
        //   password: this.password
        //   },
        // })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>

<style>
.container {
  display: block;
  width: 400px;
  margin: 10px auto 100px;
  background-color: #fff;
  padding: 0px 10px 10px 10px;
  border-radius: 10px;
}
</style>
