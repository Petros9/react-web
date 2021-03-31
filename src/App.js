import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Group from './components/pages/Group';
import Metals from './components/pages/articles/Metals';
import EnvA from './components/pages/articles/EnvA';
import EnvB from './components/pages/articles/EnvB';
import Publications from './components/pages/articles/Publications';
import AK from './components/pages/group/AK';
import IW from './components/pages/group/IW';
import EW from './components/pages/group/EW';

function App() {
  return (
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component={Home}/>
       <Route path='/group' component={Group} />
       <Route path='/metals' component={Metals} />
       <Route path='/publications' component={Publications} />
       <Route path='/enva' component={EnvA} />
       <Route path='/envb' component={EnvB} />
       <Route path='/ak' component={AK} />
       <Route path='/iw' component={IW} />
       <Route path='/ew' component={EW} />
     </Switch>
    </Router>
  );
}

export default App;
