import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookCard extends Component {
  render() {
    const book = this.props.book;
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card-body">
          <h5 className="card-title">
            <span>{book.title}</span>
          </h5>
          {book.authors.map(author => (
            <Link to={`/authors/${author.id}`} className="card">
              <div key={author.id}>{author.name}</div>
            </Link>
          ))}
          <Link
            to={`/books/${book.color}`}
            className="btn"
            style={{ backgroundColor: book.color }}
          />
        </div>
      </div>
    );
  }
}

export default BookCard;
