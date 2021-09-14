import React from "react";

class FormInsert extends React.Component {
  state = {
    name: "",
  };

  onChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  addNewTask = (event) => {
    event.preventDefault();

    this.props.addTask({
      name: this.state.name,
      completed: false,
    });

    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.addNewTask}>
        <div className="input">
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Input to do"
          />
          <svg
            onClick={this.addNewTask}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 26 25"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </div>
      </form>
    );
  }
}

export default FormInsert;
