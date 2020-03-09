import React from 'react'

class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            task: ''
        }
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor='todo'>
                        <input 
                            placeholder='new task'
                            name='task'
                            value={this.state.task}
                            type='text'
                            id='todo'
                        />
                    </label>
                    <button>Add NewTask</button>
                </form>
                <button>Delete Completed</button>
            </div>
        )
    }
}

export default TodoForm