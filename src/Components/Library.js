/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class Library extends Component {

  //Use the Shelf Component to load the HTML needed.
  render() {
    return <div>
      <header><h1>Welcome to MyReads!</h1></header>  
        <Shelf updateBook = {this.props.updateBookShelf} title = "Currently Reading" books = {this.props.books.currently}></Shelf>
        <Shelf updateBook = {this.props.updateBookShelf} title = "Want to Read" books = {this.props.books.want}></Shelf>
        <Shelf updateBook = {this.props.updateBookShelf} title = "Read" books = {this.props.books.read}></Shelf>
        <Link className = "btn-search" to = '/search'><i className = "fas fa-search"></i></Link>
    </div>
  }
}

export default Library;
