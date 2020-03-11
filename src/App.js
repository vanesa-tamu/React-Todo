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
      tasks: tasks,
      todo: ''
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})

    console.log('changes...', e.target.value)
  }

  handleSubmit = e => {
      e.preventDefault()
      //add state to App state
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            task: this.state.todo,
            id: Date.now(),
            completed: false
          }
        ],
        todo: ''
      })
      console.log('updated state: ', this.state)
  }


  cross = (taskID) => {
    this.setState({
      tasks: this.state.tasks.slice().map(task => {
        if(task.id === taskID){
            task.completed = !task.completed
            console.log('completed task?', task.completed)
            return task
        }
        else{
          return task
        }

      })
    })
  }

  tasksLeft = (e) => {
    e.preventDefault()
    const pendingTasks = this.state.tasks.filter(task => (
      task.completed === false
    ))
    this.setState({ tasks: pendingTasks})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          tasks={this.state.tasks}
          cross={this.cross}
        />
        <TodoForm 
          value={this.state.todo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          tasksLeft={this.tasksLeft}
        /> 
      </div>
    );
  }
}

export default App;
