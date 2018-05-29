import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Global from '../../Global/Global.js';
import store from '../../../App/Store.js';

class LabelSelect extends React.Component {
	constructor(props) {
		super(props);
		this.clickSelect = this.clickSelect.bind(this);
		this.blurSelect = this.blurSelect.bind(this);
		this.generateOptions = this.generateOptions.bind(this);
		this.state = {
			selectDisplay:true,
			selectEditDisplay:'none'
		};  
	}
	
	componentWillMount() {
		if(this.props.loadByDb=="true"){
			this.loadData();
		}

	};
	
	loadData(){
		let url = Global.serverpath+'/api/v1/postlogin/sysparameters';
		let _this = this;
	 	axios.get(url, {
		    params: {
		      module_key:this.props.module_key,
		      value_key:this.props.value_key
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(function (response) {
			  _this.setState({
				  options: response.data
				});
		  }).catch(function (error) {
			alert("load error"+JSON.stringify(error));
		  });
	}
	
	generateOptions = () => {
        if(this.state.options==undefined){
        	this.state.options = [];
        }
        let options = [];
        if(this.props.loadByDb=="true"){
        	options = this.state.options.length === 0 ? [] : this.state.options;
        }else{
        	options = this.props.options.length === 0 ? [] : this.props.options;
        }
		
        if (!options || options.length === 0) {
            return <option value="No data" key='-1'>No data</option>
        }
        return options.map((doc,idx) =>
            (
                <option  key={idx}  value={doc.value_content}>{doc.value_content}</option>
            ))
    };
    
    clickSelect(){
		this.setState({
			selectDisplay:'none',
			selectEditDisplay:true
		});
		document.querySelector("#"+this.props.selectId).value = this.props.initValue;
		this.oldValue = document.querySelector("#"+this.props.selectId).value;
		setTimeout("document.querySelector('#"+this.props.selectId+"').focus()",1)
	}
	
	blurSelect(){
		var _this = this;
		this.setState({
			selectDisplay:true,
			selectEditDisplay:'none'
		});
		this.newValue = document.querySelector("#"+this.props.selectId).value;
		if(this.newValue!=this.oldValue){
			console.log("changed");
			this.props.onChagedCallBack();
		}
	}
    
    render() {
    	
    	const ops = this.generateOptions();
    
		return (
				<div className="lira-detail-content">
	  				<div style={{display:this.state.selectDisplay}} onClick={this.clickSelect}>{this.props.initValue}</div>
	  				<div style={{display:this.state.selectEditDisplay}} onBlur={this.blurSelect}>
		  				<select id={this.props.selectId} name={this.props.selectName} className="form-control" required ref={this.props.selectRef} style={{width:100}}>
		  					{ops}
			          	</select>
	  				</div>
	  			</div>
		)
	}
};

export default LabelSelect;