import React from 'react';
import RepoList from './repoList.react';
import SweetAlert from 'sweetalert-react';
import { connect } from "react-redux";
class NewRepoForm extends React.Component{

    state = {
        repos:["symfony/symfony","laravel/laravel","phalcon/cphalcon"],
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
        
        this.props.addinitRepo(this.state.repoText)
        this.setState({           
            repoText:""
        })

        
    }

    removeRepo = (index)=>{
       
        // const curRepo = this.state.repos;
        // curRepo.splice(index,1);
        // this.setState({
        //     repos:curRepo
        // })

        this.props.removeinitRepo(index);
    }

    render() {
        return (
            <div className="section">
                <div className="tile is-ancestor">                    
                    
                </div>
                                        
                    <div className="field">
                        <label className="label">Add Repository</label>
                        <p className="control">
                            <input className="input is-large" type="text" value={this.state.repoText} onChange={this.handleChange} onKeyUp={this.handleKeyPress} placeholder="Enter Repository Name"/>
                        </p>
                    </div>


                    <RepoList repos={this.props.Dashboard.initRepo}/>
                    <SweetAlert
                        show={this.state.alertShow}
                        type="error"
                        title="Enter Repository Name"
                        text=""
                        onConfirm={() => this.setState({ alertShow: false })}
                    />
                
            </div>
        )

        
    }// method render
    
    
    
    
}// end class
    const mapStateToProps=(state)=>{
        return {
            Dashboard:state
        }
    }

    const mapDispatchStateToProps=(dispatch)=>{
        return {
            addinitRepo:(repoName)=>{
                dispatch({
                    type:"addinitRepo",
                    payload:repoName
                })
            },
            removeinitRepo:(indexRepo)=>{
                dispatch({
                    type:"removeinitRepo",
                    payload:indexRepo
                })
            }        
        }
        
    }

export default connect(mapStateToProps,mapDispatchStateToProps)(NewRepoForm)


