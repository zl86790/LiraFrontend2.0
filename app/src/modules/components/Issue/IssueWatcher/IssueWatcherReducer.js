
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETWATCHERSDATA': 
    	 state = new Object();
    	 state._watchersdata = action.payload;
    	 return state;
    default: return state;
  }
};
