import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class LabelDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.clickLabel = this.clickLabel.bind(this);
    this.blurPicker = this.blurPicker.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.state = {
    		showLabel:true,
    		showPicker:'none',
    		dpvalue: moment(this.props.initValue)
    };
    
  }

  setFocus(){
	  document.querySelector("#"+this.props.pickerId).focus();
  }
  
  clickLabel(){
	  this.setState({
			showLabel:'none',
			showPicker:true,
			dpvalue: moment(this.props.initValue)
		  });
	  setTimeout(this.setFocus,1)
  }
  
  blurPicker(){
	  this.setState({
			showLabel:true,
			showPicker:'none'
		});
  }
 
  handleChange(date) {
	    this.setState({
	    	dpvalue: date
	    });
	    this.props.callBackFunction(date);
	    this.setState({
			showLabel:true,
			showPicker:'none'
		});
	  }
  
  render() {
    return (
    		<div>
    			<div style={{display:this.state.showLabel}} onClick={this.clickLabel}>{this.props.initValue}</div>
    			<div style={{display:this.state.showPicker}}>
	    			<DatePicker 
					id={this.props.pickerId} 
	    			name={this.props.pickerName} 
	    			ref={this.props.pickerRef}
	    			onBlur={this.blurPicker}
	    			onChange={this.handleChange}
					dateFormat="YYYY-MM-DD"
					selected={this.state.dpvalue}
					/>
    			</div>
    		</div>
    );
  }
}

export default LabelDatePicker;