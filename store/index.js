export const state = () => ({
  todos: [],
})
export const mutations = {
  // add_todo(state, todo) {
  //   state.todos.push(todo)
  //   console.log(todo)
  // },
  delete_todo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id != id)
  },
  UPDATE_TODO(state, todo) {
    let arrTodo = []
    arrTodo = [...state.todos]
    console.log('is', todo)
      let newTodo = arrTodo.map((thing) => {
        if (todo.id === thing.id) {
          return {
            id: thing.id,
            title: todo.title,
          }
        } else {
          return thing
        }
      })

    state.todos = [...newTodo]
    // console.log(newTodo)
  },
  SET_TODO_FROM_API(state, data) {
    console.log('data: ', data)
    if (data !== null && data !== '') {
      const mutantData = data.map((thing) => {
        return (thing = {
          id: thing.task_id,
          title: thing.title,
        })
      })
      state.todos = mutantData
    }
  },
  // SET_TODOUPDATE_FROM_API(state , todo){

  // }
}
export const actions = {
  // addTodo(state, todo) {
  //   state.commit('add_todo', todo)
  // },
  // deleteTodo(state, id) {
  //   state.commit('delete_todo', id)
  // },
  updateTodo(state, todo) {
    state.commit('UPDATE_TODO', todo)
    // console.log("Go to mutations update_todo");
  },
  setToDoListFromApi(state, todo) {
    console.log('setToDoListFromLocal', todo)
    const data = todo
    const newTodo = data.map((thing) => {
      return (thing = {
        title: thing.title,
      })
    })
    this.$axios
      .$post(
        `http://localhost:8080/api/dashboard/14`,
        { data: newTodo },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
          },
        }
      )
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        alert('Add or Update Not Complete' + error)
      })
  },
  updateToDoListFromApi(state, todo) {
    console.log('setToDoListFromApi', todo)
    const data = todo
    this.$axios
      .$post(
        'http://localhost:8080/api/dashboard/14',
        { data: data },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
          },
        }
      )
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        alert('Add or Update Not Complete' + error)
      })
  },

  getToDoListFromAPI(state, todo) {
    this.$axios
      .$get(`http://localhost:8080/api/dashboard/14`, {
        headers: {
          Authorization: 'Bearer aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        },
      })
      .then((res) => {
        state.commit('SET_TODO_FROM_API', res.data)
      })
  },
  async removeToDoListFromAPI(state, id) {
    // console.log("remove");
    await this.$axios.$delete(`http://localhost:8080/api/dashboard/${id}`, {
      headers: {
        Authorization: `Bearer aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
      },
    })
  },
}

export const getters = {
  allTodos: (state) => {
    console.log('Getter alltodo ', state.todos)
    return state.todos
  },
}
