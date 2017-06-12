import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <h1>C&A Consulting</h1>
          </header>
          <nav>
              <a href="#section1">Section 1</a> |
              <a href="#section2">Section 2</a> |
              <a href="#section3">Section 3</a>
          </nav>

          <section id="section1">
              Section 1
          </section>
          <section id="section2">
              Section 2
          </section>
          <section id="section3">
              Section 3
          </section>

          <footer>
              <p>Contact information: </p>
              <a href="mailto:cindy.xn.han@gmail.com">cindy.xn.han@gmail.com</a>
              <p> and </p>
              <a href="mailto:alex.david.henry@gmail.com">alex.david.henry@gmail.com</a>
          </footer>
      </div>
    );
  }
}

export default App;
