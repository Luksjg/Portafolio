import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Cv from './components/Cv/Cv';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/aboutme' component={AboutMe}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/cv' component={Cv}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
