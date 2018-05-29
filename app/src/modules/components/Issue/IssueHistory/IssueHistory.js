import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';


var callback = function(key){
	 
}



class IssueHistories extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let url = Global.serverpath+'/api/v1/postlogin/issuehistories';
   	 	axios.get(url, {
		    params: {
		      issue_id:57
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETHISTORIESDATA.payload=response.data;
			  store.dispatch(handleGETHISTORIESDATA);
		  }).catch(function (error) {
			alert(error);
		  });
	}
	
	render() {

		const {historiesvalue} = this.props;  
		if(historiesvalue._historiesdata==undefined){
			historiesvalue._historiesdata = [];
		}
		
		const listItems = historiesvalue._historiesdata.map((history) =>   
          <div><hr/>{history.operator} {history.action} {history.updated_time_formatted}</div>  
        );  
		
		return (
				
				<div>{listItems}</div>
			
		)
	}
	
};

const handleGETHISTORIESDATA = {  
	type:'GETHISTORIESDATA'  
}  

function mapStateToProps(state) {  
    return { historiesvalue: state.historiesdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueHistories = connect(mapStateToProps, mapDispatchToProps)(IssueHistories)  

export default IssueHistories;

