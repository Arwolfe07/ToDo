const loadingReducer = (state = false, action)=>{
    switch (action.type) {
        case 'START_LOAD':
            return true;
        case 'END_LOAD':
            return false;
        default:
            return state;
    }
};

export default loadingReducer;