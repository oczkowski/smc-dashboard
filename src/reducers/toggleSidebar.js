const toggleSidebar = (state = true, action) => {
    if (action.type === 'TOGGLE_SIDEBAR') return action.payload;
    return state;
};

export default toggleSidebar;
