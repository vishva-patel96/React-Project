const initialState = {
  books: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case 'EDIT_BOOK':
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.payload.id) {
            return {
              ...book,
              ...action.payload
            };
          }
          return book;
        })
      };
    case 'DELETE_BOOK':
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;
