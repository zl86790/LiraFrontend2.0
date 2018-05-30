/**
 * 
 */
import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import Global from '../../Global/Global.js';
import axios from 'axios';

class IssueType extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {issueTypeList: []};  
	}

	componentWillMount() {
		let url = Global.serverpath+'/api/v1/postlogin/sysparameters';
		let _this = this;
	 	axios.get(url, {
		    params: {
		      module_key:'lira-issue',
		      value_key:'issue-type'
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  _this.setState({
				  issueTypeList: response.data
				});
		  }).catch(function (error) {
			alert("load error"+JSON.stringify(error));
		  });
	};
	
	generateIssueTypeOptions = () => {
        const issueTypeListOptions = this.state.issueTypeList.length === 0 ? [] : this.state.issueTypeList;
        if (!issueTypeListOptions || issueTypeListOptions.length === 0) {
            return <option value="No data" key='-1'>No data</option>
        }
        return issueTypeListOptions.map((doc,idx) =>
            (
                <option  key={idx}  value={doc.value_content}>{doc.value_content}</option>
            ))

    };
	
	render() {
		const issueTypes = this.generateIssueTypeOptions();
		return (
			<select id="issueType" name="issueType" className="form-control" required ref="issueType" onChange={(e)=>this.props.onChangeCallBack(e.target)}>
          		{issueTypes}
          	</select>
		)
	}
	
};

export default IssueType;