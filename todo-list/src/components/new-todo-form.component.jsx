import React from 'react';

class NewTodoForm extends React.Component{
  state={
    todo: ""
  }
  render(){
    return(
      <div>
        <h4>New Todo</h4>
        <form>
          <input
            type='text'
            name='todo'
            value={this.state.todo}
            placeholder='New Todo'
            onChange={null}
          />
          <button>Add Todo!</button>
        </form>
      </div>
    )
  }
}
export default NewTodoForm;
