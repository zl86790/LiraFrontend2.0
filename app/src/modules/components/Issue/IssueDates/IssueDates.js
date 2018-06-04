import React from 'react';
import Collapse from 'react-collapse';
import './IssueDates.css';
import { connect } from 'react-redux';  
import axios from 'axios';
import Global from '../../Global/Global.js';
import LabelDatePicker from "../../common/LabelDatePicker/LabelDatePicker.js";
import { withRouter } from "react-router-dom";

class IssueDates extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {openIssueDates: true};
		this.showIssueDates = this.showIssueDates.bind(this);
		this.changeUpdateDate = this.changeUpdateDate.bind(this);
		this.changeResolvedTime = this.changeResolvedTime.bind(this);
		this.changeCreatedTime = this.changeCreatedTime.bind(this);
	}

	showIssueDates(event) {
		this.setState({openIssueDates: !this.state.openIssueDates});
	}
	changeCreatedTime(date){
		var _this = this;
		var updateValue = date;
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			created_time:updateValue
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
	changeResolvedTime(date){
		var _this = this;
		var updateValue = date;
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			resolved_time:updateValue
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
	changeUpdateDate(date){
		var _this = this;
		var updateValue = date;
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			updated_time:updateValue
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
		if(value._data===undefined){
			value._data = {};
		}
		
		var openIssueDates = this.state.openIssueDates ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showIssueDates}>Dates&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openIssueDates}>
						<div style={{}} className="container">
					  		<div className="row">Created: <LabelDatePicker initValue={value._data.created_time_formatted} pickerId="created_time" pickerName="created_time" ref="created_time" pickerRef="created_time" callBackFunction={this.changeCreatedTime}/></div>
					  		<div className="row">Updated: <LabelDatePicker initValue={value._data.updated_time_formatted} pickerId="updateDate" pickerName="updateDate" ref="updateDate" pickerRef="updateDate" callBackFunction={this.changeUpdateDate}/></div>
					  		<div className="row">Resolved: <LabelDatePicker initValue={value._data.resolved_time_formatted} pickerId="resolved_time" pickerName="resolved_time" ref="resolved_time" pickerRef="resolved_time" callBackFunction={this.changeResolvedTime}/></div>
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

IssueDates = connect(mapStateToProps, mapDispatchToProps)(IssueDates)  

export default withRouter(IssueDates);