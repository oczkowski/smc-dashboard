const overlaysReducer = (state = [], action) => {
    if (action.type === 'GET_OVERLAYS_DATA') {
        return action.payload;
    }
    return state;
};

export default overlaysReducer;
