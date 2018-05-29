
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETISSUEDATA': 
    	 state = new Object();
    	 state._data = action.payload;
    	 return state;
    default: return state;
  }
};
