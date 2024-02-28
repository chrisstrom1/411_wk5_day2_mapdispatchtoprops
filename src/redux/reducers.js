const cars = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CAR':
            return [...state, action.car];
        case 'REMOVE_CAR':
            const newState = [...state];
            newState.splice(action.index, 1);
            return newState;
        default:
            return state;
    }
};

export default cars;