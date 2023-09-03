import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./Components/BookList";
import Favorites from "./Components/Favorites";
import Cards from "./Components/Cards";

import BookDetails from "./Components/BookDetails";
import { filterBooks } from "./Utils/NavbarUtil";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [cards, setCards] = useState([]);

  const location = useRef("");
  const [inputedText, setInputedText] = useState("");

  useEffect(() => {
    // Verileri alma isteğini burada yapacağız
    fetch("https://data.aykhan.net/data/general/books.json")
      .then((response) => response.json())
      .then((data) => {
        // İlk 100 veriyi almak için slice kullanabilirsiniz
        const limitedData = data.slice(0, 200);
        console.log(limitedData);
        setBooks(limitedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Verileri alma hatası:", error);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    const favoriteBooks = Cookies.get("favoriteBooks");
    if (favoriteBooks) {
      setFavorites(JSON.parse(favoriteBooks));
    }
  }, []);
  useEffect(() => {
    const cardBooks = Cookies.get("cardBooks");
    if (cardBooks) {
      setFavorites(JSON.parse(cardBooks));
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar
          location={location}
          books={books}
          favorites={favorites}
          setInput={setInputedText}
        ></Navbar>
        <hr />
        <Routes>
          <Route
            exact
            path="/"
            element={
              inputedText === "" ? (
                <BookList
                  books={books}
                  favorites={favorites}
                  cards={cards}
                  setCards={setCards}
                  setFavorites={setFavorites}
                />
              ) : (
                <BookList
                  books={filterBooks(books, inputedText)}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  cards={cards}
                  setCards={setCards}
                />
              )
            }
          />
          <Route
            path="/book/:Id"
            element={
              inputedText === "" ? (
                <BookDetails books={books} />
              ) : (
                <BookDetails books={filterBooks(books, inputedText)} />
              )
            }
          />

          {/* Other routes go here */}
          <Route
            exact
            path="/favorites"
            element={
              inputedText === "" ? (
                <Favorites favorites={favorites}    cards={cards}
                setCards={setCards} setFavorites={setFavorites} />
              ) : (
                <Favorites
                  favorites={filterBooks(favorites, inputedText)}
                  setFavorites={setFavorites}    cards={filterBooks(cards, inputedText)}
                  setCards={setCards}
                />
              )
            }
          />

<Route
            exact
            path="/cards"
            element={
              inputedText === "" ? (
                <Cards cards={cards} favorites={favorites} setFavorites={setFavorites} setCards={setCards} />
              ) : (
                <Cards
                  cards={filterBooks(cards, inputedText)}
                  setCards={setCards}
                  favorites={filterBooks(favorites, inputedText)}
                  setFavorites={setFavorites}
                />
              )
            }
          />

          <Route path="/book/:Id" element={<BookDetails books={books} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
