import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './containers/BlogListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          ALL HUNKY DORY!
          <BlogList />
      </header>
    </div>
  );
}

export default App;
