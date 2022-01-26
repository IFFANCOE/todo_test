<template>
  <div class="container ">
    <!-- <div class="p-4 m-2 border ">
      <h1 class="">Todo List</h1>
      <input
        class="border"
        type="text"
        v-model="newTask"
        placeholder="Add a new task"
        @keypress.enter="addTask"
      />
      <button @click="addTask">ADD</button>
      <div class="tasks">
        <!-- component -->
        <!-- {{todolist}}
        <Task
          v-for="(task, index) in todolist"
          :key="index"
          :task="task"
          :index="index"
        /> --> 
      <!-- </div>
    </div> -->
    <TodoInput/>
    <TodoList/>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      // newTask: '',
      // update:null,
    }
  },
  methods: {
    // addTask() {
    //   if (this.newTask) {
    //     // this.$store.commit('ADD_TASK', this.newTask)
    //     this.$store.dispatch('todolist/add_task', this.newTask)
    //     this.newTask = ''
    //   }
    // },
   
  },
  computed:{
    // todolist(){
    //   return this.$store.getters['todolist/gettersTodo']
      
    // }
  }
}
</script>

<style>
.container {
	display: block;
	width: 400px;
	margin: 10px auto 100px;
	background-color:#fff;
	padding:0px 10px 10px 10px;
	border-radius:10px
}
</style>