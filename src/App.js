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
          <Route path="/admin" component={AdminComponent} />
          <Route path="/" component={UserComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
