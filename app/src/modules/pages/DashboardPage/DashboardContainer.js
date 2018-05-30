/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './DashboardPage.css';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../App/Store.js';

import AssignedToMeDiv from '../../components/Dashboard/AssignedToMe/AssignedToMe.js';
import CreatenewIssueButton from '../../components/Dashboard/CreateNewIssueButton/CreateNewIssueButton.js';

import axios from 'axios';
import Global from '../../components/Global/Global.js';

class DashboardContainer extends React.Component {
	constructor(props) {
		super(props);
		this.setContainerState = this.setContainerState.bind(this);
	}
	state = {
	    visible: false,
	    destroyOnClose: true,
	};
	
	onClick = () => {
		this.setState({
	      visible: true,
	    });
	    
	}
	
	onClose = () => {
	    this.setState({
	      visible: false,
	    });
	}
	
	setContainerState(target){
		let key=target.id;
		let value=target.value;
		this.setState({
			[key]:value
		})
		console.log(this.state);
	}
	
	onSave = () => {
		  var _this = this;
		  var qs = require('qs');
	 	  axios.post(Global.serverpath+'/api/v1/postlogin/issue', 
	 			  {
	 		  			project_id:_this.state.project_id,
	 		  			issue_name:_this.state.name,
				 	  	type:_this.state.issueType,
				 	  	summary:_this.state.summary,
				 	  	priority:_this.state.priority,
				 	  	labels:_this.state.labels,
				 	  	status:"Open",
				 	  	description:_this.state.description,
				 	  	assignee:_this.state.assignee,
				 	  	reporter:this.state.reporter,
				 	  	created_time:new Date().toJSON(),
				 	  	updated_time:new Date().toJSON(),
				 	  	resolved_time:null,
				 	  	estimated:_this.state.estimated,
				 	  	remaining:_this.state.remaining,
				 	  	logged:_this.state.logged
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Create success");
		      _this.setState({
	 	        visible: false,
	 	      });
		      window.location.reload();
	 	  }).catch(function (error) {
	 		 alert("create error"+error);
	 	  });
	    
	  }
	
	render() {
		return (
				
			<div>
				<div className="row">
					<div className="col-2" id="createnewIssueButtonDiv">
						<CreatenewIssueButton onClick={this.onClick} visible={this.state.visible} onClose={this.onClose} onSave={this.onSave} onChangeCallBack={this.setContainerState}/>
					</div>
					<div className="col-10">
						<AssignedToMeDiv />
					</div>
				</div>
			</div>
			
		)
	}
	
};

export default DashboardContainer;