import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow',
  },
  {
    id: 4,
    title: 'Drop the parcel at the nearby centre',
  },
  {
    id: 5,
    title: 'Order fruits and vegetables for the week',
  },
  {
    id: 6,
    title: 'Attend the meeting at 5 PM',
  },
  {
    id: 7,
    title: 'Finish the pending tasks at office',
  },
  {
    id: 8,
    title: 'Plan the trip for next weekend',
  },
]

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)
    this.setState({todosList: updatedTodosList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
