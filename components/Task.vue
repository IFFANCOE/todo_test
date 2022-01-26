<template>
  <div :class="`task ${task.done ? 'is-complete' : ''} flex justify-between`">
    <div v-if="task.edit" class="content">
      <input v-model="task.content" />
      <!-- state -->
    </div>
    <div v-else>
      {{ task.content }}
    </div>
    <div class="button">
      <button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
      <button @click="toggleEdit(index)" class="delete">Edit</button>
      <button @click="removeTask" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task', 'index'],
  data() {
    return {
      // inputText: this.$store.getters['/getterEditTask']
      a: this.$store.getters['/getterEditTask']
    }
  },
  computed: {
    // getEdit() {
    //   return this.$store.getters['/getterEditTask']
    // },iaf
  },
  methods: {
    toggleDone() {
      this.$store.dispatch('todolist/toggle_task', this.task)
      //   this.$store.commit('TOGGLE_TASK', this.task)
      console.log(this.index)
    },
    removeTask() {
      this.$store.dispatch('todolist/remove_task', this.task)
    //   this.$store.commit('REMOVE_TASK', this.task)
    },
    toggleEdit(index) {
      //   console.log(getEdit)
      this.$store.dispatch('todolist/edit_task', index)
    //   this.$store.commit('EDIT_TASK', index)
    },
  },
}
</script>

<style>
.is-complete {
  text-decoration: line-through;
}
</style>
