import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Shop from "./Shop"
import Nav from "./Nav"
import Home from "./Home"
function App() {
  const [numItems, setNumItems] = useState(0)
  return (
    <div className="App">
        
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route exact path="/shop" render={() => <Shop setNumItems={setNumItems} numItems={numItems} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
