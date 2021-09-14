import React from "react";

class Title extends React.Component {
  render() {
    return (
      <>
        <div class="header">
          <span> Browser </span>
        </div>

        <h1>To-Do List</h1>
        <p>Enter text into the input filed to add items to your list.</p>
        <p>Click the "X" to remove the item from your list.</p>
        <p>Click the item to mark it as complete.</p>
      </>
    );
  }
}

export default Title;
