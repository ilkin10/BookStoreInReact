// BookDetails.js
import React from "react";
import './../Book.css';
import { useParams } from "react-router-dom";

function BookDetails({ books }) {
  // Access the book GUID from the route parameter
  const { Id } = useParams();

  // Find the book with the matching GUID
  const book = books.find((book) => book.Id === Id);

  if (!book) {
    return <div>Book not found</div>;
  }
//   display: grid;
//   place-items: center; /* Center both horizontally and vertically */
//   height: 100vh; 
  return (
      <main>
        <div style={{padding:"25x",display:"grid",placeItems:"center",height:"80vh"}} className="book-card">
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
            <div style={{textAlign:"center",fontWeight:"bolder"}} className="book-card__title">
              {book.Title}
            </div>
            <div style={{fontSize:"20px",textAlign:"center"}} className="book-card__author">Book's Author : {book.Author}</div>
            <div style={{fontSize:"20px",textAlign:"center"}} className="book-card__author">Book's Language : {book.Language}</div>
            <div style={{fontSize:"20px",textAlign:"center"}} className="book-card__author">Book's Publisher : {book.Publisher}</div>
            <div style={{fontSize:"20px",textAlign:"center"}} className="book-card__author">Book's Year : {book.Year}</div>
            <div style={{fontSize:"20px",textAlign:"center"}} className="book-card__author">Book's Page Count : {book.Pages}</div>


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
