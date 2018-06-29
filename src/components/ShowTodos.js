import React from 'react'
import Todo from './Todo'

const ShowTodos = props => {
  const { todos } = props
  return (
    <ul className='ShowTodos'>
      {todos.map((todo, i) => (
        <Todo description={todo} index={i} key={i} />
      ))}
    </ul>
  )
}

export default ShowTodos
