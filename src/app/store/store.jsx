import { createStore, combineReducers } from 'redux';

import layoutReducer from '../reducers/layout.reducer';
import layoutsReducer from '../reducers/layouts.reducer';
import toolsReducer from '../reducers/tools.reducer';

const reducer = combineReducers({
    layout: layoutReducer,
    layouts : layoutsReducer,
    tool: toolsReducer
});


const store = createStore(reducer);

export default store;