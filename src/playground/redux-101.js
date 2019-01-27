import { createStore } from 'redux';

//console.log('101');

// const store = createStore((state = { count: 0}, action) => {
//     //console.log('running');
//     switch (action.type) {
//         case 'INCREMENT': 
//             //console.log('increment');
//             //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
//             return {
//                 count: state.count + action.incrementBy
//             };
//         case 'DECREMENT':
//             //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
//             return {
//                 count: state.count - action.decrementBy
//             };
//         case 'SET':
//             return {
//                 count: action.count
//             }
//         case 'RESET':
//             return {
//                 count: 0
//             };
//         default:
//             console.log('init state');
//             return state;
//     }
// });


//console.log(store.getState());

// const incrementCount = () => {
//     return {
//         type: 'INCREMENT'
//     };
// };

// const incrementCount = (payload = {}) => ({
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 0} = {}) => ({
    type: 'SET',
    count
});


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            //console.log('increment');
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            console.log('init state');
            return state;
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
// Actions - than an object that gets sent to the store

// increment, decrement, reset
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount( {incrementBy: 5}));
//unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(setCount({count: 101}));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });
console.log(store.getState());

// const add = (data) => {
//     return data.a + data.b;
// }

const add = ({a, b}, c) => {
    return a + b + c;
}

console.log(add({a: 1, b: 12}, 100));