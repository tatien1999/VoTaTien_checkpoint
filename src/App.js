import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './page/Home'
import AddSong from './page/Addsong'
import Song from './page/Song'


function App() {
  return (
    <div className="App">
        <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/addlist">Add new song</Link></li>
              <li><Link to="/listsong">Songs</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/addlist" exact>
              <AddSong />
            </Route>
            <Route path="/listsong" exact>
              <Song />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;


