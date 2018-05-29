import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { withRouter } from "react-router-dom";
class MyIssuesChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}; 
	}
	
	render() {
		
		var optionStatus = {
	            title:{
	                text:'Issues 状态'
	            },            
	            series:[{
	                name:'访问量',
	                type:'pie',    
	                radius:'60%', 
	                data:[
	                    {value:30,name:'Open'},
	                    {value:25,name:'Resolved'},
	                    {value:20,name:'Blocked'},
	                    {value:10,name:'Closed'}
	                ]
	            }]
	        };
		
		var optionType = {
	            title:{
	                text:'Issues 类型'
	            },            
	            series:[{
	                name:'访问量',
	                type:'pie',    
	                radius:'60%', 
	                data:[
	                    {value:70,name:'Bug'},
	                    {value:20,name:'Change'},
	                    {value:10,name:'New'}
	                ]
	            }]
	        };
	
		return (
				<div className="row">
					<div  className="col-6">
						<ReactEcharts
						  option={optionStatus} 
						/>
					</div>
					<div className="col-6">
						<ReactEcharts
						  option={optionType} 
						/>
					</div>
				</div>
		)
	}
	
	
}


export default withRouter(MyIssuesChat);