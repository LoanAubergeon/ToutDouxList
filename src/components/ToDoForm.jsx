
import React from 'react'

const ToDoForm = ({addTodo}) => {
    let input;
        return (
            <div class="ui action input">
                <input
                    type="text"
                    placeholder="Add todo" 
                    ref={node => {
                        input = node;
                    }}
                />
                <button 
                    class="ui button"
                    onClick={() => {
                        addTodo(input.value);
                        input.value = '';
                    }}>
                    Add
                </button>
        </div>
    )
}

export default ToDoForm;