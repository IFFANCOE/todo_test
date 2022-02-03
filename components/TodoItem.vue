<template>
  <div>
    <div class="todo-item flex justify-between">
      <span v-if="!editing && !isdelete" class="cut-text self-center">{{
        todo.title
      }}</span>
      <!-- <input
        v-else
        v-model="todoText"
        type="text"
        @keypress.enter="updateTodoIndex(todo)"
        class="border "
      /> -->
      <input
        v-else
        type="text"
        v-model="todoText"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-3/5 sm:text-sm border-gray-300 px-4 rounded-full p-1"
        @keypress.enter="updateTodoIndex(todo)"
      />
      <div class=" ">
        <!-- <button
          class="self-center transition-all duration-300 ease-in hover:text-yellow-400"
          v-if="editing && isdelete"
          @click="updateTodoIndex(todo)"
        >
          Update
        </button> -->

        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-200 transition-all duration-300 ease-in hover:text-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          v-if="editing && isdelete"
          @click="updateTodoIndex(todo)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-repeat mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
            />
            <path
              fill-rule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            />
          </svg>
          Update
        </button>

        <!-- <button
          class="self-center transition-all duration-300 ease-in hover:text-blue-600"
          v-if="editing && isdelete"
          @click="cancelToggle(todo)"
        >
          Cancel
        </button> -->
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-300 transition-all duration-300 ease-in hover:text-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          v-if="editing && isdelete"
          @click="cancelToggle(todo)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle mr-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          Cancel
        </button>
        <!-- <button
          class="transition-all duration-300 ease-in hover:text-yellow-400"
          v-else
          @click="toggleTodo(todo)"
        >
          Edit
        </button> -->
        <div v-else>
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-200 transition-all duration-300 ease-in hover:text-yellow-600 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="toggleTodo(todo)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
              />
            </svg>
            Edit
          </button>

          <!-- <button
          class="transition-all duration-300 ease-in hover:text-red-500"
          @click="removeTodo(todo.id)"
        >
          Delete
        </button> -->
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-300 transition-all duration-300 ease-in hover:text-red-600 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="removeTodo(todo.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash mr-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  props: ['todo'],
  data() {
    return {
      editing: false,
      isdelete: false,
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
    removeTodo(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You want be delete this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
          await this.$store.dispatch('removeToDoListFromAPI', id)
          await this.getTask()
        }
      })
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
      // if
      this.upTodo(newTodo)
      console.log(newTodo.title)
      if (newTodo.title != '') {
        console.log('Ok')
        await this.$store.dispatch('updateToDoListFromApi', [
          ...this.stateTodos,
        ])
      } else {
        Swal.fire('Please fill out', '', 'question')
        // alert('Input Emtry')
        return
      }

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })
      Toast.fire({
        icon: 'success',
        title: 'Update success',
      })

      // this.$store.getters['allTodos']
      this.editing = false
      this.isdelete = false
    },
    toggleTodo(todo) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })
      Toast.fire({
        icon: 'info',
        title: 'You editing',
        iconColor: 'orange',
      })
      this.editing = !this.editing
      this.isdelete = !this.isdelete
      this.todoText = todo.title
      console.log(this.editing)
      console.log(this.isdelete)
    },
    cancelToggle(todo) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })
      Toast.fire({
        icon: 'info',
        title: 'Cancle',
        iconColor: 'red',
      })
      this.editing = false
      this.isdelete = false
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
