import { createContext, useState } from "react";
import axios from "axios";
const BookContext = createContext();

function Provider({ children }) {
  const [books, setBook] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    setBook([...books, response.data]);
  };

  const deleteBook = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    //if(response.statusText === 'ok'){
    const updatedBook = books.filter((book) => book.id !== id);
    setBook(updatedBook);
    // }
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title });

    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    console.log(updatedBook)
    setBook(updatedBook);
  };

  const valueToShare = {
    books,
    fetchBook,
    createBook,
    deleteBook,
    editBookById,
  };
  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;
