export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETISSUEDATA': 
    	 state = {};
    	 state._data = action.payload;
    	 return state;
    default: return state;
  }
};
