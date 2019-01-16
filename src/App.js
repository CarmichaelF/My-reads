import React, { Component } from 'react';
import Library from './Components/Library';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  constructor(props){
    super(props);
    this.state = { books: null};
  }

  render() {
    return (
      <Library books = {this.state.books}></Library>
      );
  }
  getAllBooks(){
    return BooksAPI.getAll();
  }
  componentDidMount() {
    this.getAllBooks()
    .then(result => this.setState({      
      books: result
    }))
    .catch((e) =>{
      console.log("Error", e);
    })
  }
}

export default App;
