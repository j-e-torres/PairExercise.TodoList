import React, {Component} from 'react';
import axios from 'axios'
import TodoForm from './TodoForm'

export default class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      taskName: '',
      assignee: '',
    }
  }
  handleChange = ({target}) => {
    // console.log(target)
    this.setState({[target.name]: target.value})
    }

  handleSubmit = (e) => {
  e.preventDefault();
  // console.log('this is the state', this.state);
  axios.post('/api/todos', {...this.state})
      .then((response) => response.data)
      .then((data) => this.props.addTodo(data))
      .catch(err => console.log(err));
  }

  render () {
    return (
      <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    )
  }
}
