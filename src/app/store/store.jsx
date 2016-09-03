import { createStore, combineReducers } from 'redux';

import layoutReducer from '../reducers/layout.reducer';
import layoutsReducer from '../reducers/layouts.reducer';
import toolsReducer from '../reducers/tools.reducer';
import paintingReducer from '../reducers/painting.reducer';
import paintingsReducer from '../reducers/paintings.reducer';

const reducer = combineReducers({
    layout: layoutReducer,
    layouts : layoutsReducer,
    tool: toolsReducer,
    painting: paintingReducer,
    paintings: paintingsReducer
});


const store = createStore(reducer);

export default store;