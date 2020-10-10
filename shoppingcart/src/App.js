import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import {items} from "./ShoppingItems"
import Shop from "./Shop"
import Nav from "./Nav"
import Home from "./Home"
function App() {
  const [numItems, setNumItems] = useState(0)
  const [products, setProducts] = useState(items)
  return (
    <div className="App">
        
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route exact path="/shop" render={() => <Shop products={products} setProducts={setProducts} numItems={numItems} setNumItems={setNumItems} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
