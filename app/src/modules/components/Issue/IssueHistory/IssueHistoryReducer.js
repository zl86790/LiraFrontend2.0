export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETHISTORIESDATA': 
    	 state = {};
    	 state._historiesdata = action.payload;
    	 return state;
    default: return state;
  }
};
