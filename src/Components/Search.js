import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {

  render() {
    return <div className="input-group input-group-lg">
    <div className="input-group-prepend">
    <Link className="input-group-text" to = '/'><i className ="fas fa-arrow-left"></i></Link>
    </div>
    <input onChange = {(event) => this.props.searchBook(event.target.value)} placeholder = "Search for a title or an Author..." type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
    </div>
  }
}

export default Search;
