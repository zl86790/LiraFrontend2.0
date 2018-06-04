import React from 'react';
import axios from 'axios';
import Global from '../../Global/Global.js';

class DbSelect extends React.Component {
	constructor(props) {
		super(props);
		this.generateOptions = this.generateOptions.bind(this);
		this.loadData = this.loadData.bind(this);
	}
	
	componentWillMount() {
		if(this.props.loadByDb==="true"){
			this.loadData();
		}
		const ops = this.generateOptions();
		this.setState({
			ops:ops
		})
	};
	
	loadData(){
		let url = Global.serverpath+'/api/v1/postlogin/sysparameters';
	 	axios.get(url, {
		    params: {
		      module_key:this.props.module_key,
		      value_key:this.props.value_key
		    },
		    headers: {
		      "lira_token": Global.getCookie('lira_token')
		    }
		  })
		  .then(response=>{
			  this.setState({
				  options: response.data
				});
		  }).catch(function (error) {
			alert("load error"+JSON.stringify(error));
		  });
	}
	
	generateOptions = () => {
        if(this.state.options===undefined){
        	this.setState({
				  options: []
				});
        }
        let options = [];
        if(this.state.options===undefined){
        	options = [];
        }else if(this.props.loadByDb==="true"){
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
    
    
    
    render() {
    	
    	
    
		return (
				<div className="lira-detail-content">
	  				<div style={{display:this.state.selectDisplay}}>{this.props.initValue}</div>
	  				<div style={{display:this.state.selectEditDisplay}}>
		  				<select id={this.props.selectId} name={this.props.selectName} className="form-control" required ref={this.props.selectRef} style={{width:100}} onChange={(e)=>this.props.onChangeCallBack(e.target)}>
		  					{this.state.ops}
			          	</select>
	  				</div>
	  			</div>
		)
	}
};

export default DbSelect;