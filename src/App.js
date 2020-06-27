import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

class App extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        )
    }
}
export let UserName="ofek";


export default App;