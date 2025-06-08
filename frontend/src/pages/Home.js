import { useEffect } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

// components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";

const Home = () => {
  const { books, dispatch } = useBooksContext();

  useEffect(() => {
    const fetchBooks = async () => {
      // normally we need fetch("http://localhost:4000/api/books")
      // because server and react are running on different ports
      // one way to deal with it: use cors middleware to allow that
      // another way: use proxy in package.json (our choice)
      const response = await fetch("/api/books");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_BOOKS", payload: json });
      }
    };
    fetchBooks();
  }, [dispatch]);

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
