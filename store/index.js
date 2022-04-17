export const state = () => ({
  tasks: [],
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push({ content: task, done: false });
    // the same thing
    // state.tasks = [{ content: task, done: false }, ...state.tasks];
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  TOGGLE_TASK(_, task) {
    task.done = !task.done;
  },
};
