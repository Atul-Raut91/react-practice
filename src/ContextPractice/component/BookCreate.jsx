import { useContext, useState } from "react";
import BookContext from "../context/Provider";

function BookCreate() {
  const [title, setTitle] = useState("");



  return (
    <div className="book-create">
      <form>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            console.log(title);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
