import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: newTask }) => {
      tasks.push(newTask);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    setAllFalse: ({ tasks }) => {
      for (const task of tasks) {
        task.done = false;
      }
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  removeAllTasks,
  setAllDone,
  setAllFalse,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTasksDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectIsEveryTasksFalse = (state) =>
  selectTasks(state).every(({ done }) => !done);
export default tasksSlice.reducer;
