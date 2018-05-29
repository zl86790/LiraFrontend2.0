import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';

class LabelFetchUser extends React.Component {
	constructor(props) {
		super(props);
		this.clickLabel = this.clickLabel.bind(this);
		this.blurInput = this.blurInput.bind(this);
		this.onChange = this.onChange.bind(this);
		this.gotoUser = this.gotoUser.bind(this);
		this.getUsers = this.getUsers.bind(this);
		this.state = {
			showLabel:true,
			showInput:'none'
		};  
	}
 
	clickLabel(){
		this.setState({
			showLabel:'none',
			showInput:true
		});
		setTimeout("document.querySelector('#"+this.props.fuId+"').focus()",1)
	}
	
	blurInput(){
		this.setState({
			showLabel:true,
			showInput:'none'
		});  
	}
	
	onChange (value) {
		this.setState({
			value: value,
		});
		this.props.callBackFunction(value);
	}
	gotoUser (value, event) {
		window.open(value.html_url);
	}
	getUsers (input) {
		if (!input) {
			return Promise.resolve({ options: [] });
		}
		
		let url = "";
		if(this.props.issue_id==undefined || this.props.issue_id==null){
			url = Global.serverpath+'/api/v1/postlogin/usersStartWith?date='+new Date()+'&'+`startWith=${input}`;
		}else{
			url = Global.serverpath+'/api/v1/postlogin/usersStartWith?date='+new Date()+'&issue_id='+this.props.issue_id+'&'+`startWith=${input}`;
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
	}
	
    render() {
    	const AsyncComponent = this.state.creatable
		? Select.AsyncCreatable
		: Select.Async;
		return (
				<div className="">
	  				<div style={{display:this.state.showLabel}} onClick={this.clickLabel}>{this.props.initValue}</div>
	  				<div style={{display:this.state.showInput}} onBlur={this.blurInput}>
	  				<AsyncComponent id={this.props.fuId} multi={false} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoUser} valueKey="id" labelKey="fullName" loadOptions={this.getUsers} backspaceRemoves={false} ref="fetchUsers"/>
	  				</div>
	  			</div>
		)
	}
};

export default LabelFetchUser;