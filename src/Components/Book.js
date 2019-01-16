import React, { Component } from 'react';

class Book extends Component {

  render() {
    return (
        <div className = "book">
        <div>
            <img /*src = {require("../Images/harry.jpg")}*/src = {this.props.src}  className = "card-img-top" alt="book"></img>
            
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button className="dropdown-item" type="button">Currently Reading</button>
                <button className="dropdown-item" type="button">Want to Read</button>
                <button className="dropdown-item" type="button">Read</button>
                <button className="dropdown-item" type="button">None</button>
            </div>
        </div>

        </div>
            <div className = "card-body">
                <h5 className = "card-title">{this.props.title}</h5>
                <p className = "card-text">{this.props.author}</p>
            </div>
        </div>
    );
  }
}

export default Book;
