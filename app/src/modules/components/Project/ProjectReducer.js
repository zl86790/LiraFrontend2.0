
//reducer
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETPROJECTSDATA': 
    	 state = {};
    	 state._data = action.payload;
    	 return state;
    default: return state;
  }
};