import React, { Component } from 'react';
import Library from './Components/Library';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  constructor(props){
    super(props);
    this.updateBookShelf = this.updateBookShelf.bind(this);
    this.state = { currently: null,
      want: null,
      read: null};
  }

  render() {
    return (
      <div>
        <div>
      <header><h1>Welcome to MyReads!</h1></header>
          <Library updateBook = {() => this.updateBookShelf} title = "Currently Reading" books = {this.state.currently}></Library>
          <Library updateBook = {() => this.updateBookShelf} title = "Want to Read" books = {this.state.want}></Library>
          <Library updateBook = {() => this.updateBookShelf} title = "Read" books = {this.state.read}></Library>
      </div>
      </div>
      );
  }

  setShelf(books){
    let currently, want, read;
    if(books !== null){
        currently = books.filter((element) =>{
        return element.shelf === "currentlyReading";
      });
        want = books.filter((element) =>{
        return element.shelf === "wantToRead";
      });
        read = books.filter((element) =>{
        return element.shelf === "read";
      });
      this.setState({currently, want, read});
    }
  }

  updateBookShelf(bookId, shelf){
    BooksAPI.update(bookId, shelf)
    .then(() =>{
      this.getAllBooks();
    })
    .catch((e) =>{
        console.log("Error", e);
    });
  }

  getAllBooks(){
    BooksAPI.getAll().then(result => 
      this.setShelf(result))
    .catch((e) =>{
      console.log("Error", e);
    });
  }

  printAllBooks(){
    BooksAPI.getAll().then(result => 
      console.log("All books: ", result))
    .catch((e) =>{
      console.log("Error", e);
    });
  }
  componentDidMount() {
    this.getAllBooks();
    this.printAllBooks();
  }
  
}

export default App;
