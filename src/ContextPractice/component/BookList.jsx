import { useContext } from "react"
import BookContext from "../context/Provider"
import BookShow from "./BookShow";

function BookList() {
    const {books} = useContext(BookContext);

    const renderBooks = books.map((book) => <BookShow book={book} key={book.id}/> )

  return (
    <div className="book-show">{renderBooks}</div>
  )
}

export default BookList