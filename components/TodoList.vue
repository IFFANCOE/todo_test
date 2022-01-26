<template>
  <div>
    {{ allTodos }}
    <!-- {{ todos }} -->
    <!-- {{ tests }} -->
    <div
      class="flex flex-col justify-center"
      v-for="(todo, index) in allTodos"
      :key="index"
      :index="todo.id"
    >
      <TodoItem :todo="todo" />
    </div>
    <input type="text" v-model="test" />
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
