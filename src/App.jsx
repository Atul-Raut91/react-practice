import "./ContextPractice/component/index.css";
import BookCreate from "./ContextPractice/component/BookCreate";
import { useContext, useEffect } from "react";
import BookContext from "./ContextPractice/context/Provider";
import BookList from "./ContextPractice/component/BookList";

function App() {
  const { fetchBook } = useContext(BookContext);

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <>
      <BookList />
      <BookCreate />
    </>
  );
}

export default App;
