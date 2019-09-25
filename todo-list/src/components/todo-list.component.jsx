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

  edit = (id, newTask) => {
    const updatedTodos =  this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, task: newTask}
      }else {
        return todo
      }
    })
    this.setState({
      todos: updatedTodos
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
            updatedTodos={this.edit}
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
