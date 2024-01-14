import React, { Component } from 'react';
import Axios from 'axios';
import UnavailBook from './UnavailBook';
import { v4 as uuidv4 } from 'uuid';
import viewBooks from './viewBooks.module.css'

export default class UnavailableBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:8000/books?avail=false').then((res) => {
      const bookList = res.data;
      this.setState({ bookList });
    });
  }

  render() {
    const { bookList } = this.state;
    return (
      <div className={viewBooks.mainDiv}>
        <h3 className={viewBooks.title}>Unavailable Books</h3>
        { bookList.length > 0?
        bookList.map((title) => (<UnavailBook key={ uuidv4() } book={ title } />)): 'All Books are available!'
        }
      </div>
    );
  }
}
