import React from 'react';
import './CreateProjectPage.css';

import ShowProjectLeft from "../../components/Project/ShowProjectLeft.js";
import ShowProjectMid from "../../components/Project/ShowProjectMid.js";

class ShowProjectPage extends React.Component {
	render() {
		return (
				
			<div>
				<div className="row">
					<div className="col-2">
						<ShowProjectLeft />
					</div>
					<div className="col-10">
						<ShowProjectMid />
					</div>
				</div>
			</div>
			
		)
	}
	
};

export default ShowProjectPage;
