import React from 'react'

const TodoForm = (props) => {
    const { handleChange, handleSubmit, value, tasksLeft} = props 

    return(
        <div>
            <form>
                <label htmlFor='todo'>
                    <input 
                        placeholder='new task'
                        name='todo'
                        value={value}
                        onChange={handleChange}
                        type='text'
                        id='todo'
                    />
                </label>
                <button onClick={handleSubmit}>Add NewTask</button>
                <button onClick={tasksLeft}>Delete Completed</button>
            </form>
        </div>
    )
    
}

export default TodoForm