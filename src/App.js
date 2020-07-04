import React from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Sidebar from './components/sideBar'
import Loginout from './components/loginout'

class App extends React.Component{
    constructor(){
        const items = [
            { name: "home", label: "test" },
            { name: "billing", label: "Billing" },
            { name: "settings", label: "Settings" },
          ];
        super()
        this.state={
            screens:[<Main/>,<Sidebar items={items}/>],
            count:0
        }
    }
    render(){
        const clickHandeler=()=>{
            this.setState((prevState)=>{
                let mid=0
                if (this.state.count===0) {
                    mid =1
                }
                else{
                    mid =0
                }
                return{
                    count:mid
                }
            })
        }
        return (
            <div>
                <Header/>
                <Main/>
                <Footer/>
                <Loginout/>
            </div>
        )
    }
}
export let UserName="ofek";


export default App;