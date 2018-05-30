/**
 * 
 */
import 'rc-dialog/assets/bootstrap.css';
import React from 'react';
import Global from '../Global/Global.js';
import axios from 'axios';
import {doLogic} from '../User/ProjectUser/ProjectUserAssignee.js';

class ProjectSelect extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {projectList: []};  
	}

	componentWillMount() {
		let url = Global.serverpath+'/api/v1/postlogin/projects';
		let _this = this;
	 	axios.get(url, {
		    params: {
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  _this.setState({
				  projectList: response.data
				});
			  doLogic(_this.refs.project_id.value);
		  }).catch(function (error) {
			alert("load error"+JSON.stringify(error));
		  });
	};
	
	generateProjectListOptions = () => {
        const projectListOptions = this.state.projectList.length === 0 ? [] : this.state.projectList;
        if (!projectListOptions || projectListOptions.length === 0) {
            return <option value="No data" key='-1'>No data</option>
        }
        return projectListOptions.map((doc,idx) =>
            (
                <option  key={idx}  value={doc.id}>{doc.name}</option>
            ))

    };
	
	render() {
		const projectList = this.generateProjectListOptions();
		return (
			<select id="project_id" name="project_id" className="form-control" required ref="project_id" onChange={(e)=>this.props.onChangeCallBack(e.target)}>
          		{projectList}
          	</select>
		)
	}
	
};

export default ProjectSelect;