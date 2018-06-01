import './Login.css';
import React from 'react';
import {  withRouter } from "react-router-dom";

import Global from '../Global/Global.js';
import $ from "jquery";
class LoginDiv extends React.Component {
	login(event) {
		var _this = this;
		var userName = this.refs.userName.value;
		var passWord = this.refs.passWord.value;
		var user = {userName:userName,passWord:passWord}
		$.ajax({
		    type: "POST", 
		    url: Global.serverpath+"/api/v1/prelogin/login",
		    data: JSON.stringify(user), 
		    dataType: 'json',
		    contentType: 'application/json',
		    success: function(data){ 
		    	alert(JSON.stringify(data));
		    	Global.setCookie("lira_token",data.lira_token,1);
		    	_this.props.history.push('/Dashboard');
		    },
			error: function(data){ 
		    	alert("login error");
		    }
		});
		
	}
	render() {
		return (
			
			<form className="form-signin text-center">
				<img src={'imgs/Lira.jpg'} alt="" width="72" height="72"/>
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label htmlFor="inputEmail" className="sr-only">Email address</label> 
				<input type="text" id="inputUserName" className="form-control" placeholder="User Name" required autoFocus ref="userName" defaultValue="admin"/>
				<label htmlFor="inputPassword" className="sr-only">Password</label>  
				<input type="password" id="inputPassword" className="form-control" placeholder="Password" required ref="passWord" defaultValue="admin"/>
				<button id="subButton" className="btn btn-lg btn-primary btn-block" type="button" onClick={this.login.bind(this)}>Sign in</button>
				<p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
			</form>

		)
	}
};

export default withRouter(LoginDiv);
	
