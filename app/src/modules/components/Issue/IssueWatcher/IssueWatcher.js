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



class IssueWatchers extends React.Component {
	
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let url = Global.serverpath+'/api/v1/postlogin/issuewatchers';
		var _this = this;
   	 	axios.get(url, {
		    params: {
		      issue_id:_this.props.issue_id
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETWATCHERSDATA.payload=response.data;
			  store.dispatch(handleGETWATCHERSDATA);
		  }).catch(function (error) {
			alert(error);
		  });
	}
	
	render() {

		const {watchersvalue} = this.props;  
		if(watchersvalue._watchersdata==undefined){
			watchersvalue._watchersdata = [];
		}
		
		const listItems = watchersvalue._watchersdata.map((watcher) =>   
          <div><hr/>{watcher.name}</div>  
        );  
		
		return (
				
				<div>{listItems}</div>
			
		)
	}
	
};

const handleGETWATCHERSDATA = {  
	type:'GETWATCHERSDATA'  
}  

function mapStateToProps(state) {  
    return { watchersvalue: state.watchersdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueWatchers = connect(mapStateToProps, mapDispatchToProps)(IssueWatchers)  

export default IssueWatchers;

