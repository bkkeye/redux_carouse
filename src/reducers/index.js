/**
 * Created by u on 2017/5/20.
 */
import {combineReducers} from 'redux';
import carouseReducer from './carouseReducer';

const rootReducer = combineReducers({carouseReducer :carouseReducer});

export default rootReducer;