/**
 * 
 */
import React from 'react';
import { connect } from 'react-redux';  
import store from '../../App/Store.js';

import IssueList from '../../components/Issue/IssueList/IssueList.js';
import CreatenewIssueButton from '../../components/Dashboard/CreateNewIssueButton/CreateNewIssueButton.js';
import Global from '../../components/Global/Global.js';

import { withRouter } from "react-router-dom";

import axios from 'axios';

class IssueListContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
				current: 1,
				issuelistdata: []
		}; 
		this.onPageChange = this.onPageChange.bind(this);
		this.setContainerState = this.setContainerState.bind(this);
	}
	
	componentWillMount() {
		this.fetchData(0);
	}
	
	onClick = () => {
		this.setState({
	      visible: true,
	    });
	}
	
	onClose = () => {
	    this.setState({
	      visible: false,
	    });
	}
	
	setContainerState(target){
		let key=target.id;
		let value=target.value;
		this.setState({
			[key]:value
		})
	}
	
	onSave = () => {
		  var _this = this;
	 	  axios.post(Global.serverpath+'/api/v1/postlogin/issue', 
	 			  {
	 		  			project_id:_this.state.project_id,
	 		  			issue_name:_this.state.name,
				 	  	type:_this.state.issueType,
				 	  	summary:_this.state.summary,
				 	  	priority:_this.state.priority,
				 	  	labels:_this.state.labels,
				 	  	status:"Open",
				 	  	description:_this.state.description,
				 	  	assignee:_this.state.assignee,
				 	  	reporter:this.state.reporter,
				 	  	created_time:new Date().toJSON(),
				 	  	updated_time:new Date().toJSON(),
				 	  	resolved_time:null,
				 	  	estimated:_this.state.estimated,
				 	  	remaining:_this.state.remaining,
				 	  	logged:_this.state.logged
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Create success");
		      _this.setState({
	 	        visible: false,
	 	      });
		      window.location.reload();
	 	  }).catch(function (error) {
	 		 alert("create error"+error);
	 	  });
	    
	  }
	
	fetchData(pageNumber){
		let url = Global.serverpath+'/api/v1/postlogin/issuesByCondition';
		let _this = this;
		if(_this.props===undefined){
			_this.props = {};
		}
   	 	axios.get(url, {
		    params: {
		      project_id:_this.props.project_id,
		      pageNumber:pageNumber,
		      rowNumber:10
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETISSUELISTDATA.payload.data=response.data;
			  handleGETISSUELISTDATA.payload.pageNumber = pageNumber;
			  _this.getIssueCounts()
		  }).catch(function (error) {
			alert("fetch Dataload error");
		  });
	}
	
	onPageChange(pageIndex){
		this.fetchData(pageIndex-1);
		this.setState({
		      current: pageIndex,
		    });
	}
	
	getIssueCounts() {
		let url = Global.serverpath+'/api/v1/postlogin/issueCountsByCondition';
		let _this = this;
   	 	axios.get(url, {
		    params: {
		    	project_id:_this.props.project_id
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETISSUELISTDATA.payload.issueCounts=response.data;
			  store.dispatch(handleGETISSUELISTDATA);
		  }).catch(function (error) {
			alert("load total page number error");
		  });
	}
	
	
	render() {
		const {value} = this.props;  
		
		  const columns = [{
		    Header: 'Type',
		    accessor: 'type' 
		  }, {
		    Header: 'Key',
		    accessor: 'issue_key'
		  }, {
		    Header: 'Name',
		    accessor: 'issue_name'
		  }, {
			  Header: 'Priority',
			  accessor: 'priority'
		  }];
		return (
				
			<div>
				<div className="row">
					<div className="col-2">
					<CreatenewIssueButton onClick={this.onClick} visible={this.state.visible} onClose={this.onClose} onSave={this.onSave} onChangeCallBack={this.setContainerState}/>
					</div>
					<div className="col-10">
						<IssueList 
							project_id={this.props.project_id} 
							data={value._data}
							columns={columns}
							onPageChange={this.onPageChange}
							current={this.state.current}
							total={value.issueCounts}
							history={this.props.history}
						/>
					</div>
				</div>
			</div>
			
		)
	}
	
};

const handleGETISSUELISTDATA = {  
	type:'GETISSUELISTDATA',
    payload:{}
}  



//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { value: state.issuelistdata }  
}  
	  
	//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
//		   handleIncrement:()=>dispatch(handleGETDATA),  
//		   handleDecrement:()=>dispatch(handleDecrement)  
    }  
}  

IssueListContainer = connect(mapStateToProps, mapDispatchToProps)(IssueListContainer)

export default withRouter(IssueListContainer);
