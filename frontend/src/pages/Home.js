import { useEffect, useState } from "react";

// components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

const Home = () => {
  // ["state", "function that changes state"] = useState(initialState)
  // books -> from bookController.js (getBooks())
  const [books, setBooks] = useState(null);

  // useEffect() hook fires a function that fetches data from server
  // it does so only once ([] at the end) after component is rendered
  useEffect(() => {
    const fetchBooks = async () => {
      // normally we need fetch("http://localhost:4000/api/books")
      // because server and react are running on different ports
      // one way to deal with it: use cors middleware to allow that
      // another way: use proxy in package.json (our choice)
      const response = await fetch("/api/books");
      const json = await response.json();
      if (response.ok) {
        // fetches books as array of objects
        // from backend/controllers/bookController.js
        // and sets it to the state
        setBooks(json);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="home">
      {/* if there are books, map through them and display them */}
      <div className="books">
        {books &&
          books.map((book) => <BookDetails book={book} key={book._id} />)}
      </div>
      <BookForm />
    </div>
  );
};

export default Home;
