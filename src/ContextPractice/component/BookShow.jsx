import { useContext, useState } from "react";
import BookContext from "../context/Provider";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit,setShowEdit] = useState(false);
  const { deleteBook } = useContext(BookContext);

  function onClickDelete() {
    deleteBook(book.id);
  }

  function onClickShowEdit(){
    setShowEdit(!showEdit);
  }

  if(showEdit){
   return <BookEdit showEdit = {onClickShowEdit} book={book}/>
  }
  return (
    <div className="book-list">
      <div className="actions">
        <i onClick={onClickShowEdit}className="fa-solid fa-pen-to-square"></i>
        <i onClick={onClickDelete} className="fa-solid fa-rectangle-xmark"></i>
      </div>
      <h3>{book.title}</h3>
    </div>
  );
}

export default BookShow;
