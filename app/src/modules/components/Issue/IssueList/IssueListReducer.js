export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GETISSUELISTDATA': 
    	 state = {};
    	 state.issueCounts = action.payload.issueCounts;
    	 state.pageNumber = action.payload.pageNumber;
    	 state._data = action.payload.data;
    	 return state;
    default: return state;
  }
};
