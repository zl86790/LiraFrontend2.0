import React from 'react';
import { withRouter } from "react-router-dom";

class ShowProjectLeft extends React.Component {

	goCreateProject() {
		this.props.history.push('/CreateProject');
	}

	render() {

		return (
				
		      <div>
			      <div style={{ margin: 20 }}>
			        <p>
			          <button className="btn btn-primary" onClick={this.goCreateProject.bind(this)}>Create Project</button>
			        </p>
			      </div>
		      </div>
			
		)
	}
	
};

export default withRouter(ShowProjectLeft);
