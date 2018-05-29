import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';

class LabelInput extends React.Component {
	constructor(props) {
		super(props);
		this.clickLabel = this.clickLabel.bind(this);
		this.blurInput = this.blurInput.bind(this);
		this.state = {
			showLabel:true,
			showInput:'none'
		};  
	}
	
	componentWillMount() {

	};
	
	clickLabel(){
		this.setState({
			showLabel:'none',
			showInput:true
		});
		document.querySelector("#"+this.props.inputId).value = this.props.initValue;
		this.oldValue = this.props.initValue;
		setTimeout("document.querySelector('#"+this.props.inputId+"').focus()",1)
	}
	
	blurInput(){
		var _this = this;
		this.setState({
			showLabel:true,
			showInput:'none'
		});
		let value = document.querySelector("#"+this.props.inputId).value
		if(this.oldValue!=value){
			this.props.callBackFunction(value)
		}
		
	}
    
    render() {
    
		return (
				<div className="">
	  				<div style={{display:this.state.showLabel}} onClick={this.clickLabel}>{this.props.initValue}</div>
	  				<div style={{display:this.state.showInput}} onBlur={this.blurInput}>
		  				<input id={this.props.inputId} name={this.props.inputName} className="form-control" required ref={this.props.inputRef} style={this.props.mystyle} />
	  				</div>
	  			</div>
		)
	}
};

export default LabelInput;