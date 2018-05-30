import React from 'react';
import axios from 'axios';
import Global from '../Global/Global.js';
import {  withRouter } from "react-router-dom";
import FetchUsers from '../User/FetchUsers.js';
import 'react-select/dist/react-select.css';

class CreateProjectMid extends React.Component {
	componentWillMount() {
//		getAllUsers();
	}
	createProject = () => {
		  var _this = this;
		  let projectName = this.refs.projectName.value;
		  let projectKey = this.refs.projectKey.value;
		  let projectLeader = this.refs.projectLeader.state.value.id;
		  let projectType = this.refs.projectType.value;
		  let projectCategory = this.refs.projectCategory.value;
		  let projectUrl = this.refs.projectUrl.value;
	 	  axios.post(Global.serverpath+'/api/v1/postlogin/project',
	 			  {
	 		  			name:projectName,
	 		  			project_key:projectKey,
	 		  			leader:projectLeader,
	 		  			type:projectType,
	 		  			category:projectCategory,
	 		  			url:projectUrl,
	 		  			updated_time:new Date().toJSON()
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Create success");
	 		 _this.props.history.push('/ShowProject');
	 	  }).catch(function (error) {
	 		 alert("create error"+error);
	 	  });
	}
	
	
	render() {

		return (
				
		      <div style={{textAlign:'left',paddingTop:5}}>
		      	<label for="projectName">Project Name</label>
		      	<input type="text" className="form-control" id="projectName" placeholder="Project Name" defaultValue="" required ref="projectName"/>
		      	<div class="invalid-feedback">
		      		Valid project name is required.
                </div>
		      	
		      	<label for="projectName">Project Key</label>
		      	<input type="text" className="form-control" id="projectKey" placeholder="Project Key" defaultValue="" required ref="projectKey"/>
		      	<div class="invalid-feedback">
		      		Valid project key is required.
                </div>
		      	
		      	<label for="projectLeader">Project Leader</label>
		      	<FetchUsers ref="projectLeader"/>
		      	<div class="invalid-feedback">
		      		Valid project leader is required.
                </div>
		      	
		      	<label for="projectType">Project Type</label>
		      	<input type="text" className="form-control" id="projectType" placeholder="Project Type" defaultValue="" required ref="projectType"/>
		      	<div class="invalid-feedback">
		      		Valid project type is required.
                </div>
		      	
		      	<label for="projectCategory">Project Category</label>
		      	<input type="text" className="form-control" id="projectCategory" placeholder="Project Category" defaultValue="" required ref="projectCategory"/>
		      	<div class="invalid-feedback">
		      		Valid project category is required.
                </div>
		      	
		      	<label for="projectUrl">Project URL</label>
		      	<input type="text" className="form-control" id="projectUrl" placeholder="Project URL" defaultValue="" required ref="projectUrl"/>
		      	<div class="invalid-feedback">
		      		Valid project url is required.
                </div>
		      	
		      	<button id="createProjectButton" className="btn btn-lg btn-primary btn-block" type="button" onClick={this.createProject.bind(this)}>Create Project</button>
		      </div>
			
		)
	}
	
};

export default withRouter(CreateProjectMid);
