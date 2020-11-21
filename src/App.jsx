import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import { DataContextProvider } from "./Context/DataContext";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const SpecificComponentInfo = lazy(() =>
  import("./components/SpecificComponentInfo")
);

const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <DataContextProvider>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route
                exact
                path="/about/:id"
                component={SpecificComponentInfo}
              />
              <Route path="/*" component={NotFound} />
            </Switch>
          </Router>
        </DataContextProvider>
      </Suspense>
    </>
  );
};

export default App;
