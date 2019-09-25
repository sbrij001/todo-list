import React from 'react';

class Todo extends React.Component{
  state={
    isEditing: false,
    task: this.props.name
  }

  handleClick = (props) => {
    this.props.deleteItem(this.props.id)
  }

  editTask = (event) => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

  }
  render(){
    console.log('todo',this.props)
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.task}
              name='task'
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </div>
      )
    }else {
      result = (
        <div>
            <li>{this.props.name}</li>
            <button onClick={this.editTask}>Edit</button>
            <button onClick={this.handleClick}>Delete</button>
        </div>
      )
    }
    return result
  }
}
export default Todo;
