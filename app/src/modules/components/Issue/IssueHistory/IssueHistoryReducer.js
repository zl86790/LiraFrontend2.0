
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETHISTORIESDATA': 
    	 state = new Object();
    	 state._historiesdata = action.payload;
    	 return state;
    default: return state;
  }
};
