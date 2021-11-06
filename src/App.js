import "./App.css";
import * as React from "react";
import { Switch, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CardList } from "./CardList";
import {Purchased} from "./Purchased";
import{Navbar} from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  const obj=[];
  const [count, setCount] = useState(0);
  const [purchase,setPurchase] =useState(obj);
  const [disable, setDisable] = useState(false);
  const history =useHistory();
  return (
    
    <div className="App">
      <Switch>
      
        <Route exact path="/">
        <Router>
        <Navbar count={count} setCount={setCount} history={history}/>
        </Router>
       <Header  />
        
        <CardList disable={disable} setDisable={setDisable} count={count} setCount={setCount} purchase={purchase} setPurchase={setPurchase}history={history}/>
        <Footer />
       
        </Route>

        <Route path="/cart">
        
          <Purchased purchase={purchase} setPurchase={setPurchase} count={count} setCount={setCount} history={history} />
        </Route>
        
      </Switch>
     
      
    </div>
  );
}
export default App;
