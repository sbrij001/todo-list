import React from 'react';
import uuid from 'uuid/v4';

class NewTodoForm extends React.Component{
  state={
    name: ""
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {...this.state, id: uuid()}
    this.props.createTodo(newTodo)
    this.setState({
      name: ""
    })
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <h4>New Todo</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            value={this.state.name}
            placeholder='New Todo'
            onChange={this.onChange}
          />
          <button>Add Todo!</button>
        </form>
      </div>
    )
  }
}
export default NewTodoForm;
