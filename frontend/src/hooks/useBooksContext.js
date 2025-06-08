// we could use in-built custom hook useContext() here
// to access the BookContext and its state and dispatch
// but we will use a custom context instead

import { BooksContext } from "../context/BooksContext";
import { useContext } from "react";

export const useBooksContext = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw Error("useBooksContext must be used inside an BooksContextProvider");
  }

  return context;
};
