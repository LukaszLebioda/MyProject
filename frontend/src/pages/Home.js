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

  // Filter books by selected letter and filterBy property
  const filteredBooks = books
    ? books.filter((book) => {
        if (!selectedLetter) return true;
        const field = filterBy === "author" ? book.author : book.title;
        return field && field[0].toUpperCase() === selectedLetter;
      })
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

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
  };

  const handleFilterByChange = (value) => {
    setFilterBy(value);
    setCurrentPage(1);
    setSelectedLetter(""); // Optionally reset letter filter on switch
  };

  return (
    <div className="home">
      <div>
        <AlphabetFilter
          selectedLetter={selectedLetter}
          onLetterClick={handleLetterClick}
          filterBy={filterBy}
          onFilterByChange={handleFilterByChange}
        />
        {paginatedBooks.map((book) => (
          <BookDetails key={book._id} book={book} />
        ))}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <BookForm />
    </div>
  );
};

export default Home;
