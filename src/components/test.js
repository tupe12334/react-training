import React from 'react'

class counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClickD = this.handleClickD.bind(this)
    }
    handleClick(){
        this.setState((prevState) => {
            return{
                count: prevState.count+1
            }
        })
    }
    handleClickD(){
        this.setState((prevState) => {
            return{
                count: prevState.count*2
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>add</button>
                <button onClick={this.handleClickD}>dubel</button>
            </div>
        )
    }
}


export default counter