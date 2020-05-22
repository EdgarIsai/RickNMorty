import React from 'react';
import '../css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './Users/HomeScreen';
import Contact from './Contact';

const App = () => (
    <BrowserRouter>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/contact" component={Contact} />
    </BrowserRouter>
  )

export default App;
