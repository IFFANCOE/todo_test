<template>
  <div>
    <div class="flex justify-between">
      <span v-if="!editing" class="cut-text">{{ todo.title }}</span>
      <input
        v-else
        v-model="todoText"
        type="text"
        @keypress.enter="updateTodoIndex(todo)"
        class="border"
      />
      <div>
        <button v-if="editing" @click="updateTodoIndex(todo)">Update</button>
        <button v-if="editing" @click="cancelToggle(todo)">Cancel</button>
        <button v-else @click="toggleTodo(todo)">Edit</button>
        <button @click="removeTodo(todo.id)">delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  data() {
    return {
      editing: false,
      todoText: '',
    }
  },
  computed: {
    stateTodos() {
      return this.$store.getters['allTodos']
    },
  },
  methods: {
    async removeTodo(id) {
      const conFirm = confirm('Are you sure you want to remove?')
      if (conFirm === true) {
        await this.$store.dispatch('removeToDoListFromAPI', id)
        await this.getTask()
        // alert('Delete Successfully')
      }
      // this.$store.dispatch('removeToDoListFromAPI', id)
    },
    upTodo(newTodo) {
      this.$store.dispatch('updateTodo', newTodo)
    },
    async getTask() {
      await this.$store.dispatch('getToDoListFromAPI')
    },

    updateTodoIndex(todo) {
      let newTodo = {
        id: todo.id,
        title: this.todoText,
      }
// ------------------
      // let arrTodo = []
      // arrTodo = [...state.todos]
      // console.log('is', todo)
      // let newTodo = arrTodo.map((thing) => {
      //   if (todo.id === thing.id) {
      //     return {
      //       id: thing.id,
      //       title: todo.title,
      //     }
      //   } else {
      //     return thing
      //   }
      // })
      // state.todos = [...newTodo]
      // console.log(newTodo)
// -------------------
      this.upTodo(newTodo)
      console.log('updateTodoIndex', todo)

      // this.$store.getters['allTodos']
      this.editing = false
    },
    toggleTodo(todo) {
      this.editing = !this.editing
      this.todoText = todo.title
      console.log(this.editing)
    },
    cancelToggle(todo) {
      this.editing = false
    },
  },
}
</script>

<style>
.cut-text {
  white-space: nowrap;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
