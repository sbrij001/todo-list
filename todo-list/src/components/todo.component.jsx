import React from 'react';

class Todo extends React.Component{
  handleClick = (event) => {
    console.log(event.target.value)

  }
  render(){
    console.log(this.props)
    return(
      <div>
          <li>{this.props.name}</li>
          <button>Edit</button>
          <button onClick={this.handleClick}>Delete</button>
      </div>
    )
  }
}
export default Todo;
