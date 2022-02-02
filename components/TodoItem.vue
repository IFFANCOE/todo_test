<template>
  <div>
    <div class="todo-item flex justify-between">
      <span v-if="!editing" class="cut-text">{{ todo.title }}</span>
      <input
        v-else
        v-model="todoText"
        type="text"
        @keypress.enter="updateTodoIndex(todo)"
        class="border"
      />
      <div class=" ">
        <button
          class="transition-all duration-300 ease-in hover:text-yellow-400"
          v-if="editing"
          @click="updateTodoIndex(todo)"
        >
          Update
        </button>
        <button
          class="transition-all duration-300 ease-in  hover:text-blue-600 "
          v-if="editing"
          @click="cancelToggle(todo)"
        >
          Cancel
        </button>
        <button
          class="transition-all duration-300 ease-in  hover:text-yellow-400 "
          v-else
          @click="toggleTodo(todo)"
        >
          Edit
        </button>
        <button
          class="transition-all duration-300 ease-in hover:text-red-500"
          @click="removeTodo(todo.id)"
        >
          delete
        </button>
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
      disabled: false,
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

    async updateTodoIndex(todo) {
      let newTodo = {
        id: todo.id,
        title: this.todoText,
      }
      this.upTodo(newTodo)

      // let updateTodos = this.stateTodos.map((thing, index) => {
      // console.log("index: ",index);
      // console.log("thing: ",thing);
      //   let newUpdataTodos = {
      //     id: thing.id,
      //     title: thing.title,
      //   }
      //   console.log('newUpdataTodos: ', newUpdataTodos)
      // })
      // console.log("4444: ",[...this.stateTodos] );

      await this.$store.dispatch('updateToDoListFromApi', [...this.stateTodos])

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
.todo-item {
  transition: color 0.12s, transform 0.57s;
  transition-timing-function: ease-out;
  padding: 0.3em 0.5em;
  box-sizing: border-box;
  border: 1px solid #0000;
}
.todo-item:hover {
  color: rgb(49, 38, 38);
  border-color: rgb(255, 209, 6);
  transform: translateX(0.5em) scaleX(0.98);
  cursor: pointer;
}
</style>
