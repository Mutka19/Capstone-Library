import React, { Component } from 'react';
import Axios from 'axios';
import Book from './Book';
import checkBooks from './checkBooks.module.css'


export default class CheckOutBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      checkedBooks: {},
      name: 'Enter name here'
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:8000/books?avail=true').then((res) => {
      const bookList = res.data;
      const checkedBooks = bookList.reduce((obj, book) => {
        obj[book._id] = false;
        return obj;
      }, {});
      this.setState({ bookList, checkedBooks });
    });
  }

  handleCheckboxChange = (id) => {
    this.setState(prevState => {
      const checkedBooks = {
        ...prevState.checkedBooks,
        [id]: !prevState.checkedBooks[id]
      };
      return { checkedBooks };
    });
  }
  

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { checkedBooks, name } = this.state;
    const date = new Date()
    const dueDate = new Date(date.setDate(date.getDate() + 7))
    Object.keys(checkedBooks).forEach(id => {
      if (checkedBooks[id]) {
        Axios.put(`http://localhost:8000/books/${id}`, { avail: false, who: name, due: dueDate.toDateString() })
          .then(res => {
            console.log(res)
            window.alert('You have successfully checked out your books')
          })
          .catch(err => console.log(err));
      }
      
    });
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {
    const { bookList, checkedBooks, name } = this.state;
    return (
      <div>
        <h3 className={checkBooks.title}>Check Out Books</h3>
        <form className={checkBooks.checkForm} onSubmit={this.handleFormSubmit}>
        { bookList.length > 0 ?
            bookList.map((book) => (
              <div key={book._id}>
                <input type="checkbox" checked={checkedBooks[book._id]} onChange={() => this.handleCheckboxChange(book._id)} />
                <Book book={book} />
              </div>
            )) : 'Sorry currently all books have been checked out :('
          }
          <input type='text' id='name' value={name} onChange={this.handleNameChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
