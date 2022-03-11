import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import AdminComponent from "./js/AdminRoute";
import UserComponent from "./js/UserRoute";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/admin" exact component={AdminComponent} />
          <Route path="/" exacr component={UserComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
