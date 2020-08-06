import {combineReducers,createStore} from 'redux';
import reducer from './reducer';

const rootReducers = combineReducers({
    basket: reducer
})

export default createStore(rootReducers);