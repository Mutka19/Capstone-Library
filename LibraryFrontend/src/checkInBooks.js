import React, { Component } from "react";
import Axios from "axios";
import Book from "./Book";
import checkBooks from "./checkBooks.module.css";

export default class CheckOutBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      checkedBooks: {},
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:8000/books?avail=false").then((res) => {
      const bookList = res.data;
      const checkedBooks = bookList.reduce((obj, book) => {
        obj[book._id] = false;
        return obj;
      }, {});
      this.setState({ bookList, checkedBooks });
    });
  }

  handleCheckboxChange = (id) => {
    this.setState((prevState) => {
      const checkedBooks = {
        ...prevState.checkedBooks,
        [id]: !prevState.checkedBooks[id],
      };
      return { checkedBooks };
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { checkedBooks } = this.state;
    Object.keys(checkedBooks).forEach((id) => {
      if (checkedBooks[id]) {
        Axios.put(`http://localhost:8000/books/${id}`, {
          avail: true,
          who: "",
          due: "",
        })
          .then((res) => {
            console.log(res);
            window.alert("You have successfully checked in your books");
          })
          .catch((err) => console.log(err));
      }
    });
  };

  render() {
    const { bookList, checkedBooks } = this.state;
    return (
      <div>
        <h3 className={checkBooks.title}>Check In Books</h3>
        <form className={checkBooks.checkForm} onSubmit={this.handleFormSubmit}>
          {bookList.length > 0
            ? bookList.map((book) => (
                <div key={book._id}>
                  <input
                    type="checkbox"
                    checked={checkedBooks[book._id]}
                    onChange={() => this.handleCheckboxChange(book._id)}
                  />
                  <Book book={book} />
                </div>
              ))
            : "There are currently no books that need to be checked in!"}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
