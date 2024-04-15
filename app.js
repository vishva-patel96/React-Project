import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import EditBookForm from './components/EditBookForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/add" component={AddBookForm} />
        <Route exact path="/edit/:id" component={EditBookForm} />
      </Switch>
    </Router>
  );
}

export default App;