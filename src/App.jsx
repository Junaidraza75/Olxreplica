import React from 'react';
import './App.css';

import './Styles.css'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import HomePage from './component/Home';
import Header from './component/Header'
import Footer from './component/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/" component={HomePage} />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
