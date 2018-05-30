import React from 'react';
import ReactTable from 'react-table';
import Global from '../Global/Global.js';
import { withRouter } from "react-router-dom";
import 'react-table/react-table.css'
import { connect } from 'react-redux';  
import axios from 'axios';

import store from '../../App/Store.js';

class ShowProjectMid extends React.Component {
	
	componentWillMount() {
		let url = Global.serverpath+'/api/v1/postlogin/projects';
   	 	axios.get(url, {
		    params: {
		      
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETProjectsDATA.payload=response.data;
			  store.dispatch(handleGETProjectsDATA);
		  }).catch(function (error) {
			alert("load error"+JSON.stringify(error));
		  });
	}
	
	render() {
		
		const {value} = this.props;  
		
		  const columns = [{
		    Header: 'Id',
		    accessor: 'id' 
		  }, {
		    Header: 'Name',
		    accessor: 'name'
		  }, {
		    Header: 'Project key',
		    accessor: 'project_key'
		  }, {
			  Header: 'Leader',
			  accessor: 'leader'
		  }, {
			  Header: 'Type',
			  accessor: 'type'
		  }, {
			  Header: 'category',
			  accessor: 'category'
		  }, {
			  Header: 'URL',
			  accessor: 'url'
		  }, {
			  Header: 'Update Time',
			  accessor: 'updated_time_formatted'
		  }];

		return (
				
				<div>
			  	<div className="asstm-table-title">Projects</div>
			  	<ReactTable data={value._data} columns={columns} 
				  	getTdProps={(state, rowInfo, column, instance) => {
				  	    return {
				  	      onClick: (e, handleOriginal) => {
				  	        console.log('A Td Element was clicked!')
				  	        console.log('it produced this event:', e)
				  	        console.log('It was in this column:', column)
				  	        console.log('It was in this row:', rowInfo)
				  	        console.log('It was in this table instance:', instance)
				  	 
				  	        if (handleOriginal) {
				  	          alert(rowInfo.original.id);
				  	          var data = {project_id:rowInfo.original.id};  
					  	      var path = {  
					  	        pathname:'/IssueList',  
					  	        state:data,  
					  	      }  
				  	          this.props.history.push(path);
				  	        }
				  	      }
				  	    }
				  	  }}
			  	/>
			  	</div>
			
		)
	}
	
};

//action  
const handleGETProjectsDATA = {  
    type:'GETPROJECTSDATA'  
}  



function mapStateToProps(state) {  
    return { value: state.projectsdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}

ShowProjectMid = connect(mapStateToProps, mapDispatchToProps)(ShowProjectMid)  

export default withRouter(ShowProjectMid);
