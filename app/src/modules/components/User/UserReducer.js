import React from 'react';
import ReactDOM from 'react-dom';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETUSERDATA': 
    	state = new Object();
    	const assignees = action.payload.length === 0 ? [] : action.payload;
        if (!assignees || assignees.length === 0) {
        	state._data =  '<option value="No data" key="-1">No data</option>'
        }
        state._data = assignees.map((doc,idx) =>
        (
            <option  key={idx}  value={doc.id}>{doc.fullName}</option>
        ))
    	return state;
    default: return state;
  }
};

