const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const AlphabetFilter = ({ selectedLetter, onLetterClick }) => (
  <div
    className="alphabet-filter"
    style={{
      marginBottom: "1rem",
      textAlign: "center",
    }}
  >
    <button
      className={!selectedLetter ? "active" : ""}
      onClick={() => onLetterClick("")}
      style={{ marginRight: 6 }}
    >
      All titles
    </button>
    {ALPHABET.map((letter) => (
      <button
        key={letter}
        className={selectedLetter === letter ? "active" : ""}
        onClick={() => onLetterClick(letter)}
        style={{ marginRight: 6 }}
      >
        {letter}
      </button>
    ))}
  </div>
);

export default AlphabetFilter;
