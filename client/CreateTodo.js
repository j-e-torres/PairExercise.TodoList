import React, {Component} from 'react';
import axios from 'axios'
import TodoForm from './TodoForm'

export default class CreateTodo extends Component {
  render () {
    return (
      <TodoForm addTodo={this.props.addTodo} />
    )
  }
}
