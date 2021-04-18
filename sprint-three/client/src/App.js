import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import Upload from "./pages/Upload/Upload"
import React from "react";


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos/:id" render={routerProps =><Home {...routerProps}/>}/>
          <Route path="/upload" render={routerProps =><Upload {...routerProps}/>}/>
        </Switch>
      </Router>
    </>
  );
}

export const API_KEY ="?api_key=8ee384fb-4633-4cf7-8154-79ad9b309f82";
export default App;
