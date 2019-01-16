import React, { Component } from 'react';
import Library from './Components/Library';
import * as BooksAPI from './BooksAPI'

class App extends Component {

  constructor(props){
    super(props);
    this.state = { currently: null,
      want: null,
      read: null};
  }

  render() {
    return (
      <div>
        <div className = "text-center">
      <header><h1>Welcome to MyReads!</h1></header>
        <div className = "row pt-3">
          <div className = "col-md-6">
          <Library title = "Currently Reading" books = {this.state.currently}></Library>
          </div>
          <div className = "col-md-6">
          <Library title = "Want to Read" books = {this.state.want}></Library>
          </div>
          <div className = "col-md-6">
          <Library title = "Read" books = {this.state.read}></Library>
          </div>
        </div>
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

  getAllBooks(){
    return BooksAPI.getAll();
  }
  componentDidMount() {
    this.getAllBooks()
    .then(result => 
      this.setShelf(result))
    .catch((e) =>{
      console.log("Error", e);
    })
    
  }
  
}

export default App;
