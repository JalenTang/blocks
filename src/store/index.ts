import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer } from './modules/app/reducer';
import { dragDropReducer } from './modules/drag-drop/reducer';

const rootReducer: any = combineReducers({
    app: appReducer,
    dragDrop: dragDropReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, /* preloadedState, */ composeWithDevTools(
    applyMiddleware()
));

console.log(store.getState());

export default store;
