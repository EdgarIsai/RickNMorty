import React from 'react';
import '../css/index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './Users/Users';
import Contact from './Contact';

const App = () => (
    <BrowserRouter>
    <Route exact path="/" component={Users} />
      <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
  )

export default App;
