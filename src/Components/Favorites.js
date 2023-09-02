import React, { useState } from "react";
import { toggleFavorite } from "../Utils/FavoriteUtils";
import { Link } from "react-router-dom";
import {
  Books,
  CurrentSetter,
  SetBooks,
  SetSetter,
} from "../Utils/CurrentList";

export default function Favorites(props) {
  //favorites favorite edilmis booklar
  //setFavorite
  const [favorite, setFavorite] = useState([]);
  SetBooks(props.favorites);
  SetSetter(setFavorite);
  // setFavorite(props.favorites)
  return (
    <div style={{ margin: "50px" }}>
      {props.favorites.map((book, index) => (
        <div key={index} style={{ display: "inline-block" }} class="artboard">
          <div class="card">
            <div class="card__side card__side--back">
              <Link to={`/book/${book.Id}`}>
                <div class="card__cover">
                  <h4 class="card__heading">
                    <span
                      style={{ textAlign: "center" }}
                      class="card__heading-span"
                    >
                      {book.Title}
                    </span>
                  </h4>
                </div>
              </Link>
              <Link to={`/book/${book.Id}`}></Link>
              <div class="card__details">
                <ul>
                  <Link to={`/book/${book.Id}`}>
                    <li>
                      Author :{" "}
                      {book.Author.length > 25
                        ? `${book.Author.slice(0, 25)}...`
                        : book.Author}
                    </li>
                    <li>Language : {book.Language}</li>
                    <li>Advanced Animations</li>
                  </Link>
                  <li>
                    <button
                      onClick={() =>
                        toggleFavorite(
                          book,
                          props.favorites,
                          props.setFavorites
                        )
                      }
                      className="btn btn-danger"
                    >
                      Favorite Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div class="card__side card__side--front">
              <Link to={`/book/${book.Id}`}>
                <img
                  style={{ width: "100%", height: "450px" }}
                  src={book.CoverUrl}
                ></img>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

    // <div id="large-th">
    //   <div className="container">
    //     <h1> Favorites Books</h1>
    //     <br />
    //     <div className="choose">
    //       <a href="#list-th">
    //         <i className="fa fa-th-list" aria-hidden="true"></i>
    //       </a>
    //       <a href="#large-th">
    //         <i className="fa fa-th-large" aria-hidden="true"></i>
    //       </a>
    //     </div>
    //     <div id="list-th">
    //       {props.favorites.map((book, index) => (
    //         <div
    //           className={`book ${book.read ? "read" : "unread"}`}
    //           key={index}
    //         >
    //           <Link to={`/book/${book.Id}`}>
    //             <div className="cover">
    //               <img src={book.CoverUrl} alt="Book Cover" />
    //             </div>
    //             <div className="description" style={{ height: "20%" }}>
    //               <p className="title">
    //                 {book.Title.length > 30
    //                   ? `${book.Title.slice(0, 30)}...`
    //                   : book.Title}
    //                 <br />
    //                 <span className="author">
    //                   {book.Author.length > 25
    //                     ? `${book.Author.slice(0, 25)}...`
    //                     : book.Author}
    //                 </span>
    //               </p>
    //             </div>
    //           </Link>
    //           <button
    //             onClick={() =>
    //               toggleFavorite(book, props.favorites, props.setFavorites)
    //             }
    //             className="btn btn-danger"
    //           >
    //             Favorite Delete
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}
