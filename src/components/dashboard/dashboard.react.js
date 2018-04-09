import React from 'react'
import NewRepoForm  from "./newRepoForm.react";
export default class Dashboard extends React.Component{
    render() {
        return (
            <div className="section">
                 <NewRepoForm/>
             </div>
        )
    }
}