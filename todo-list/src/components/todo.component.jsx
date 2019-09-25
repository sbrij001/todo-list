import React from 'react';

class Todo extends React.Component{
  handleClick = (props) => {
    this.props.deleteItem(this.props.id)
  }
  render(){
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
