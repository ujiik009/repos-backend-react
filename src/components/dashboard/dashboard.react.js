import React from 'react'
import NewRepoForm  from "./newRepoForm.react";
import {connect} from 'react-redux';
import SweetAlert from 'sweetalert-react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

// var LineChart = require("react-chartjs").Line;
class Dashboard extends React.Component{

    state = {
        alertShow:false,
        tempIndex:null
    }
    handlePicker = (event)=>{
        alert(6666)
    }

    removeConfirm = (tempIndex)=>{
        // alert(tempIndex)
        this.setState({
            tempIndex:tempIndex,
            alertShow:true
        })
    }
          
    render() {
        const data = this.props.Dashboard.Repos
        return (
            <div className="section">                    
                    <center>
                        <BarChart width={750} height={450} data={data}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="repoName"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey="star" fill="#55dba1" onClick={()=>{alert(data.index)}}/>
                        <Bar dataKey="forks_count" fill="#f4d592" onClick={()=>{}}/>
                        </BarChart>
                    </center>

                    {
                        this.props.Dashboard.Repos.map((repo,index)=>{
                            return (                                                       
                                // <div className="tile is-ancestor">    
                                    <span className="tag is-warning is-large list-tag" key={index}>
                                        {index+1} {repo.repoName}
                                        <button className="delete" onClick={()=>{this.removeConfirm(index)}}></button>
                                    </span>
                                    
                                // </div>                 
                            )
                        })
                    }
                <NewRepoForm/>
                <SweetAlert
                        show={this.state.alertShow}
                        type="warning"
                        title="Are you sure you want to delete this Repository?"
                        text=""
                        onConfirm={() => {this.props.removeRepo(this.state.tempIndex);this.setState({alertShow:false,tempIndex:null})} }
                    />
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