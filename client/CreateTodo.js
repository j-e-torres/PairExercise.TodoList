import React, {Component} from 'react'

export default class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      taskName: '',
      assignee: '',
    }
  }
  handleChange = ({target}) => {
    this.setState({[target.name]:target.value})
  }
  render () {
    return (
      <form>
        <label htmlFor="taskName"> taskName: </label>
        <input name="taskName" type="text" value="taskName"/>

        <label htmlFor="assignee" onChange={handleChange}> assignee: </label>
        <input name="assignee" type="text" value="assignee"/>

        <button type="submit"> Submit</button>

      </form>
    )
  }
}
