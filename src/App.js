import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginContainer from "./Containers/Login/LoginContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
