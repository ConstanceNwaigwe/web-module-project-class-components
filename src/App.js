import React from 'react';


const thingsTodo = [
  {
    work: "Cut the grass",
    id: 123,
    completed: false,
  },
  {
    work: "Wash the dishes",
    id: 223,
    completed: false,
  },
  {
    work: "Do the laudry",
    id: 323,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      thingsTodo: thingsTodo
    };
  }

  handleToggle = (id) =>{
    this.setState({
      thingsTodo: this.state.thingsTodo.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  handleAdd = (work) => {
    const item = {
      work: work,
      id: this.state.thingsTodo.length,
      completed: false,
    };

    const newThingsTodo = [...this.state.thingsTodo, item];
    this.setState({
      thingsTodo: newThingsTodo,
    });

  };

  handleComplete = () => {
    const newThingsTodo = this.state.thingsTodo.filter((item) => {
      return !item.completed;
    });

    this.setState({
      thingsTodo: newThingsTodo,
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
