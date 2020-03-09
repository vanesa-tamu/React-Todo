import React from 'react'

const TodoForm = (props) => {
    const { handleChange, handleSubmit, value} = props 

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
                <button>Add NewTask</button>
                {/* <button>Delete Completed</button> */}
            </form>
            <button>Delete Completed</button>
        </div>
    )
    
}

export default TodoForm