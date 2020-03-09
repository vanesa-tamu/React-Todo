import React from 'react'

const Todo = (props) => {
    const { task } = props
    return(
        <div>
            <h1>{task.task}</h1>
        </div>
    )
}

export default Todo