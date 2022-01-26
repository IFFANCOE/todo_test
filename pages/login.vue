<template>
  <div class="container">
    <div class="flex flex-col justify-center p-5">
      <label class="text-lime-400">Username</label>

      <input
        class="border p-2"
        type="text"
        placeholder="Name"
        v-model="username"
      />
      <label class="text-lime-400">password</label>

      <input
        class="border p-2"
        type="password"
        placeholder="password"
        v-model="password"
      />
      <button class="border" @click="login()">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      // this.$router.push('/todoLists')
    },
  },
}
</script>
