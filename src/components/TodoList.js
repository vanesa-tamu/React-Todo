// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, {Component} from 'react'
import Todo from './Todo.js'
const TodoList = (props) => {
    const { tasks } = props
    return(
        <div>
           { tasks.map(task => (
               <Todo task={task}/>
           ))}
        </div>
    )
}
export default TodoList