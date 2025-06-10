import { useBooksContext } from "../hooks/useBooksContext";
import { FaTrash } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const BookDetails = ({ book }) => {
  const { dispatch } = useBooksContext();

  const handleClick = async () => {
    const response = await fetch(`/api/books/${book._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_BOOK", payload: json });
    }
  };

  return (
    <div className="book-details">
      <h4>{book.title}</h4>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Date:</strong> {book.published}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      {/* <p>{book.createdAt}</p> */}
      <span
        id="trash"
        onClick={handleClick}
        title="Delete"
        style={{ background: "transparent" }}
      >
        <FaTrash />
      </span>
      <span id="mark" style={{ background: "transparent" }}>
        Mark read
      </span>
      <span id="star1" className="stars" style={{ background: "transparent" }}>
        <CiStar />
      </span>
      <span id="star2" className="stars" style={{ background: "transparent" }}>
        <CiStar />
      </span>
      <span id="star3" className="stars" style={{ background: "transparent" }}>
        <CiStar />
      </span>
    </div>
  );
};
export default BookDetails;
