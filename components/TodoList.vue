<template>
  <div>
    <div
      class="flex flex-col justify-center mt-4 "
      v-for="(todo, index) in allTodos"
      :key="index"
      :index="todo.id"
    >
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      test: '',
    }
  },
  methods: {},
  computed: {
    ...mapGetters(['allTodos']),

  },
}
</script>

<style></style>
