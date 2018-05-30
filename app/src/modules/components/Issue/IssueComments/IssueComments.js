import React from 'react';
import { connect } from 'react-redux';  
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';

class IssueComments extends React.Component {
	componentDidMount() {
		let url = Global.serverpath+'/api/v1/postlogin/comments';
   	 	axios.get(url, {
		    params: {
		      issue_id:this.props.issue_id
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  handleGETCOMMENTSDATA.payload=response.data;
			  store.dispatch(handleGETCOMMENTSDATA);
		  }).catch(function (error) {
			alert(error);
		  });
	}
	
	render() {

		const {commentsvalue} = this.props;  
		if(commentsvalue._commentsdata===undefined){
			commentsvalue._commentsdata = [];
		}
		let listItemsHtml = "";
//		const listItems = commentsvalue._commentsdata.map(
//				(comments) => 
//				{
//					<div><hr/>{comments.content} {comments.updated_time_formatted}</div>;
//					listItemsHtml += "<div><hr/>"+comments.content+" "+comments.user_name+" "+comments.updated_time_formatted+"</div>";
//				}
//        );  
		console.log(2);
		console.log(listItemsHtml);
		return (
				<div dangerouslySetInnerHTML={createHTML(listItemsHtml)} />
		)
	}
	
};

function createHTML(listItemsHtml) {
  return {__html: listItemsHtml};
}

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

IssueComments = connect(mapStateToProps, mapDispatchToProps)(IssueComments)  

export default IssueComments;

