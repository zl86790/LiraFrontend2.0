/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import './IssueTimeTrack.css';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';

class IssueTimeTrack extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {openIssueTimeTrack: true};  
		this.showIssueTimeTrack = this.showIssueTimeTrack.bind(this);
	}

	showIssueTimeTrack(event) {
		this.setState({openIssueTimeTrack: !this.state.openIssueTimeTrack});
	}

	render() {
		const {value} = this.props;
		if(value._data==undefined){
			value._data = new Object();
		}
		
		var openIssueTimeTrack = this.state.openIssueTimeTrack ? true : false;
		return (
			<div style={{textAlign:'left'}}>
				<div style={{float:'left'}} onClick={this.showIssueTimeTrack}> Time Track&nbsp;&nbsp;&nbsp;</div>
				<div style={{float:'left',borderBottom:'1px solid #AAAAAA',width:'50%',marginTop:'-10px'}}>&nbsp;</div>
				<div style={{clear:'both'}} ></div>
				<div>
					<Collapse isOpened={openIssueTimeTrack}>
						<div style={{}}>
					  		<div>Estimated: {value._data.estimated}h</div>
					  		<div>Remaining: {value._data.remaining}h</div>
					  		<div>Logged: {value._data.logged}h</div>
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

IssueTimeTrack = connect(mapStateToProps, mapDispatchToProps)(IssueTimeTrack)  

export default IssueTimeTrack;