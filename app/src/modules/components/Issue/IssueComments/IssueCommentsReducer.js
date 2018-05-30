export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETCOMMENTSDATA': 
    	 state = {};
    	 state._commentsdata = action.payload;
    	 return state;
    default: return state;
  }
};
