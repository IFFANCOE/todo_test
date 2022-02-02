<template>
  <div>
    <div class="flex justify-end p-6">
      <button
        class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="logout()"
      >
        Logout
      </button>
    </div>
    <div class="todo-wrapper ">
        <TodoInput />
        <TodoList />
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'isAuth',
  data() {
    return {
      // newTask: '',
      // update:null,
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.go('/login')
    },
  },
  computed: {
    // todolist(){
    //   return this.$store.getters['todolist/gettersTodo']
    // }
  },
}
</script>

<style>
/* .container {
  display: block;
  width: 400px;
  margin: 10px auto 100px;
  background-color: #fff;
  padding: 0px 10px 10px 10px;
  border-radius: 10px;
} */
.todo-wrapper {
  width: 400px;
  max-width: 100%;
  min-height: 500px;
  margin: 20px auto 40px;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 40px 20px;
  -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
  background-color: #f4f7fc;
  overflow: hidden;
  position: relative;
}
</style>
