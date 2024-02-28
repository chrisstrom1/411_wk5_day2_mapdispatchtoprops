const ADD_CAR = 'ADD_CAR';

// Action creator function
function addCar(car) {
    return {
        type: ADD_CAR,
        car: car
    };
}