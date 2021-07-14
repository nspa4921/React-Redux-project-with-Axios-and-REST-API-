import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";

// const Peoples = () => {
//   const [hasError, setErrors] = useState(false);
//   const [peoples, setPeoples] = useState({});

//   async function fetchData() {
//     const res = await fetch("https://swapi.dev/api/people/1/");
//     res
//       .json()
//       .then(res => setPeoples(res))
//       .catch(err => setErrors(err));
//   }

//   useEffect(() => {
//     fetchData();
//   });

//   return (
//     <div>
//       <span>{JSON.stringify(peoples)}</span>
//       <hr />
//       <span>Has error: {JSON.stringify(hasError)}</span>
//     </div>
//   );
// };
// export default Peoples;