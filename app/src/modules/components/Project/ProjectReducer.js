import React from 'react';
import ReactDOM from 'react-dom';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETPROJECTSDATA': 
    	 state = new Object();
    	 state._data = action.payload;
    	 return state;
    default: return state;
  }
};