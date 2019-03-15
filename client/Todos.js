import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'
import UpdateTodo from './UpdateTodo';

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.destroyTodo = this.destroyTodo.bind(this);
  }

  addTodo (data) {
    const todos = this.state.todos;
    todos.push(data)
    this.setState({todos})
  }

  destroyTodo (id) {
    axios.delete(`/api/todos/${id}`)
      .then(() => this.componentDidMount())
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
          this.state.todos.map(todo => <Todo destroyTodo={this.destroyTodo} todo={todo} key={todo.id} />)
        }
        
      </div>
    )
  }
}
