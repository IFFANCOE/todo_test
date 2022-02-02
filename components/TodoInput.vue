<template>
  <div class="flex justify-center">
    <input
      class="border"
      v-model="todoText"
      @keypress.enter="addTodoIndex"
      type="text"
    />
    <button
      class="transition-all duration-300 ease-in hover:text-green-400"
      @click="addTodoIndex"
    >
      ADD
    </button>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import { v1 } from 'uuid'
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
        alert('input emtry')
      }
      this.todoText = ''
    },
  },
}
</script>

<style></style>
