import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Write from './write';
import Home from './home';
import Login from './login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/write">
              <button>write</button>
            </Link>
            <Link to="/login">
              <button>login</button>
            </Link>
          </>
        </Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write" component={Write} />
      </Router>
    </div>
  );
}

export default App;
