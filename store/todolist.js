// export const state = () => ({
//   tasks: [],
// })

// export const mutations = {
//   ADD_TASK(state, task) {
//     state.tasks = [...state.tasks, { content: task, done: false, edit: false }]
//     console.log(state.tasks)
//   },
//   REMOVE_TASK(state, task) {
//     state.tasks.splice(state.tasks.indexOf(task), 1)
//   },
//   EDIT_TASK(state, index) {
//     // state.tasks[index].edit = !state.tasks[index].edit
//     const editngTask = state.tasks.map((thing, i) => {
//       if (i === index) {
//         return (thing = {
//           content: thing.content,
//           done: thing.done,
//           edit: !thing.edit,
//         })
//       } else {
//         return (thing = {
//           content: thing.content,
//           done: thing.done,
//           edit: false,
//         })
//       }
//     })
//     state.tasks = editngTask
//     console.log(state.tasks[index].edit)
//   },
//   TOGGLE_TASK(state, task) {
//     task.done = !task.done
//   },
// }

// export const actions = {
//   add_task(state, new_task) {
//     state.commit('ADD_TASK', new_task)
//   },
//   remove_task(state, new_task) {
//     state.commit('REMOVE_TASK', new_task)
//   },
//   edit_task(state, index) {
//     state.commit('EDIT_TASK', index)
//   },
//   toggle_task(state, new_task) {
//     state.commit('TOGGLE_TASK', new_task)
//   },
// }
// export const getters = {
//   gettersTodo: (state) => state.tasks,
// }
