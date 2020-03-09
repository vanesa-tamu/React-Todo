import React from 'react'

const TodoForm = (props) => {
    const { handleChange, handleSubmit, todo} = props 

    return(
        <div>
            <form >
                <label htmlFor='todo'>
                    <input 
                        placeholder='new task'
                        name='todo'
                        value={todo}
                        onChange={handleChange}
                        type='text'
                        id='todo'
                    />
                </label>
                <button onClick={handleSubmit}>Add NewTask</button>
                <button>Delete Completed</button>
            </form>
        </div>
    )
    
}

export default TodoForm