import React from 'react'; 
import './Header.css';
import Form from './Form'; 
import { Grommet } from 'grommet';
import { grommet } from 'grommet/themes'; 

function Header() {
    return (
        <Grommet theme={grommet}>
        <div id="splitscreen">
            <div id="left">
                <h1 id="App-header">SpeakEasy</h1>
                <p></p>
                <p></p>
                <p1 id="landing-sentence">Getting seniors connected to a good conversation, anywhere in the world!</p1>
            </div>

            <div id="right">
                <Form></Form>
            </div>
        </div>
        </Grommet>
    )
}


export default Header
