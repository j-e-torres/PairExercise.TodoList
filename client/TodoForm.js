import React, {Component} from 'react';
import axios from 'axios';

class TodoForm extends Component {
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

    render() {
        return (
        <form>
        <label htmlFor="taskName"> taskName: </label>
        <input name="taskName" type="text" onChange={this.handleChange} />

        <label htmlFor="assignee"> assignee: </label>
        <input name="assignee" type="text" onChange={this.handleChange} />

        <button type="submit" onClick={this.handleSubmit}> Submit</button>

        </form>
        )
    }
}


export default TodoForm;
