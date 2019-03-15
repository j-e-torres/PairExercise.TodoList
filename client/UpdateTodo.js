import React, {Component} from 'react'
import TodoForm from './TodoForm';
import axios from 'axios'

export default class UpdateTodo extends Component {
  constructor(){
    super()
  }

  handleChange = ({target}) => {
    // console.log(target)
    this.setState({[target.name]: target.value})
    }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('this is the state', this.state);
    axios.put('/api/todos/:todoId')
    
        .then((response) => response.data)
        .then((data) => console.log(data))
        .catch(err => console.log(err));
    }
  render () {
    const {updateTodo} = this.props
    return (
      <TodoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    )
  }
}
