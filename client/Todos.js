import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
  }

  addTodo (data) {
    const todos = this.state.todos;
    todos.push(data)
    this.setState({todos})
  }

  async componentDidMount () {
    const res = await axios.get('/api/todos')
    this.setState({todos: res.data})
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo addTodo={this.addTodo} />
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} />)
        }
      </div>
    )
  }
}
