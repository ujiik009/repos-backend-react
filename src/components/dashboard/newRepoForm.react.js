import React from 'react';
import RepoList from './repoList.react';
import SweetAlert from 'sweetalert-react';
export default class NewRepoForm extends React.Component{

    state = {
        // repos:["symfony/symfony","laravel/laravel","phalcon/cphalcon"],
        repos:["facebook/react","Polymer/polymer","vuejs/vue","angular/angular"],
        repoText:"",
        alertShow:false
    }

    handleChange = (event)=>{
        this.setState({
            repoText:event.target.value
        })
    }

    handleKeyPress = (event) =>{
        if(event.keyCode === 13){
            if(this.state.repoText === ""){
                this.setState({
                    alertShow:true
                })
            }else{
                this.addRepo();
            }
        }
    }

    addRepo = ()=>{
        this.setState({
            repos:this.state.repos.concat(this.state.repoText),
            repoText:""
        })
        
    }

    removeRepo = (index)=>{
       
        const curRepo = this.state.repos;
        curRepo.splice(index,1);
        this.setState({
            repos:curRepo
        })
    }

    render() {
        return (
            <div className="section">
                <div className="tile is-ancestor">                    
                    {/* {
                        this.state.repos.map((repo,index)=>{
                            return (
                                <div className="tile is-parent" key={index} onDoubleClick={this.removeRepo.bind(this,index)}>
                                    <article className="tile is-child box is-primary">
                                    <p className="title">{index+1} {repo}</p>                                   
                                    </article>
                                </div>
                            )
                        })
                    }                    */}
                </div>
                                        
                    <div className="field">
                        <label className="label">Add Repository</label>
                        <p className="control">
                            <input className="input is-large" type="text" value={this.state.repoText} onChange={this.handleChange} onKeyUp={this.handleKeyPress} placeholder="Enter Repository Name"/>
                        </p>
                    </div>


                    <RepoList repos={this.state.repos}/>
                    <SweetAlert
                        show={this.state.alertShow}
                        type="error"
                        title="Enter Repository Name"
                        text=""
                        onConfirm={() => this.setState({ alertShow: false })}
                    />
                
            </div>
        )
    }
}