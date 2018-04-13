import React from "react";
import {fetchRepository} from '../../api/api'
import {connect} from 'react-redux'
class RepoListItem extends React.Component{

    state = {
        repository: {},
        value:123
    }

    componentDidMount () {
        console.log("componentDidMount")
      fetchRepository(this.props.repoName).then((resRepo)=>{
        this.setState({ 
            repository: resRepo
        })
      })
      
    }
    
    render() {
        const { 
            full_name = "Loading...",
            description,
            stargazers_count,
            open_issues_count,
            forks_count,
            watchers_count,
            organization = {},
            homepage
         } = this.state.repository

         return (
             
            <div className="box" onLoad={()=>this.props.addRepo({"repoName":full_name,"star":stargazers_count,"forks_count":forks_count})}>                 
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt="" src={organization.avatar_url}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong><a className="title" href={homepage} target="_blank">
                                { full_name }
                                </a></strong>
                            </p>
                            <p className="subtitle">
                                { description }
                            </p>
                        </div>
                    </div>
                </article>

                <hr/>

                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Stars</p>
                            <a className="title" href="#/frontend-war-react/">{ stargazers_count }</a>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Open Issues</p>
                            <p className="title">{ open_issues_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Forks</p>
                            <p className="title">{ forks_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Watchers</p>
                            <p className="title">{ watchers_count }</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
        
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

export default connect(mapStateToProps,mapDispatchStateToProps)(RepoListItem)