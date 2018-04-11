import React from 'react'
import NewRepoForm  from "./newRepoForm.react";
import {connect} from 'react-redux';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

// var LineChart = require("react-chartjs").Line;
class Dashboard extends React.Component{

    handlePicker = (event)=>{
        alert(6666)
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
                        <Bar dataKey="forks_count" fill="#f4d592" onClick={()=>{alert(data.index)}}/>
                        </BarChart>
                    </center>

                <div className="tile is-ancestor">    
                    {
                        this.props.Dashboard.Repos.map((repo,index)=>{
                            return (                               
                                <div className="tile is-parent" key={index}  >
                                    <article className="tile is-child box is-primary" onDoubleClick={()=>{this.props.removeRepo(index)}}>
                                    <p className="title">{index+1} {repo.repoName}</p>                                   
                                    </article>
                                </div>
                            )
                        })
                    }
                 </div>
                 
                    <NewRepoForm/>
                 
                 
                 {/* <a className="button is-primary" onClick={()=>{this.props.addRepo({"repoName":"Dashboard","star":100})}}>Primary</a> */}
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