import React from 'react'
import RepoListItem from './repoListItem.react'

export default class RepoList extends React.Component{
    state = {
        repos:this.props.repos,
        repositorys:[]
    }    

    render() {
      return (
          
        <div>          
          {                         
            this.props.repos.map((repoName,index)=>{
        
                return <RepoListItem key={repoName} repoName={repoName}/>
                                
            })
          }
        </div>
      )
    }
}