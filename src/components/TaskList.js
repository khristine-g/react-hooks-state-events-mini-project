import React, { useState } from "react";
import Task from "./Task";
import { TASKS } from "../data";

function TaskList() {
  const [tasks, setTasks] = useState(TASKS);

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
