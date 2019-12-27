import { combineReducers } from 'redux';
import datatableReducer from './datatable';
import tableSetReducer from './tableset';
import kind01Reducer from './kind01';

export default combineReducers({
    datatableReducer,tableSetReducer,kind01Reducer
});
