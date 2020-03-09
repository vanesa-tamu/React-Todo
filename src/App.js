import React from 'react';
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Learn Python',
    id: 8973,
    completed: false
  },
  {
    task: 'Clean Room',
    id: 343234,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      tasks: tasks
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
