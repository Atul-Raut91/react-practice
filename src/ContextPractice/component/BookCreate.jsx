import { useContext, useState } from "react";
import BookContext from "../context/Provider";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BookContext);

  function onClickHandle(event) {
    event.preventDefault();
    createBook(title);
    setTitle('')
  }

  return (
    <div className="book-create">
      <form>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button onClick={onClickHandle}>Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
