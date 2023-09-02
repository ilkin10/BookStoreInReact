import { Books, CurrentSetter } from "./CurrentList";

export const filterBooks = (books, keyword) => {
  keyword = keyword.toLowerCase(); // Convert keyword to lowercase
  let searchedBooks = [];
  books.forEach((b) => {
    // Check if any of the properties contain the keyword (all converted to lowercase)
    if (
      b.Title.toLowerCase().includes(keyword) ||
      b.Author.toLowerCase().includes(keyword) ||
      b.Language.toLowerCase().includes(keyword) ||
      b.Publisher.toLowerCase().includes(keyword) ||
      b.Year.toLowerCase().includes(keyword) ||
      b.Pages.toLowerCase().includes(keyword)
    ) {
      searchedBooks.push(b);
    }
  });
  console.log(searchedBooks);
  return searchedBooks;
};
