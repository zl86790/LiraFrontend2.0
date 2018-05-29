/**
 * 
 */
import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'rc-dialog/lib/DialogWrap.js';
import Global from '../../Global/Global.js';
import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import axios from 'axios';
import store from '../../../App/Store.js';

class ProjectUserLeader extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {assigneesList: []};  
	}

	
	render() {
		const {value} = this.props;  
		return (
			<select id="leader_id" name="leader_id" className="form-control" required ref="leader_id">
          		{value._data}
          	</select>
		)
	}
	
};

//action  
const handleGETUserDATA = {  
    type:'GETUSERDATA'  
} 

function mapStateToProps(state) {  
    return { value: state.userdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}

ProjectUserLeader = connect(mapStateToProps, mapDispatchToProps)(ProjectUserLeader)

const getAllUsers = function(){
	let url = Global.serverpath+'/api/v1/postlogin/allusers';
	let _this = this;
 	axios.get(url, {
	    params: {
	    	
	    },
	    headers: {
	      "lira_token": Global.getCookie('lira_token')
	    }
	  })
	  .then(function (response) {
		  console.log(response.data);
		  handleGETUserDATA.payload=response.data;
		  store.dispatch(handleGETUserDATA);
	  }).catch(function (error) {
		alert("load error"+JSON.stringify(error));
	  });
}

export {ProjectUserLeader,getAllUsers};