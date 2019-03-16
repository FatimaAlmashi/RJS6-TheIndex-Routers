import React, { Component } from "react";
import BookCard from "./BookCard";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books,
    color: undefined,
    changed: false
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  componentDidUpdate(prevState) {
    if (this.props.match.params.color !== prevState.match.params.color) {
      this.filteredBooksByColor(this.props.match.params.color);
    }
  }

  filteredBooksByColor = color => {
    if (color) {
      let filteredBooksByColor = this.props.books.filter(
        book => book.color === color
      );
      this.setState({ filteredBooks: filteredBooksByColor });
    } else {
      this.setState({ filteredBooks: this.props.books });
    }
  };

  render() {
    const bookcards = this.state.filteredBooks.map(book => (
      <BookCard key={book.id} book={book} />
    ));
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <div className="row">{bookcards}</div>
      </div>
    );
  }
}

export default BookList;
