import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Register from "./js/pages/user/register";
import Login from "./js/pages/user/login";
import AdminLogin from "./js/pages/admin/login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/admin/login" exact component={AdminLogin} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
