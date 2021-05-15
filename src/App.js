import './App.css';
import Home from './pages/Home';
import Bought from './components/Bought'
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/bought">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
