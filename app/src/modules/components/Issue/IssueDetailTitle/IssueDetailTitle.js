import React from 'react';
import './IssueDetailTitle.css';

import { connect } from 'react-redux';  
import axios from 'axios';
import Global from '../../Global/Global.js';
import LabelInput from "../../common/LabelInput/LabelInput.js";
class IssueDetailTitle extends React.Component {
	
	constructor(props) {
		super(props);
		this.blurLabelInput = this.blurLabelInput.bind(this);
	}
	
	blurLabelInput(value){
		var _this = this;
		var updateValue = value;
		var trimedvalue = value.replace(/(^\s*)|(\s*$)/g,'');
		if(trimedvalue!==''){
			axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
		 			  {
		 		  			id:_this.props.issue_id,
		 		  			issue_name:updateValue
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
		
	}
	

	render() {
		
		const {value} = this.props;  
		if(value._data===undefined){
			value._data = {};
		}
	

		return (
				
			<div>
				<div className="row font-weight-normal">{value._data.project_name} / {value._data.issue_key}</div>
				<h1 className="row font-weight-normal"><LabelInput initValue={value._data.issue_name} inputId="issueName" inputName="issueName" ref="issueName" inputRef="issueName" callBackFunction={this.blurLabelInput} mystyle={{width:1000}}/></h1>
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

IssueDetailTitle = connect(mapStateToProps, mapDispatchToProps)(IssueDetailTitle)  

export default IssueDetailTitle;