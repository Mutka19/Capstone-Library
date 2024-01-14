import React, { Component } from 'react';
import Axios from 'axios';
import Book from './Book';
import { v4 as uuidv4 } from 'uuid';
import viewBooks from'./viewBooks.module.css'

export default class AvailableBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:8000/books?avail=true').then((res) => {
      const bookList = res.data;
      this.setState({ bookList });
    });
  }

  render() {
    const { bookList } = this.state;
    return (
      <div className={viewBooks.mainDiv}>
        <h3 className={viewBooks.title}>Available Books</h3>
        { bookList.length > 0?
          bookList.map((title) => (
          <Book key={ uuidv4() } book={ title } />
        )): 'No books are currently available :('}
      </div>
    );
  }
}
