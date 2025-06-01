import { useEffect, useState } from "react";

// components
import BookDetails from "../components/BookDetails";

const Home = () => {
  const [books, setBooks] = useState(null);

  // this useEffect() hook fires a function
  // that fetches data from the server
  // only once ([]) after the component is rendered
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();
      if (response.ok) {
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
