import { Books, CurrentSetter } from "./CurrentList";



export const filterBooks = (books,keyword) => {
    let searchedBooks = [];
    books.forEach(b => {
        if(JSON.stringify(b).includes(keyword)){

            searchedBooks.push(b);
        }
    });
    console.log(searchedBooks)
    return searchedBooks

  };