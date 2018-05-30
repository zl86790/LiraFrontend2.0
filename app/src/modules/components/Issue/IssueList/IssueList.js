import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
	
const IssueList = (props) => 
<div>
	<div className="asstm-table-title">Issues</div>
	<ReactTable data={props.data} columns={props.columns} 
	page={0} 
	pageSize={10}
	pages={props._pageCount}
	showPagination={false}
	loading={false}
	showPageSizeOptions={false}
  	getTdProps={(state, rowInfo, column, instance) => {
  	    return {
  	      onClick: (e, handleOriginal) => {
  	        if (handleOriginal) {
  	          alert(rowInfo.original.id);
  	          var data = {issueId:rowInfo.original.id};  
	  	      var path = {  
	  	        pathname:'/IssueDetail',  
	  	        state:data,  
	  	      }  
  	          props.history.push(path);
  	        }
  	      }
  	    }
  	  }}
	/>
	<Pagination onChange={props.onPageChange} current={props.current} total={props.total} pageSize={10} style={{ marginTop: '30px' }}/>
</div>

export default IssueList;