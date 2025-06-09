import { useEffect, useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import BookDetails from "../components/BookDetails";
import BookForm from "../components/BookForm";
import Pagination from "../components/Pagination";
import AlphabetFilter from "../components/AlphabetFilter";

const BOOKS_PER_PAGE = 3;

const Home = () => {
  const { books, dispatch } = useBooksContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_BOOKS", payload: json });
      }
    };
    fetchBooks();
  }, [dispatch]);

  // Filter books by selected letter
  const filteredBooks = books
    ? books.filter((book) =>
        selectedLetter
          ? book.title && book.title[0].toUpperCase() === selectedLetter
          : true
      )
    : [];

  // Pagination logic
  const totalPages = filteredBooks.length
    ? Math.ceil(filteredBooks.length / BOOKS_PER_PAGE)
    : 1;
  const startIdx = (currentPage - 1) * BOOKS_PER_PAGE;
  const paginatedBooks = filteredBooks.slice(
    startIdx,
    startIdx + BOOKS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  return (
    <div className="home">
      <div>
        <AlphabetFilter
          selectedLetter={selectedLetter}
          onLetterClick={handleLetterClick}
        />
        {paginatedBooks.map((book) => (
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
