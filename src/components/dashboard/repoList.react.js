import React from 'react'
import RepoListItem from './repoListItem.react'
export default class RepoList extends React.Component{
    state = {
        repos:this.props.repos
    }

    constructor(props){
        super(props)
        this.props.repos.reverse()
    }
    render() {
      return (
        <div>
           
          {
              this.props.repos.map((repoName,index)=>{
              return <RepoListItem repoName={repoName}/>
              })
          }
        </div>
      )
    }
}