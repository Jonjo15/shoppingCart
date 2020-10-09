import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Shop from "./Shop"
import Nav from "./Nav"
import Home from "./Home"
function App() {
  return (
    <div className="App">
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
