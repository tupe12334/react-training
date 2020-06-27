import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {

    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}


export function change(event) {
  this.setState({value: event.target.value});
}

export let UserName="hi";


export default App;