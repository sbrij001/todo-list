import React from 'react';
import NewTodoForm from './new-todo-form.component';
import Todo from './todo.component';

class TodoList extends React.Component{
  state={
    todos: [{name: 'walk dog'}]
  }

  create = (todo) => {
      this.setState({
        todos: [...this.state.todos, todo]
      })
  }

  render(){
    const newTodo = this.state.todos.map(todo => {
      return <Todo key={1} name={todo.name} />
    })

    return(
      <div>
        <NewTodoForm createTodo={this.create}/>
        <ul>{newTodo}</ul>
      </div>
    )
  }
}
export default TodoList;
