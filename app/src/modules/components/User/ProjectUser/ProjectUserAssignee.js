/**
 * 
 */
import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import Global from '../../Global/Global.js';
import { connect } from 'react-redux';  
import axios from 'axios';
import store from '../../../App/Store.js';

class ProjectUserAssignee extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {assigneesList: []};  
	}

	
	render() {
		const {value} = this.props;  
		return (
			<select id="assignee_id" name="assignee_id" className="form-control" required ref="assignee_id">
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

ProjectUserAssignee = connect(mapStateToProps, mapDispatchToProps)(ProjectUserAssignee)

const doLogic = function(project_id){
	let url = Global.serverpath+'/api/v1/postlogin/users';
 	axios.get(url, {
	    params: {
	    	project_id:project_id,
	    },
	    headers: {
	      "lira_token": Global.getCookie('lira_token')
	    }
	  })
	  .then(function (response) {
		  handleGETUserDATA.payload=response.data;
		  store.dispatch(handleGETUserDATA);
	  }).catch(function (error) {
		alert("load error"+JSON.stringify(error));
	  });
}

export {ProjectUserAssignee,doLogic};