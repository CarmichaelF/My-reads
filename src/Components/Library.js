/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Book from './Book';
class Library extends Component {

  render() {
    const books = this.props.books;
    
    const cmpBooks = books !== null ? books.map((element,i) =>
        <Book title = {element.title}
        key = {i} src = {element.imageLinks.thumbnail}
        author = {this.treatAuthor(element.authors)}></Book>
    ) :null;
    return (
        <div className = "library">
        <h2 className = "pb-3">{this.props.title}</h2>
        {cmpBooks}
        </div>
      );
  }

  treatAuthor(authors){
    if(authors.length > 1){
        return authors.map((author) => ' | ' + author + ' | ');
    }
    return authors;
  }
}

export default Library;
