import React from 'react'
import RepoListItem from './repoListItem.react'

export default class RepoList extends React.Component{
    state = {
        repos:this.props.repos,
        repositorys:[]
    }    

    constructor(props){
      super(props)
      console.log(this.props);
      
    }

    render() {
      const listRepo =  this.props.repos.map((repoName,index)=>{
          return <RepoListItem key={repoName} repoName={repoName}/>                                
        })
      return (
          
        <div>          
          {                         
            listRepo
          }
        </div>
      )
    }
}