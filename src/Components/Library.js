/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Book from './Book';
class Library extends Component {

  render() {
    let books = this.props.books;
    return (
        <div className = "text-center">
      <header><h1>Welcome to MyReads!</h1></header>
        <div className = "row pt-3">
          <div className = "col-md-12">
          {
              books !== null ?
              books.foreach((element) =>{
                <Book src = {element.imageLinks.thumbnail}
                ></Book>
              }): null
              /*(this.props.books !== null) ? 
          <Book src = {this.props.books[0].imageLinks.thumbnail}>
          </Book> : null*/
        }
          </div>
        </div>
      </div>
      );
  }
}

export default Library;
