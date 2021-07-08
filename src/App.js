import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const workTodo = [
  {
    task: 'Wash Dishes',
    id: 483746,
    finished: false
  },
  {
    task: 'Feed Cat',
    id: 228374,
    finished: false
  },
  {
    task: 'Walk Dogs',
    id: 420699,
    finished: false
  },
  {
    task: 'Clean Room',
    id: 620699,
    finished: false
  },
  {
    task: 'Buy Food',
    id: 983746,
    finished: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      worktodo:workTodo
    }
  }

  handleAddTodo = (task) => {
    const todo = {
      task: task,
      id: this.state.worktodo.length,
      finished: false
    }

    const newWorktodo = [...this.state.worktodo, todo]
    this.setState({
      worktodo: newWorktodo
    })
  }

  handleTodoToggle = (todoId) => {
    this.setState({
      worktodo: this.state.worktodo.map(todo => {
        if(todoId === todo.id){
          return {
            ...todo,
            finished: todo.finished
          };
        }
        return todo;
      })
    })
  }

  handleClear = () => {
    const newWorktodo = this.state.worktodo.filter(todo => {
      return !todo.finished
    })

    this.setState({
      worktodo: newWorktodo
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddTodo={this.handleAddTodo}/>
        <TodoList handleClear={this.handleClear} handleTodoToggle={this.handleTodoToggle} worktodo={this.state.worktodo}/>
      </div>
    );
  }
}

export default App;
