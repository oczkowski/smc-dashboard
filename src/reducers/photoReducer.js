const photoReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PHOTO':
            return action.payload;
        default:
            return state;
    }
};

export default photoReducer;
