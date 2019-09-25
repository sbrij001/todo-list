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

  delete = (id) => {
    this.setState({
      todos: this.state.filter( filter => this.state.todos.id !== id )
    })

  }

  render(){
    const newTodo = this.state.todos.map(todo => {
      return (
          <Todo
            key={1}
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
