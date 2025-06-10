import { LiaExchangeAltSolid } from "react-icons/lia";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetFilter = ({
  selectedLetter,
  onLetterClick,
  filterBy = "title",
  onFilterByChange,
}) => (
  <div className="alphabet-filter">
    <button
      id="alphabet-switch-btn"
      onClick={() =>
        onFilterByChange(filterBy === "title" ? "author" : "title")
      }
    >
      <LiaExchangeAltSolid />
    </button>
    <button id="alphabet-filter-type-btn">
      {filterBy === "title" ? "Title" : "Author"}
    </button>
    {ALPHABET.map((letter) => (
      <button
        key={letter}
        className={selectedLetter === letter ? "active" : ""}
        onClick={() => onLetterClick(letter)}
      >
        {letter}
      </button>
    ))}
  </div>
);

export default AlphabetFilter;
