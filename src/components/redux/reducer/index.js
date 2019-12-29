import { combineReducers } from 'redux';
import datatableReducer from './datatable';
import tableSetReducer from './tableset';
import kind01Reducer from './kind01';
import companyReducer from './company';

export default combineReducers({
    datatableReducer,tableSetReducer,kind01Reducer,companyReducer
});
