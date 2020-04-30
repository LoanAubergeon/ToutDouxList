
import React from 'react'

import { List } from 'semantic-ui-react'

const ToDo = ({todo, remove}) => {
    return (
        <List.Item>
            <List.Content floated='left'>
                <button class='' onClick={() => {remove(todo.id);}}>x</button>
            </List.Content>
            <List.Content>
                <List.Header>{todo.content}</List.Header>
                
            </List.Content>
            <List.Content floated='right'>
                <button class='' onClick={() => {remove(todo.id);}}>x</button>
            </List.Content>
        </List.Item>
    )
}

export default ToDo;