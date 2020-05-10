import {getDataList,createData,deleteData,updateData} from './datatableAction';
import {getCompanyList,createCompany,updateCompany} from './company';
import {getintroductionList,createintroduction,updateintroduction} from './introduction';
import {getbenefitList,createbenefit,updatebenefit} from './benefit';
import {getbrandList,createbrand,updatebrand} from './brand';
import {getcustomizeList,createcustomize,updatecustomize} from './customize';
import {getqaList,createqa,updateqa} from './qa';
import {getcontactList,createcontact,updatecontact} from './contact' ;
import {getPositionList,createPosition,deletePosition} from './position' ;
import {getPositionGrpList,createPositionGrp,updatePositionGrp} from './positiongrp';
import getkind01 from './apiKind1js';
import getkind00 from './apiKind0js';
import getEmail from './email';
import setTable from './tablesetAction';
 
export {
	getDataList,
	createData,
	deleteData,
	updateData,
	setTable,
	getkind01,
	getkind00,
	getEmail,
	getCompanyList,
	createCompany,
	updateCompany,
	getintroductionList,
	createintroduction,
	updateintroduction,
	getbenefitList,
	createbenefit,
	updatebenefit,
	getbrandList,
	createbrand,
	updatebrand,
	getcustomizeList,
	createcustomize,
	updatecustomize,
	getqaList,
	createqa,
	updateqa,
	getcontactList,createcontact,updatecontact,
	getPositionList,createPosition,deletePosition,
	getPositionGrpList,createPositionGrp,updatePositionGrp
}