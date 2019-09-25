import React from 'react';

class NewTodoForm extends React.Component{
  state={
    name: "hi"
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createTodo(this.state)
    this.setState({
      name: ""
    })
  }

  render(){
    return(
      <div>
        <h4>New Todo</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='todo'
            value={this.state.todo}
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
