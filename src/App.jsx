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
  //Receive an array of books and an id that is used to filter the data from API.
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

  //It's used to update the Shelf based on the API method.
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

  //Get all the data from the API and set the state.
  getAllBooks(bookId){
    BooksAPI.getAll().then(result => 
      this.setShelf(result, bookId))
    .catch((e) =>{
      console.log("Error", e);
    });
  }

  //When the component mount the data will be called
  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    //It'll render the Library Component if the path match with '/'.
    return (
      <div>  
        <Route exact path = '/' render = {() => (
          <Library
          updateBookShelf = {this.updateBookShelf} 
          books = {{currently: this.state.currently, want :this.state.want, read: this.state.read}} />
      )}></Route>
          <Route path = '/search' render = {() => (
            <Search 
            updateBookShelf = {this.updateBookShelf} />
      )}/>
      </div>
      );
    //It'll render the Search Component if the path match with '/search'.
  }
}

export default App;
