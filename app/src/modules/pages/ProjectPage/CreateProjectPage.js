import React from 'react';
import './CreateProjectPage.css';

import CreateProjectLeft from "../../components/Project/CreateProjectLeft.js";
import CreateProjectMid from "../../components/Project/CreateProjectMid.js";

class CreateProjectPage extends React.Component {
	render() {

		return (
				
			<div>
				<div className="row">
					<div className="col-2">
						<CreateProjectLeft />
					</div>
					<div className="col-8">
						<CreateProjectMid />
					</div>
				</div>
			</div>
			
		)
	}
	
};

export default CreateProjectPage;
