import React from 'react'
import NewRepoForm  from "./newRepoForm.react";
import {connect} from 'react-redux'
class Dashboard extends React.Component{
    render() {
        return (
            <div className="section">
                 
                 <NewRepoForm/>
                 <a className="button is-primary" onClick={()=>{this.props.addRepo({"repoName":"Dashboard","star":100})}}>Primary</a>
             </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        Dashboard:state
    }
}
const mapDispatchStateToProps=(dispatch)=>{
    return {
        addRepo:(objRepo)=>{
            dispatch({
                type:"addRepo",
                payload:objRepo
            })
        },
        removeRepo:(indexRepo)=>{
            dispatch({
                type:"removeRepo",
                payload:indexRepo
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchStateToProps)(Dashboard)