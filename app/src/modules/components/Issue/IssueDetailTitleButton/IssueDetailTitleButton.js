/**
 * 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './IssueDetailTitleButton.css';
class IssueDetailTitleButton extends React.Component {
	render() {

		return (
				
			<div className="row">
				<a id="edit-issue" title="Edit this issue" className="iss-detail-ti-button" href="">Edit</a>
				<a id="comment-issue" title="Comment this issue" className="iss-detail-ti-button" href="">Comment</a>
				<a id="assign-issue" title="Assign this issue" className="iss-detail-ti-button" href="">Assign</a>
				<a id="stop-progress-issue" title="Stop Progress this issue" className="iss-detail-ti-button" href="">Stop Progress</a>
				<a id="resolve-issue-issue" title="Edit this issue" className="iss-detail-ti-button" href="">Resolve Issue</a>
				<a id="close-issue" title="Close this issue" className="iss-detail-ti-button" href="">Close Issue</a>
			</div>
			
		)
	}
	
};

export default IssueDetailTitleButton;