import React from "react";


class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: "",
        };
    }

    handleChanges = (e) => {
        this.setState({
          inputValue: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.inputValue);
        this.setState({
          inputValue: "",
        });
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChanges}
                type="text"
                name="item"
                value={this.state.inputValue}
              />
              <button>Add Todo</button>
            </form>
          );
    }


};

export default TodoForm;