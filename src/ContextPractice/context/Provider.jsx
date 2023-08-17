import { createContext, useState } from "react";
import axios from "axios";
const BookContext = createContext();

function Provider({ children }) {
    const [books,setBook] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
    console.log(response.data)
  };

  const valueToShare ={
    books,fetchBook
  }
  return <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>;
}

export { Provider };
export default BookContext;
