import { useState, useEffect } from "react";

export const UseTasks = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {
    //  tasks,
    //  hideDone,
    //  toggleHideDone,
    // removeTask,
    // toggleTaskDone,
    // setAllDone,
    // addNewTask,
  };
};
