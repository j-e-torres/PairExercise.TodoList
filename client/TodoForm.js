import React, {Component} from 'react';

const TodoForm = (props) => {
        return (
        <form>
          <label htmlFor="taskName"> taskName: </label>
          <input name="taskName" type="text" onChange={props.handleChange} />

          <label htmlFor="assignee"> assignee: </label>
          <input name="assignee" type="text" onChange={props.handleChange} />

          <button type="submit" onClick={props.handleSubmit}> Submit</button>

        </form>
        )
}


export default TodoForm;
