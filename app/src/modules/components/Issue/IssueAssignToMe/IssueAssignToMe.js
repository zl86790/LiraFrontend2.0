import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import Global from '../../Global/Global.js';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class IssueAssignToMe extends React.Component {
	state = {
		showAssign:true,
		showDone:'none'
	}; 

	constructor(props) {
		super(props);
		this.assign2me = this.assign2me.bind(this);
		this.checkStatus = this.checkStatus.bind(this);
	}
	
	componentWillReceiveProps() {
		setTimeout(this.checkStatus,1)
	}
	
	checkStatus(){
		let url = Global.serverpath+'/api/v1/postlogin/assigneestatus';
		var _this = this;
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
			  if(count===true){
				  _this.setState({
			 			showAssign:'none',
						showDone:true
					});
			  }else{
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