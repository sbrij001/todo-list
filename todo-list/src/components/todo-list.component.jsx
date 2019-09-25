import React from 'react';
import NewTodoForm from './new-todo-form.component';
import Todo from './todo.component';

class TodoList extends React.Component{
  state={
    todos: []
  }

  create = (todo) => {
      this.setState({
        todos: [...this.state.todos, todo]
      })
  }

  delete = (id) => {
    this.setState({
      todos: this.state.todos.filter( todo => todo.id !== id )
    })
  }

  edit = (todo) => {
    this.setState({
      todos: []
    })
  }

  render(){
    const newTodo = this.state.todos.map(todo => {
      return (
          <Todo
            key={todo.id}
            name={todo.name}
            id={todo.id}
            deleteItem={this.delete}
            />
      )
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
