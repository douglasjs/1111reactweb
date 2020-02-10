import { combineReducers } from 'redux';
import datatableReducer from './datatable';
import tableSetReducer from './tableset';
import kind01Reducer from './kind01';
import companyReducer from './company';
import introductionReducer from './introduction';
import benefitReducer from './benefit';
import brandReducer from './brand';
import customizeReducer from './customize';
import qaReducer from './qa';
import contactReducer from './contact';
import positionReducer from './position';
import positionGrpReducer from './positiongrp';

export default combineReducers({
    datatableReducer,tableSetReducer,
    kind01Reducer,companyReducer,
    introductionReducer,benefitReducer,
    brandReducer, customizeReducer,
    qaReducer, contactReducer,
    positionReducer,positionGrpReducer
});
