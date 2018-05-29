/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssuePeople.css';
import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';
import LabelFetchUser from "../../common/LabelFetchUser/LabelFetchUser.js";
import IssueAssignToMe from '../../Issue/IssueAssignToMe/IssueAssignToMe.js'
class IssuePeople extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {openPeople: true};  
		this.showPeople = this.showPeople.bind(this);
		this.changeAssignee = this.changeAssignee.bind(this);
		this.changeReporter = this.changeReporter.bind(this);
	}

	showPeople(event) {
		this.setState({openPeople: !this.state.openPeople});
	}
	
	changeAssignee(value){
		var _this = this;
		console.log(value);
		var updateValue = value.id;
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			assignee:updateValue
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		 _this.props.refreshData();
	 		 alert("Update success");
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}
	
	changeReporter(value){
		var _this = this;
		console.log(value);
		var updateValue = value.id;
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			reporter:updateValue
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		 _this.props.refreshData();
	 		 alert("Update success");
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
	}

	render() {
		const {value} = this.props;
		if(value._data==undefined){
			value._data = new Object();
		}
		var openPeople = this.state.openPeople ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showPeople}>People&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openPeople}>
						<div style={{}}>
					  		<div>Assignee: <LabelFetchUser initValue={value._data.assignee_name} fuId="assigneeFetcher" issue_id={this.props.issue_id} ref="assigneeFetcher" callBackFunction={this.changeAssignee}/></div>
					  		<div><IssueAssignToMe issue_id={this.props.issue_id} refreshData={this.props.refreshData} assignee_name={value._data.assignee_name}/></div>
					  		<div>Reporter: <LabelFetchUser initValue={value._data.reporter_name} fuId="reporterFetcher" issue_id={this.props.issue_id} ref="reporterFetcher" callBackFunction={this.changeReporter}/></div>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
};

function mapStateToProps(state) {  
  return { value: state.issuedata }  
}  

function mapDispatchToProps(dispatch){  
  return{  
  }  
}  

IssuePeople = connect(mapStateToProps, mapDispatchToProps)(IssuePeople)

export default IssuePeople;