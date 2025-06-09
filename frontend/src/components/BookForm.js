import { useState } from "react";
import { useBooksContext } from "../hooks/useBooksContext";

const BookForm = () => {
  const { dispatch } = useBooksContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    // prevent default form submission action -> page refresh
    e.preventDefault();
    // dummy book object to be sent as request body
    const book = { title, author, published, genre, description };
    const response = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      // reset form fields to initial state
      setTitle("");
      setAuthor("");
      setPublished("");
      setGenre("");
      setDescription("");
      setError(null);
      setEmptyFields([]);
      console.log("new book added", json);
      dispatch({ type: "CREATE_BOOK", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add new book</h3>
      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <label>Author:</label>
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        className={emptyFields.includes("author") ? "error" : ""}
      />
      <label>Published:</label>
      <input
        type="number"
        onChange={(e) => setPublished(e.target.value)}
        value={published}
        className={emptyFields.includes("published") ? "error" : ""}
      />
      <label>Genre:</label>
      <select
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
        className={emptyFields.includes("genre") ? "error" : ""}
      >
        <option value="">-</option>
        <option value="fantasy">Fantasy</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="mystery">Mystery</option>
        <option value="romance">Romance</option>
        <option value="thriller">Thriller</option>
        <option value="historical">Historical</option>
        <option value="horror">Horror</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="classic">Classic</option>
      </select>
      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      />

      <button>Add</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BookForm;
