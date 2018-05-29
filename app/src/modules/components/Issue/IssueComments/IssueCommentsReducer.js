
import Global from '../../Global/Global.js';
import axios from 'axios';
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETCOMMENTSDATA': 
    	 state = new Object();
    	 state._commentsdata = action.payload;
    	 return state;
    default: return state;
  }
};
