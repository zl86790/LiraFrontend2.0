
import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog/lib/DialogWrap.js';
import Global from '../../Global/Global.js';
import AssignedToMeDiv from '../AssignedToMe/AssignedToMe.js';

import axios from 'axios';
import store from '../../../App/Store.js';
import './CreateNewIssueButton.css';

import IssueType from '../../Issue/IssueType/IssueType.js';
import ProjectSelect from '../../Project/ProjectSelect.js';

import FetchUsers from '../../User/FetchUsers.js';
import DbSelect from '../../common/Select/DbSelect.js';


const CreateNewIssueButton = (props) => 
<div style={{ margin: 20 }}>
	<p>
	  <button className="btn btn-primary" onClick={props.onClick}>Create</button>
	</p>
	<Dialog
    	visible={props.visible}
    	animation="zoom"
    	maskAnimation="fade"
    	onClose={props.onClose}
    	style={{ width: 600 }}
    	title={<div>Create New Issue</div>}
	    footer={
	      [
	        <button
	          type="button"
	          className="btn btn-default"
	          key="close"
	          onClick={props.onClose}
	        >
	        Close
	        </button>,
	        <button
	          type="button"
	          className="btn btn-primary"
	          key="save"
	          onClick={props.onSave}
	        >
	        Save changes
	        </button>,
	      ]
	    }
	>
		<div>
			<h4>Overflowing text to show scroll behavior</h4>
			<br/>
			<div className="create-new-issue-label" style={{paddingTop:45}}>Project:</div>
			<div className="create-new-issue-content" style={{paddingTop:45}}>
			<ProjectSelect onChangeCallBack={props.onChangeCallBack}/>
		</div>
    
	    <div className="create-new-issue-label" style={{}}>Issue Type:</div>
	      <div className="create-new-issue-content" style={{}}>
	      <IssueType onChangeCallBack={props.onChangeCallBack}/>
	    </div>
	    	
	    <div className="create-new-issue-label" style={{}}>Name:</div>
	      <div className="create-new-issue-content" style={{}}>
	      <input type="text" id="name" className="form-control" placeholder="Name" required autoFocus defaultValue="" onChange={(e)=>props.onChangeCallBack(e.target)}/>
	    </div>
	    	
	    <div className="create-new-issue-label" style={{}}>Summary:</div>
	      <div className="create-new-issue-content" style={{}}>
	      <input type="text" id="summary" className="form-control" placeholder="Summary" required defaultValue="" onChange={(e)=>props.onChangeCallBack(e.target)}/>
	    </div>
		
		<div className="create-new-issue-label" style={{}}>Priority:</div>
	      <div className="create-new-issue-content" style={{}}>
	  	  <DbSelect selectId="priority" loadByDb="true" module_key="lira-issue" value_key="issue-priority" selectRef="issuePriority" onChangeCallBack={props.onChangeCallBack}/>
	    </div>
	  	
		<div className="create-new-issue-label" style={{}}>Description:</div>
		  <div className="create-new-issue-content" style={{}}>
		  <input type="text" id="description" className="form-control" placeholder="Description" required defaultValue="" onChange={(e)=>props.onChangeCallBack(e.target)}/>
		</div>	
	  
		<div className="create-new-issue-label" style={{}}>Assignee:</div>
		  <div className="create-new-issue-content" style={{}}>
		  <FetchUsers onChangeCallBack={props.onChangeCallBack} keyInState="assignee"/>
		 </div>
	  	
		<div className="create-new-issue-label" style={{}}>Reporter:</div>
		  <div className="create-new-issue-content" style={{}}>
		  <FetchUsers onChangeCallBack={props.onChangeCallBack} keyInState="reporter"/>
	  	</div>
	      	
		<div className="create-new-issue-label" style={{}}>Labels:</div>
		  <div className="create-new-issue-content" style={{}}>
		  <input type="text" id="labels" className="form-control" placeholder="Labels" required defaultValue="" onChange={(e)=>props.onChangeCallBack(e.target)}/>
		</div>
	  	
		<div className="create-new-issue-label" style={{}}>Estimated:</div>
		  <div className="create-new-issue-content" style={{}}>
		  <input type="text" id="estimated" className="form-control" placeholder="Estimated" required defaultValue="" onChange={(e)=>props.onChangeCallBack(e.target)}/>
		</div>
	  
		<div className="create-new-issue-label" style={{}}>Remaining:</div>
		  <div className="create-new-issue-content" style={{}}>
		  <input type="text" id="remaining" className="form-control" placeholder="Remaining" required defaultValue="" onChange={(e)=>props.onChangeCallBack(e.target)}/>
		</div>
	  		
		<div className="create-new-issue-label" style={{}}>Logged:</div>
		  <div className="create-new-issue-content" style={{}}>
		  	<input type="text" id="logged" className="form-control" placeholder="Logged" required defaultValue="" onChange={(e)=>props.onChangeCallBack(e.target)}/>
		  </div>
		</div>
	</Dialog>
</div>
export default CreateNewIssueButton;