/**
 * 
 */

import Header from '../components/Header/Header.js';
import HeaderPrelogin from '../components/Header/HeaderPrelogin.js';
import Footer from '../components/Footer/Footer.js';

import LoginPage from '../pages/LoginPage/LoginPage.js';
import DashboardPage from '../pages/DashboardPage/DashboardPage.js';
import IssueDetailPage from '../pages/IssueDetailPage/IssueDetailPage.js';
import CreateProjectPage from '../pages/ProjectPage/CreateProjectPage.js';
import ShowProjectPage from '../pages/ProjectPage/ShowProjectPage.js';
import IssueListPage from '../pages/IssueListPage/IssueListPage.js';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, connect } from 'react-redux';  
import { createStore,combineReducers } from 'redux'
import store from './Store.js';

import { BrowserRouter as Router, Route, Link, browserHistory, Switch, Redirect } from "react-router-dom";


class App extends React.Component {
	render() {

		return (
				<Provider store={store}> 
				<div>
					<div id="headerDiv">
						<Switch>
							<Route exact path='/home' component={HeaderPrelogin}/>
							<Route exact path='/Dashboard' component={Header}/>
						    <Route exact path='/IssueDetail' component={Header}/>
						    <Route exact path='/CreateProject' component={Header}/>
						    <Route exact path='/ShowProject' component={Header}/>
							<Route exact path='/IssueList' component={Header}/>
							<Redirect from='' to="/home" />
						</Switch>
					</div>
					<div id="centerDiv" style={{padding:60}}>
						<Switch>
					      <Route exact path='/home' component={LoginPage}/>
					      <Route exact path='/Dashboard' component={DashboardPage}/>
					      <Route exact path='/IssueDetail' component={IssueDetailPage}/>
					      <Route exact path='/CreateProject' component={CreateProjectPage}/>
					      <Route exact path='/ShowProject' component={ShowProjectPage}/>
					      <Route exact path='/IssueList' component={IssueListPage}/>
					      <Redirect from='' to="/home" />
					    </Switch>
					</div>
					<div id="footerDiv"><Footer /></div>
				</div>
				</Provider>
		)
	}
	
}



ReactDOM.render(
	<Router history={browserHistory}>
		<App />
	</Router>
	,document.getElementById('root')
);

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}



