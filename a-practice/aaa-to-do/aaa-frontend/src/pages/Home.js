import { useState, useEffect } from "react";
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
  const [filterBy, setFilterBy] = useState("title"); // "title" or "author"
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const response = await fetch("/api/books");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_BOOKS", payload: json });
      }
      setLoading(false);
    };
    fetchBooks();
  }, [dispatch]);

  // Filtering logic
  const filteredBooks = books
    ? books.filter((book) => {
        if (!selectedLetter) return true;
        const field = filterBy === "author" ? book.author : book.title;
        return field && field[0].toUpperCase() === selectedLetter;
      })
    : [];

  const handleLetterClick = (letter) => {
    setSelectedLetter((prev) => (prev === letter ? "" : letter));
    setCurrentPage(1);
  };

  const handleFilterByChange = (value) => {
    setFilterBy(value);
    setCurrentPage(1);
    setSelectedLetter(""); // Optionally reset letter filter on switch
  };

  // Pagination logic
  const totalPages = filteredBooks.length
    ? Math.ceil(filteredBooks.length / BOOKS_PER_PAGE)
    : 1;
  const startIdx = (currentPage - 1) * BOOKS_PER_PAGE;
  const displayedBooks = filteredBooks.slice(
    startIdx,
    startIdx + BOOKS_PER_PAGE
  );

  return (
    <div className="home">
      <div>
        <AlphabetFilter
          selectedLetter={selectedLetter}
          onLetterClick={handleLetterClick}
          filterBy={filterBy}
          onFilterByChange={handleFilterByChange}
        />
        {loading ? (
          <div className="no-books-message">Loading...</div>
        ) : displayedBooks.length === 0 ? (
          <div className="no-books-message">No books found...</div>
        ) : (
          displayedBooks.map((book) => (
            <BookDetails key={book._id} book={book} />
          ))
        )}
        {filteredBooks.length > 3 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
      <BookForm />
    </div>
  );
};

export default Home;
