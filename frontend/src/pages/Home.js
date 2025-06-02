import { useEffect, useState } from "react";

// components
import BookDetails from "../components/BookDetails";

const Home = () => {
  // ["state", "function that changes state"] = useState(initialState)
  const [books, setBooks] = useState(null);

  // this useEffect() hook fires a function
  // that fetches data from the server
  // it does it only once ([])
  // after the component is rendered for the 1st time
  useEffect(() => {
    const fetchBooks = async () => {
      // fetch("http://localhost:4000/api/books") would be needed
      // if server was running on a different port
      // and when we used cors middleware to allow that
      // but we use proxy in package.json that handles cors for us
      const response = await fetch("/api/books");
      const json = await response.json();
      if (response.ok) {
        // fetches books as an array of objects
        // from backend/controllers/bookController.js
        // and sets it to the state
        setBooks(json);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="home">
      <div className="books">{books && books.map((book) => <BookDetails book={book} key={book._id} />)}</div>
    </div>
  );
};

export default Home;
