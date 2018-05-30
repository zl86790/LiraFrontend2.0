import React from 'react';
import IssueListContainer from './IssueListContainer.js'

class IssueListPage extends React.Component {
	
	constructor(props) {
		super(props);
		if(this.props.location.state===undefined){
			this.props.location.state = {};
		}
	}
	
	render() {
		return (
				
			<IssueListContainer project_id={this.props.location.state.project_id}/>
			
		)
	}
	
};

export default IssueListPage;
