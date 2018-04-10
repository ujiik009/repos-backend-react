import React from 'react'
import NewRepoForm  from "./newRepoForm.react";
import {connect} from 'react-redux'
class Dashboard extends React.Component{
    render() {
        return (
            <div className="section">
                <div className="tile is-ancestor">    
                    {
                        this.props.Dashboard.Repos.map((repo,index)=>{
                            return (                               
                                <div className="tile is-parent" key={index} >
                                    <article className="tile is-child box is-primary">
                                    <p className="title">{index+1} {repo.repoName}</p>                                   
                                    </article>
                                </div>
                            )
                        })
                    }
                 </div>
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