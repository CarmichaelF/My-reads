import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Library from './Components/Library';
import Search from './Components/Search';

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
        <Route exact path = '/' render = {() => (
          <Library updateBookShelf = {this.updateBookShelf} 
          books = {{currently: this.state.currently, want :this.state.want, read: this.state.read}}></Library>
      )}></Route>
          <Route path = '/search' render = {() => (
        <Search updateBookShelf = {this.updateBookShelf}/>
      )}/>
      </div>
      );
  }

  setShelf(books, id){
    let currently, want, read;
    if(books !== null){
        currently = books.filter((element) =>{
        return element.shelf === "currentlyReading" && element.id !== id;
      });
        want = books.filter((element) =>{
        return element.shelf === "wantToRead" && element.id !== id;
      });
        read = books.filter((element) =>{
        return element.shelf === "read" && element.id !== id;
      });
      this.setState({currently, want, read});
    }
  }

  updateBookShelf(bookId, shelf){
    if(shelf === 'none'){
      this.getAllBooks(bookId);
    }
    BooksAPI.update(bookId, shelf)
    .then(() =>{
      this.getAllBooks();
    })
    .catch((e) =>{
        console.log("Error", e);
    });
  }

  getAllBooks(bookId){
    BooksAPI.getAll().then(result => 
      this.setShelf(result, bookId))
    .catch((e) =>{
      console.log("Error", e);
    });
  }

  componentDidMount() {
    this.getAllBooks();
  }
}

export default App;
