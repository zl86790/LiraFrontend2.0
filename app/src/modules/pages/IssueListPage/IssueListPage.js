/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from '../../App/Store.js';

import IssueList from '../../components/Issue/IssueList/IssueList.js';
import CreatenewIssueButton from '../../components/Dashboard/CreateNewIssueButton/CreateNewIssueButton.js';
import IssueListContainer from './IssueListContainer.js'

class IssueListPage extends React.Component {
	
	constructor(props) {
		super(props);
		if(this.props.location.state==undefined){
			this.props.location.state = {};
		}
	}
	
	render() {
		return (
				
			<IssueListContainer project_id={this.props.location.state.project_id}/>
			
		)
	}
	
};

export default IssueListPage;
