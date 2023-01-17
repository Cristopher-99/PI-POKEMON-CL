import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={()=> <Landing/>}  /> 
        <Route exact path="/home" render={()=> <Home/>}  /> 
        <Route exact path="/home/:id" render={()=> <Detail/>}  /> 
        <Route exact path="/create" render={()=> <Form/>}  /> 

      </Switch>
    </div>
  );
}

export default App;
