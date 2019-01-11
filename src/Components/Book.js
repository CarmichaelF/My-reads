import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
        <div className = "book">
        <div>
            <img src = {require("../Images/harry.jpg")}  className = "card-img-top" alt="book"></img>
            
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">Action</button>
                <button class="dropdown-item" type="button">Another action</button>
                <button class="dropdown-item" type="button">Something else here</button>
            </div>
        </div>

        </div>
            <div className = "card-body">
                <h5 className = "card-title">Book title</h5>
                <p className = "card-text">Book author</p>
            </div>
        </div>
    );
  }
}

export default Book;
