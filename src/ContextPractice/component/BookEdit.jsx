import { useContext, useState } from "react";
import BookContext from "../context/Provider";

function BookEdit({ showEdit, book }) {
  const [newTitle, setNewTitle] = useState(book.title);
  const { editBookById } = useContext(BookContext);

  function onChangeInput(event) {
    setNewTitle(event.target.value);
  }

  function handleClick(event){
    event.preventDefault();
    editBookById(book.id,newTitle);
    showEdit()
    setNewTitle('')
  }

  return (
    <div>
      <form>
        <input type="text" value={newTitle} onChange={onChangeInput} />
        <button onClick={handleClick}>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
