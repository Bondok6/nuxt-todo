<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        @keypress.enter="addTask"
        placeholder="Add a new task"
      />

      <button @click="addTask">ADD</button>
    </div>

    <div class="tasks">
      <Task
        v-for="task in $store.state.tasks"
        :key="task.content"
        :task="task"
      />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (!this.newTask) return;

      this.$store.commit("ADD_TASK", this.newTask);

      // clear input
      this.newTask = "";
    },
  },
};
</script>
