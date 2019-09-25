import React from 'react';

class Todo extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
          <li>{this.props.name}</li>
          <button>Edit</button>
          <button>Delete</button>
      </div>
    )
  }
}
export default Todo;
