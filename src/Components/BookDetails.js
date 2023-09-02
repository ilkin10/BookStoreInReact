// BookDetails.js
import React from "react";
import "./../Book.css";
import "./../Comments.css";

import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

function BookDetails({ books }) {
  // Access the book GUID from the route parameter
  const { Id } = useParams();

  // Find the book with the matching GUID
  const book = books.find((book) => book.Id === Id);

  Cookies.set("Name", "Matthew Twomey");
  Cookies.set("Name2", "John Doe");

  Cookies.set("Day", "2 days ago");
  Cookies.set("Day2", "13 hours ago");

  Cookies.set("Text", "This is some content from a media component.");
  Cookies.set("Text2", "Amazing Book I have ever read");

  const Name = Cookies.get("Name");
  const Day = Cookies.get("Day");
  const Text = Cookies.get("Text");
  const Name2 = Cookies.get("Name2");
  const Day2 = Cookies.get("Day2");
  const Text2 = Cookies.get("Text2");
  if (!book) {
    return <div>Book not found</div>;
  }
  //   display: grid;
  //   place-items: center; /* Center both horizontally and vertically */
  //   height: 100vh;
  return (
    <main>
      <div
        style={{
          display: "grid",
          placeItems: "center",
        }}
        className="book-card"
      >
        <div className="book-card__cover">
          <div className="book-card__book">
            <div className="book-card__book-front">
              <img
                className="book-card__img"
                src={book.CoverUrl}
                alt="Book cover"
              />
            </div>
            <div className="book-card__book-back"></div>
            <div className="book-card__book-side"></div>
          </div>
        </div>
        <div>
          <div
            style={{ textAlign: "center", fontWeight: "bolder" }}
            className="book-card__title"
          >
            {book.Title}
          </div>
          <div
            style={{ fontSize: "20px", textAlign: "center" }}
            className="book-card__author"
          >
            Book's Author : {book.Author}
          </div>
          <div
            style={{ fontSize: "20px", textAlign: "center" }}
            className="book-card__author"
          >
            Book's Language : {book.Language}
          </div>
          <div
            style={{ fontSize: "20px", textAlign: "center" }}
            className="book-card__author"
          >
            Book's Publisher : {book.Publisher}
          </div>
          <div
            style={{ fontSize: "20px", textAlign: "center" }}
            className="book-card__author"
          >
            Book's Year : {book.Year}
          </div>
          <hr></hr>
          <div class="d-flex align-items-center justify-content-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="d-flex px-3 py-4 border border-bottom-0 border-light rounded-top">
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-sm rounded-circle">
                        <img
                          class="avatar-img"
                          src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-2 ms-md-3">
                      <div class="d-flex align-items-baseline">
                        <h6 class="me-2">{Name}</h6>
                        <span class="badge py-1 bg-light text-muted fw-normal">
                          {Day}
                        </span>
                      </div>
                      <div>{Text}</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="d-flex px-3 py-4 border border-bottom-0 border-light rounded-top">
                    <div class="flex-shrink-0">
                      <div class="avatar avatar-sm rounded-circle">
                        <img
                          class="avatar-img"
                          src="https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200"
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="flex-grow-1 ms-2 ms-md-3">
                      <div class="d-flex align-items-baseline">
                        <h6 class="me-2">{Name2}</h6>
                        <span class="badge py-1 bg-light text-muted fw-normal">
                          {Day2}
                        </span>
                      </div>
                      <div>{Text2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </main>

    // <div
    //   className="card mb-3"
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //   }}
    // >
    //   <div className="row g-0">
    //     <div className="col-md-4">
    //       <img
    //       style={{ padding: "30px" }}
    //         src={book.CoverUrl}
    //         className="img-fluid rounded-start"
    //         alt="..."
    //       />
    //     </div>
    //     <div className="col-md-8">
    //       <div className="card-body">
    //         <h5 style={{ fontSize: "30px" }} className="card-title">
    //           {book.Title} ({book.Author})
    //         </h5>
    //         <br></br>
    //         <p style={{ fontSize: "20px" }} className="card-text">
    //           Language : {book.Language}
    //         </p>
    //         <p style={{ fontSize: "20px" }} className="card-text">
    //           Publisher : {book.Publisher}
    //         </p>
    //         <p style={{ fontSize: "20px" }} className="card-text">
    //           Year : {book.Year}
    //         </p>
    //         <p style={{ fontSize: "20px" }} className="card-text">
    //           Pages : {book.Pages}
    //         </p>
    //         <p className="card-text">
    //           <small className="text-body-secondary"></small>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default BookDetails;
