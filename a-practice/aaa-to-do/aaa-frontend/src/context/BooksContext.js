// after every POST request we have to reload the page
// to display new book in the list
// we could force-refetch the book list after every POST request
// but that would be too excesive refetching all only to see one
// so we use React context instead to update local state of our app
// i.e. to keep local state of our app in sync with the database

import { createContext, useReducer } from "react";

export const BooksContext = createContext();

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        books: action.payload,
      };
    case "CREATE_BOOK":
      return {
        books: [action.payload, ...state.books],
      };
    case "DELETE_BOOK":
      return {
        books: state.books.filter((b) => b._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, {
    books: null,
  });

  return (
    <BooksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BooksContext.Provider>
  );
};
