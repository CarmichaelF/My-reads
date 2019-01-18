import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Shelf from './Shelf';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchedBooks: null
    };
  }

  render() {
    return <div>
    <div className="input-group input-group-lg">
    <div className="input-group-prepend">
    <Link className="input-group-text" to = '/'><i className ="fas fa-arrow-left"></i></Link>
    </div>
    <input onChange = {(event) => this.searchBook(event.target.value)} placeholder = "Search for a title or an Author..." type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
    
    </div>
    <Shelf title = "Results" books = {this.state.searchedBooks}></Shelf>
    </div>
  }

  searchBook(terms){
    BooksAPI.search(terms).then((result) =>{
      if(result){
        this.setState({searchedBooks: result});
      }
    }).catch((e) =>{
      console.log("Error", e);
    });
  }
}

export default Search;
