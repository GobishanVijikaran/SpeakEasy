import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes'; 
import SignUpForm from './components/Home/SignUpForm'; 
import Header from './components/Home/Header';
import HomePage from './components/Home/HomePage'; 
import CallCenter from './components/Dashboard/CallCenter'; 
import CallHistory from './components/Dashboard/CallHistory'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Grommet theme={grommet}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route exact path='/login' component={SignUpForm} />
          <Route exact path='/home' component={CallCenter} />
          <Route exact path='/history' component={CallHistory} />
        </Switch>
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
