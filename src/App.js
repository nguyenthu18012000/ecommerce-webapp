import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.css';
import Register from './js/pages/user/register';
import Login from './js/pages/user/login';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;
