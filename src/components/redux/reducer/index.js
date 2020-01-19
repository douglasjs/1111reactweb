import { combineReducers } from 'redux';
import datatableReducer from './datatable';
import tableSetReducer from './tableset';
import kind01Reducer from './kind01';
import companyReducer from './company';
import introductionReducer from './introduction';
import benefitReducer from './benefit';
import brandReducer from './brand';

export default combineReducers({
    datatableReducer,tableSetReducer,kind01Reducer,companyReducer,introductionReducer,benefitReducer,brandReducer
});
