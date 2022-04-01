import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Registration from "./pages/Registration";

function App() {
  return (
    <Registration />
    // <Router>
    //   <Route path="/" exact render={(props) => <Registration />} />
    //   <Route path="/registration" exact render={(props) => <Registration />} />
    // </Router>
  );
}

export default App;