import React, { useState } from "react";
import "./../App.css";
import { toggleFavorite } from "../Utils/FavoriteUtils";
import { Link } from "react-router-dom";
import {
  Books,
  CurrentSetter,
  SetBooks,
  SetSetter,
} from "../Utils/CurrentList";
export default function BookList(props) {
  const [book, setBook] = useState([]);
  SetBooks(props.books);
  SetSetter(setBook);
  return (
    <div style={{ marginLeft: "200px" }} id="large-th">
      <div className="container">
        <br />
        <div className="choose">
          <a href="#list-th">
            <i className="fa fa-th-list" aria-hidden="true"></i>
          </a>
          <a href="#large-th">
            <i className="fa fa-th-large" aria-hidden="true"></i>
          </a>
        </div>
        <div id="list-th">
          {props.books.map((book, index) => (
            <div
              className={`book ${book.read ? "read" : "unread"}`}
              key={index}
            >
              <Link to={`/book/${book.Id}`}>
                <div className="cover">
                  <img src={book.CoverUrl} alt="Book Cover" />
                </div>
                <div className="description" style={{ height: "20%" }}>
                  <p  className="title">
                    {book.Title.length > 30
                      ? `${book.Title.slice(0, 30)}...`
                      : book.Title}
                    <br />
                    <span   className="author">
                      {book.Author.length > 25
                        ? `${book.Author.slice(0, 25)}...`
                        : book.Author}
                    </span>
                  </p>
                </div>
                {/* inline style yazma sebebim */}
              </Link>
              <button style={{textAlign:"center",margin:"auto"}}
                onClick={() =>
                  toggleFavorite(book, props.favorites, props.setFavorites)
                }
                className={`btn btn-primary ${
                  props.favorites.some(
                    (favoriteBook) => favoriteBook.Title === book.Title
                  )
                    ? "active-button"
                    : ""
                }`}
              >
                {props.favorites.some(
                  (favoriteBook) => favoriteBook.Title === book.Title
                )
                  ? `Favorite Delete`
                  : "Favorite Add"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
