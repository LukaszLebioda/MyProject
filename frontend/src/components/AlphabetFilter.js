const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetFilter = ({ selectedLetter, onLetterClick, filterBy = "title", onFilterByChange }) => (
  <div className="alphabet-filter">
    <button id="alphabet-filter-type-btn" onClick={() => onFilterByChange(filterBy === "title" ? "author" : "title")}>
      {filterBy === "title" ? "Title" : "Author"}
    </button>
    {ALPHABET.map((letter) => (
      <button key={letter} className={selectedLetter === letter ? "active" : ""} onClick={() => onLetterClick(letter)}>
        {letter}
      </button>
    ))}
  </div>
);

export default AlphabetFilter;
