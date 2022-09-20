import React from "react";
import Navbar from "./Component/Navbar.js";
import News from "./Component/News.js";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  const pageSize = 6;

  return (
    <div>
      <BrowserRouter>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pazeSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pazeSize={pageSize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pazeSize={pageSize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News
                key="general"
                pazeSize={pageSize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pazeSize={pageSize}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pazeSize={pageSize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pazeSize={pageSize}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pazeSize={pageSize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
        </BrowserRouter>
    </div>
  );
};

export default App;
