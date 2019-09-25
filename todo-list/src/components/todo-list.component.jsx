import React from 'react';
import NewTodoForm from './new-todo-form.component';
import Todo from './todo.component';

class TodoList extends React.Component{
  state={
    todos: []
  }

  render(){
    return(
      <div>
        <NewTodoForm/>
        <Todo/>
      </div>
    )
  }
}
export default TodoList;
