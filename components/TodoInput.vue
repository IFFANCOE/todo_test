<template>
  <div class="flex justify-center">
    <!-- <input
      class="border w-1/5 border-b-4 border-indigo-500"
      v-model="todoText"
      @keypress.enter="addTodoIndex"
      placeholder="Add Todo"
      type="text"
    /> -->
    <input
      type="text"
      v-model="todoText"
      class="static shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/5 sm:text-sm border-gray-300 px-4 rounded-full"
      placeholder="Add Todo"
    />
    <button
      type="button"
      class=" ml-1 inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      @click="addTodoIndex"
    >
      <!-- Heroicon name: solid/plus-sm -->
      <svg
        class="h-5 w-5 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <!-- <button
      class="transition-all duration-300 ease-in hover:text-green-400 ml-2"
      @click="addTodoIndex"
    >
      ADD
    </button> -->
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import { v1 } from 'uuid'
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      todoText: '',
    }
  },
  async created() {
    await this.getTask()
  },
  computed: {
    todolist() {
      return this.$store.getters['allTodos']
    },
  },
  methods: {
    async getTask() {
      await this.$store.dispatch('getToDoListFromAPI')
    },
    async addTodoIndex() {
      //   input todoText to action addTodo
      if (this.todoText != '') {
        const newTodo = {
          title: this.todoText,
        }
        // console.log('todolist:',this.todolist);
        // console.log('newtodo',newTodo);
        const newTodos = [...this.todolist, newTodo]
        // console.log('newTodos',newTodos);
        await this.$store.dispatch('setToDoListFromApi', newTodos)
        await this.getTask()
      } else {
        // alert('input emtry')
        Swal.fire('Please fill out', '', 'question')

      }
      this.todoText = ''
    },
  },
}
</script>

<style>
/* input {
    width: 100%;
    border-bottom: 3px dashed red;
    padding: 5px 0 3px;
    font-size: 18px;
    background: transparent;
  } */
</style>
