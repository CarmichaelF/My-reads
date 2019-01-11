import React, { Component } from 'react';
import Book from './Components/Book';

class App extends Component {
  render() {
    return (
      <div className = "text-center">
      <header><h1>Welcome to MyReads!</h1></header>
      <div className = "row">
      <div className = "col-md-6">
        <Book></Book>
        <Book></Book>
      </div>
      <div className = "col-md-6">
        <Book></Book>
        <Book></Book>
      </div>
      </div>
      
      </div>
      );
  }
}

export default App;
