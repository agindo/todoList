import React, { Component } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import AddTodo from './components/AddTodo';
import axios from "axios";
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    isLoading: false
  }

  componentDidMount() {
    const context = this
    this.setState({ isLoading: true }, () => 
      // axios.get("http://localhost/todos")
      axios.get("https://mighty-shore-83113.herokuapp.com/todos")
      .then(res => 
        context.setState({
          todos: res.data,
          isLoading: false
        })
      )
    )
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo._id === id) {
          todo.status = !todo.status;
        }
        return todo;
      })
    })
  }

  AddTodo = kegiatan => {
    // axios.post("http://localhost/todos", { kegiatan, status: false })
    axios.post("https://mighty-shore-83113.herokuapp.com/todos", { kegiatan, status: false })
    .then(res => 
      this.setState({ 
        todos: [...this.state.todos, res.data] 
      })  
    )
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo AddTodo={ this.AddTodo } />{" "}
          { this.state.isLoading? <div>Lagi Loading ...</div> : <Todo todos={this.state.todos} markComplete={this.markComplete}/> }
        </div>{" "}
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h3>Hello World</h3>
//       </header>
//       <Header />
//     </div>
//   );
// }

export default App;
