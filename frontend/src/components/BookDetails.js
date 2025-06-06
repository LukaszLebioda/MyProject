const BookDetails = ({ book }) => {
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
      <p>{book.createdAt}</p>
    </div>
  );
};
export default BookDetails;
