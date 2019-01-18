/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Book from './Book';

class Shelf extends Component {

  render() {
    const books = this.props.books;
    
    const cmpBooks = books !== null ? books.map((element) =>
        <Book updateBookShelf = {this.props.updateBook} title = {element.title}
        key = {element.id} src = {element.imageLinks.thumbnail}
        author = {this.treatAuthor(element.authors)}
        id = {element.id}></Book>
    ) :"Sorry, this shelf is empty :'(";
    return (
      <div className = "row">
        <div className = "col-md-12">
        <h2 className = "shelf-title pt-4 pb-4">{this.props.title}</h2>
        <div className = "d-flex justify-content-around container text-center">
        {cmpBooks}
        </div>
        </div>
      </div>
      );
  }

  treatAuthor(authors){
    if(authors.length > 1){
        return authors.map((author) => author + ' ');
    }
    return authors;
  }
}

export default Shelf;
