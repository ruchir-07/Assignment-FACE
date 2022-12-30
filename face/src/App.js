import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from './components/mainPage/home';
import Loading from './components/mainPage/Loading';
function App()
{
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Loading /> */}

      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/new' component={home}></Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
