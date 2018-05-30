export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETWATCHERSDATA': 
    	 state = {};
    	 state._watchersdata = action.payload;
    	 return state;
    default: return state;
  }
};
