import React, { Component } from 'react';

class Book extends Component {

  render() {
    return (
        <div className = "book">
        <div>
            <img src = {this.props.src}  className = "card-img-top shadow" alt="book"></img>
            
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle shadow" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                <button onClick = {() => this.moveTo('C')} className="dropdown-item" type="button">Currently Reading</button>
                <button onClick = {() => this.moveTo('W')} className="dropdown-item" type="button">Want to Read</button>
                <button onClick = {() => this.moveTo('R')} className="dropdown-item" type="button">Read</button>
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

  moveTo(choose){
    const book = this.props;
    console.log(book);
    switch(choose){
        case 'C':
            this.props.updateBook(book, 'currentlyReading');
            console.log('C');
        break;
        case 'W':
            this.props.updateBook(book, 'wantToRead');
            console.log('W');
        break;
        case 'R':
            this.props.updateBook(book, 'read');
            console.log('R');
        break;
        default:
        console.log(`${choose} isn't a valid argument!`);
    }
  }
}

export default Book;
