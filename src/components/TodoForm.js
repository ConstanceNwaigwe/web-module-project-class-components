import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            inputValue: ''
        }
    }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
        inputValue: e.target.value
    })
  };


  handleSubmit = e => {
      e.preventDefault()
      this.props.handleAddTodo(this.state.inputValue)
      this.setState({
          inputValue: ''
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input onChange={this.handleChanges} value={this.state.inputValue} type="text" name="todo" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;