import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "../pages/search";
import Mybooks from "../pages/mybooks";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/mybooks" component={Mybooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
