import React from 'react'
import PropTypes from 'prop-types'

const Todo = props => {
  const { description, index } = props
  return (
    <li key={description}>
      {description}
    </li>
  )
}

Todo.propTypes = {
  description: PropTypes.string.isRequired
}

export default Todo
