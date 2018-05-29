import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog/lib/DialogWrap.js';
import Global from '../../Global/Global.js';

import axios from 'axios';
import { withRouter } from "react-router-dom";

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../../App/Store.js';

class IssueAssignToMe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				showAssign:true,
				showDone:'none'
		}; 
		this.assign2me = this.assign2me.bind(this);
		this.checkStatus = this.checkStatus.bind(this);
	}
	
	componentWillReceiveProps() {
		setTimeout(this.checkStatus,1)
	}
	
	checkStatus(){
		let url = Global.serverpath+'/api/v1/postlogin/assigneestatus';
		var _this = this;
		console.log(_this.props);
   	 	axios.get(url, {
		    params: {
		    	assignee_name:_this.props.assignee_name
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  var count = Boolean(response.data);
			  if(count==true){
				  console.log("goto true")
				  _this.setState({
			 			showAssign:'none',
						showDone:true
					});
			  }else{
				  console.log("goto false")
				  _this.setState({
			 			showAssign:true,
						showDone:'none'
					});
			  }
		  }).catch(function (error) {
			alert(error);
		  });
	}
	assign2me(){
		var _this = this;
		alert(_this.props.assignee_name);
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
					assignee:-1,	
					id:_this.props.issue_id,
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		 _this.props.refreshData();
	 		 alert("Update success");
	 		_this.setState({
	 			showAssign:'none',
				showDone:true
			});
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}
	
	
	
	render() {
		return (
			<div>
				<button style={{display:this.state.showAssign}} className="btn btn-primary" onClick={this.assign2me}>Assign To Me</button>
			</div>
		)
		
	}
}


export default withRouter(IssueAssignToMe);