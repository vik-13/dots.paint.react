import { createStore, combineReducers } from 'redux';

import layoutsReducer from '../reducers/layouts.reducer';
import toolsReducer from '../reducers/tools.reducer';

const reducer = combineReducers({
    layouts : layoutsReducer,
    tool: toolsReducer
});


const store = createStore(reducer);

export default store;