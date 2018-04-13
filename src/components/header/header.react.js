import React from 'react'
import './header.css'
export default class Header extends React.Component{

    state = {
        value : 0
    }

    heandleChen = (event)=>{
        this.setState({
            value:event.target.value
        })
    }

    render() {
    
        return (
                      
            <div className="section">
                <center>
                    <h1><a className="title is-1" ><span className="word-start">Source</span>Work</a></h1>
                    
                    <h2 className="subtitle is-3">FrontEnd War Hero of FrontEnd</h2>
                </center>
            </div>
             
        )
    }
}