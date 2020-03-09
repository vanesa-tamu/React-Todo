import React from 'react'

const Todo = (props) => {
    const { task, cross } = props
    return(
        <div
        style={task.completed ? { textDecoration: 'line-through' } : null}
        onClick={() => cross(task.id)}
        >
            <h1>{task.task}</h1>
        </div>
    )
}

export default Todo