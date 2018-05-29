/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';

import IssuePeople from "../IssuePeople/IssuePeople.js";
import IssueDates from "../IssueDates/IssueDates.js";
import IssueTimeTrack from "../IssueTimeTrack/IssueTimeTrack.js";

import './IssueDetailLeftMenu.css';

class IssueDetailLeftMenu extends React.Component {
	render() {

		return (
			
				<div style={{paddingTop:20}}>
					<IssuePeople />
					<IssueDates />
					<IssueTimeTrack />
				</div>
			
			
		)
	}
	
};

export default IssueDetailLeftMenu;

