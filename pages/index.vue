<template>
  <div>
    <div class="flex justify-end">
      <button
        class="bg-blue-600 hover:bg-black text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="logout()"
      >
        <!-- Logout -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-box-arrow-right "
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
          />
          <path
            fill-rule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-col mb-6">
      <span class="flex justify-center font-bold text-6xl mb-4 text-indigo-600"
        >Todo List</span
      >
      <TodoInput />
    </div>
    <div class="todo-wrapper px-4">
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
  width: 50%;
  max-width: 100%;
  margin: 0 auto 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  /* padding: 40px 20px; */
  /* box-shadow: inset 0 3px 6px rgb(0 0 0 / 16%), 0 4px 6px rgb(0 0 0 / 45%); */
  background-color: #f4f7fc;
  overflow-y: scroll;
  height: 632px;
}
</style>
