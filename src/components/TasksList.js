import React from "react";

class TasksList extends React.Component {
  render() {
    let { tasks } = this.props;

    return (
      <div className="list-task">
        {tasks.map((task, index) => (
          <p
            key={index}
            className={task.completed ? "task-completed" : "complete"}
            onClick={() => this.props.toggleCompleted(index)}
          >
            <span>
              {task.name} {task.completed ? "(completed)" : " "}
            </span>
            <button onClick={() => this.props.deleteTask(index)}>X</button>
          </p>
        ))}
      </div>
    );
  }
}

export default TasksList;
