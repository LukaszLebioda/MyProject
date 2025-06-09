import { useEffect, useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

// components
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import Pagination from "../components/Pagination";

const BOOKS_PER_PAGE = 3;

const Home = () => {
  const { books, dispatch } = useBooksContext();
  const [currentPage, setCurrentPage] = useState(1);

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

  // Pagination logic
  const totalPages = books ? Math.ceil(books.length / BOOKS_PER_PAGE) : 1;
  const startIdx = (currentPage - 1) * BOOKS_PER_PAGE;
  const paginatedBooks = books
    ? books.slice(startIdx, startIdx + BOOKS_PER_PAGE)
    : [];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="home">
      <div>
        {/* if there are books, map through them and display them */}
        {paginatedBooks &&
          paginatedBooks.map((book) => (
            <BookDetails key={book._id} book={book} />
          ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <BookForm />
    </div>
  );
};

export default Home;
