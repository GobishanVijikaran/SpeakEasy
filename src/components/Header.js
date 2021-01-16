import React from 'react'; 
import './Header.css';
import Form from './Form'; 

function Header() {
    return (
        <div id="splitscreen">
            <div id="left">
                <h1 id="App-header">Meezer</h1>
                <p></p>
                <p></p>
                <p1 id="landing-sentence">A place for people of all ages to connect.</p1>
            </div>

            <div id="right">
                <Form></Form>
            </div>
        </div>

    )
}

export default Header
