/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Book from './Book';

class Library extends Component {

  render() {
    const books = this.props.books;
    
    const cmpBooks = books !== null ? books.map((element) =>
        <Book updateBook = {this.props.updateBook()} title = {element.title}
        key = {element.id} src = {element.imageLinks.thumbnail}
        author = {this.treatAuthor(element.authors)}
        id = {element.id}></Book>
    ) :null;
    return (
        <div className = "library">
        <h2 className = "shelf-title pt-4 pb-4">{this.props.title}</h2>
        <div className = "d-flex justify-content-around container text-center">
        {cmpBooks}
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

export default Library;
