import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes'; 
import Form from './components/Form'; 
import Header from './components/Header'; 

function App() {
  return (
    <Grommet theme={grommet}>
      <Header />
      <Form />
    </Grommet>
  );
}

export default App;
