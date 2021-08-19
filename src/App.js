import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from './user/List'
import Detail from './user/Detail'
import './user/Detail.css'

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{'color':'black'}}>
      <Router>
          <Switch>
            <Route path="/user/:uid">
              <Detail />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
