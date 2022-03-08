import * as React from 'react';
import { render } from 'react-dom';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Write from './Write';

function App() {
  return (
    <Router>
      <Routes>
        <header>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/write">
            <button>write</button>
          </Link>
          <Link to="/users">
            <button>Users</button>
          </Link>
        </header>
        <main>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
        </main>
      </Routes>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
