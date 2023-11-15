import React from 'react'

const TodoFilter = () => {
  return (
    <select className="select" aria-label="Default select example">
    <option value="1">All</option>
    <option value="2">Completed</option>
    <option value="3">Not Completed</option>
    </select>
  )
}

export default TodoFilter