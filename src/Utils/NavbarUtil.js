import { Books, CurrentSetter } from "./CurrentList";

export const filterBooks = (books, keyword) => {
  let searchedBooks = [];
  books.forEach((b) => {
    // Check if any of the properties contain the keyword
    if (
      b.Title.includes(keyword) ||
      b.Author.includes(keyword) ||
      b.Language.includes(keyword) ||
      b.Publisher.includes(keyword) ||
      b.Year.includes(keyword) ||
      b.Pages.includes(keyword)
    ) {
      searchedBooks.push(b);
    }
  });
  console.log(searchedBooks);
  return searchedBooks;
};
