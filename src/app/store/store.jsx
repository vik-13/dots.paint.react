import { createStore, combineReducers } from 'redux';

import layoutsReducer from '../reducers/layouts';

const reducer = combineReducers({
    layouts : layoutsReducer
});


const store = createStore(reducer);

export default store;