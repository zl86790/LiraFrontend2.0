import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';
import Global from '../Global/Global.js';
import axios from 'axios';
const FetchUsers = createClass({
	displayName: 'GithubUsers',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			backspaceRemoves: true,
			multi: true,
			creatable: false,
		};
	},
	onChange (value) {
		this.setState({
			value: value,
		});
		let target={
			id: this.props.keyInState,
			value: value.id,
		};
		this.props.onChangeCallBack(target);
	},
	switchToMulti () {
		this.setState({
			multi: true,
			value: [this.state.value],
		});
	},
	switchToSingle () {
		this.setState({
			multi: false,
			value: this.state.value ? this.state.value[0] : null
		});
	},
	getUsers (input) {
		if (!input) {
			return Promise.resolve({ options: [] });
		}
		
		let url = "";
		if(document.getElementById("project_id")!=null){
			this.props.project_id = document.getElementById("project_id").value;
		}
		if(this.props.project_id==undefined || this.props.project_id==null){
			url = Global.serverpath+'/api/v1/postlogin/usersStartWith?date='+new Date()+'&'+`startWith=${input}`;
		}else{
			url = Global.serverpath+'/api/v1/postlogin/usersStartWith?date='+new Date()+'&project_id='+this.props.project_id+'&'+`startWith=${input}`;
		}
		
		return fetch(url, {
			headers: {
		        'lira_token': Global.getCookie('lira_token')
		    },
		})
		.then((response) => {
	      return response.json();
	    }).then((json) => {
	      return { options: json };
	    });
	},
	gotoUser (value, event) {
		window.open(value.html_url);
	},
	toggleBackspaceRemoves () {
		this.setState({
			backspaceRemoves: !this.state.backspaceRemoves
		});
	},
	toggleCreatable () {
		this.setState({
			creatable: !this.state.creatable
		});
	},
	render () {
		const AsyncComponent = this.state.creatable
			? Select.AsyncCreatable
			: Select.Async;

		return (
			<div className="section">
				<AsyncComponent multi={false} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoUser} valueKey="id" labelKey="fullName" loadOptions={this.getUsers} backspaceRemoves={false} ref="fetchUsers"/>
			</div>
		);
	}
});

export default FetchUsers;