import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Aboutme from './views/Aboutme/Aboutme';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}  /> 
          <Route exact path="/home" component={Home} /> 
          <Route exact path="/home/:id" component={Detail} /> 
          <Route exact path="/create" component={Form} /> 
          <Route exact path="/about" component={Aboutme} /> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
