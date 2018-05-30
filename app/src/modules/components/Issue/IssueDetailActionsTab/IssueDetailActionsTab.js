import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import { connect } from 'react-redux';  
import axios from 'axios';
import store from '../../../App/Store.js';

import "./IssueDetailActionsTab.css";
import IssueComments from "../IssueComments/IssueComments.js";
import IssueHistory from "../IssueHistory/IssueHistory.js";
import IssueWatcher from "../IssueWatcher/IssueWatcher.js";

import Global from '../../Global/Global.js';
import IssueCommentsSimditorTextarea from '../IssueComments/IssueCommentsSimditorTextarea.js';

var callback = function(key){
	 
}



class IssueDetailActionsTab extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}; 
		this.setIssueWatcher = this.setIssueWatcher.bind(this);
		this.addComment = this.addComment.bind(this);
	}
	
	componentDidMount() {
	}
	
	setIssueWatcher(ref){
		this.setState({
			iw:ref
		});
	}
	
	addComment(event) {
		var _this = this;
		axios.post(Global.serverpath+'/api/v1/postlogin/comments', 
	 			  {
					content:_this.refs.issueCommentsSimditorTextarea.refs.textarea.value,
					issue_id:this.props.issue_id,
					user_id:1
	 			  }, 
	 			  {
			 	    headers: {
			 	    	"lira_token": Global.getCookie('lira_token')
			 	    }
	 			  }
	 	  ).then(function (response) {
	 		  alert("Create success");
		      let url = Global.serverpath+'/api/v1/postlogin/comments';
		   	 	axios.get(url, {
				    params: {
				    	issue_id:_this.props.issue_id
				    },
				    headers: {
				      "lira_token": Global.getCookie('lira_token')
				    }
				  })
				  .then(function (response) {
					  handleGETCOMMENTSDATA.payload=response.data;
					  store.dispatch(handleGETCOMMENTSDATA);
				  }).catch(function (error) {
					alert("load error");
				  });
	 	  }).catch(function (error) {
	 		 alert("create error"+error);
	 	  });
		
	}
	
	render() {

		return (
				<div>
					<div>
						<Tabs
					      defaultActiveKey="1"
					      onChange={callback}
					      renderTabBar={()=><ScrollableInkTabBar />}
					      renderTabContent={()=><TabContent />}
					    >
					      <TabPane tab='Comments' key="1">
					      	<IssueComments issue_id={this.props.issue_id}/>
					      </TabPane>
					      <TabPane tab='History' key="2">
					      	<IssueHistory />
					      </TabPane>
					      <TabPane tab='Watchers' key="3">
					      	<IssueWatcher issue_id={this.props.issue_id}/>
					      </TabPane>
					    </Tabs>
				    </div>
			    	<div className="col-7 text-left" style={{paddingTop:15}}>
			    		<IssueCommentsSimditorTextarea ref="issueCommentsSimditorTextarea"/>
			    	</div>
			    	<a id="add-comment" title="Add comment" className="iss-detail-ti-button" onClick={this.addComment}>Add</a>
			    </div>
		)
	}
	
};

const handleGETCOMMENTSDATA = {  
	type:'GETCOMMENTSDATA'  
}  

function mapStateToProps(state) {  
    return { commentsvalue: state.commentsdata }  
}  
  
function mapDispatchToProps(dispatch){  
    return{  
    }  
}  

IssueDetailActionsTab = connect(mapStateToProps, mapDispatchToProps)(IssueDetailActionsTab)  

export default IssueDetailActionsTab;

