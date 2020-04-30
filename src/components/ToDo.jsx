
import React from 'react'

const ToDo = ({content, id, remove}) => {
    return (
        <li class="ui message">
            <div class="header">{content}</div>
        </li>
    )
}

export default ToDo;