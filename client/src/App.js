import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import MyFib from './MyFib';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Strona główna&nbsp;</Link><p />
        <Link to="/myfib">Obliczanie wartości ciągu fibonaciego&nbsp;</Link><p />
        <Link to="/otherpage">Opis</Link>
        <h1>Realizacja zadania nr1 w ramach laboratorium PFSwCO</h1>
        <h3>Karol Sawczuk</h3>
        <Route path="/otherpage" component={OtherPage} />
        <Route path="/myfib" component={MyFib} />
      </div>
    </Router>
  );
}

export default App;
