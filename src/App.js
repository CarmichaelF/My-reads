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
      <div>
        <div className = "text-center">
      <header><h1>Welcome to MyReads!</h1></header>
        <div className = "row pt-3">
          <div className = "col-md-6">
          <Library title = "Currently Reading" books = {this.state.books}></Library>
          </div>
          <div className = "col-md-6">
          <Library title = "Want to Read" books = {this.state.books}></Library>
          </div>
        </div>
      </div>
      
      </div>
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
