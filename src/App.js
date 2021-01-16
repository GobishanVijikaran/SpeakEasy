import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes'; 
import Form from './components/Form'; 
import Header from './components/Header';
import CallCenter from './components/Dashboard/CallCenter'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Grommet theme={grommet}>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Header} />
            <Route exact path='/user' component={Form} />
            <Route exact path='/history' component={CallCenter} />
          </Switch>
        </BrowserRouter>
      </div>
    </Grommet>
  );
}

export default App;
