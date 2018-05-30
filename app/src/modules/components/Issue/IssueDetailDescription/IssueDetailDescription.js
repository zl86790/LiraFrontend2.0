/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssueDetailDescription.css';
import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import store from '../../../App/Store.js';
import Global from '../../Global/Global.js';
import {SimditorTextarea} from './IssueDescriptionSimditorTextarea.js';

class IssueDetailDescription extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
				openDescription: true,
				descriptionEditDisplay: 'none',
				descriptionDisplay: true
		};  
		this.showDescription = this.showDescription.bind(this);
		this.clickDescription = this.clickDescription.bind(this);
		this.blurDescription = this.blurDescription.bind(this);
		this.cancelEditDescription = this.cancelEditDescription.bind(this);
	}

	showDescription(event) {
		this.setState({openDescription: !this.state.openDescription});
	}
	
	clickDescription(){
		this.setState({
			descriptionDisplay:'none',
			descriptionEditDisplay:true
		});
		
		console.log(this.props);
		this.refs.descriptionEdit.setDesEditValue(this.props.value._data.description);
	}
	cancelEditDescription(){
		this.setState({
			descriptionDisplay:true,
			descriptionEditDisplay:'none'
		});
	}
	blurDescription(){
		var _this = this;
		var descriptionValue = this.refs.descriptionEdit.getValue();
		axios.post(Global.serverpath+'/api/v1/postlogin/updateIssue', 
	 			  {
	 		  			id:_this.props.issue_id,
	 		  			description:descriptionValue
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Update success");
	 		  _this.setState({
	 			descriptionDisplay:true,
	 			descriptionEditDisplay:'none'
	 		  });
	 		  _this.props.refreshData();
		      window.location.reload();
	 	  }).catch(function (error) {
	 		 alert("Update error"+error);
	 	  });
		
		
		console.log("blurDescription");
	}

	render() {
		const {value} = this.props;  
		if(value._data==undefined){
			value._data = new Object();
		}
	
		var openDescription = this.state.openDescription ? true : false;
		return (
			<div className="issueDetailDescriptionDiv">
				<div style={{float:'left'}} onClick={this.showDescription}>Description&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'85%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openDescription}>
						<div style={{height:200,display:this.state.descriptionDisplay}} onClick={this.clickDescription} >
							<div dangerouslySetInnerHTML={createHTML(value._data.description)} />
					  	</div>
					  	<div style={{display:this.state.descriptionEditDisplay}}>
					  		<SimditorTextarea id="description" ref="descriptionEdit"/>
					  		<button type="button" onClick={this.blurDescription}>Save</button>
					  		<button type="button" onClick={this.cancelEditDescription}>Cancel</button>
					  	</div>
					</Collapse>
				</div>
			</div>
			
		)
	}
	
};

function createHTML(description) {
  return {__html: description};
}

function mapStateToProps(state) {  
    return { value: state.issuedata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueDetailDescription = connect(mapStateToProps, mapDispatchToProps)(IssueDetailDescription)  

export default IssueDetailDescription;