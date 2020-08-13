import axios from 'axios';
import envConfig from '../../../config/env';

const getbenefitStart = () =>{

    return {

        type: "GET_BENEFIT_START",
        benefitData: [],
        benefitErr: null,
        benefitIsLoading: true,
    }

}

const getbenefitSuccess = (response) =>{

    return {

        type: "GET_BENEFIT_SUCCESS",
        benefitData: response,
        benefitErr: null,
        benefitIsLoading: false,
    }

}



const getbenefitError = (error) =>{

    return {
        type: "GET_BENEFIT_ERROR",
        benefitData: [],
        benefitErr: error,
        benefitIsLoading: false,
    }

}

const createbenefitStart = () =>{

    return {

        type: "CREATE_BENEFIT_START",
        benefitData: [],
        benefitErr: null,
        benefitIsLoading: true,
    }

}


const createbenefitSuccess = (response) =>{

    return {

        type: "CREATE_BENEFIT_SUCCESS",
        benefitData: [response],
        benefitErr: null,
        benefitIsLoading: false,
    }

}

const createbenefitError = (error) =>{

    return {
        type: "CREATE_BENEFIT_ERROR",
        benefitData: [],
        benefitErr: error,
        benefitIsLoading: false,
    }

}


const editbenefitStart = () =>{

    return {

        type: "EDIT_BENEFIT_START",
        benefitData: [],
        benefitErr: null,
        benefitIsLoading: true,
    }

}

const editbenefitSuccess = (response) =>{

    return {

        type: "EDIT_BENEFIT_SUCCESS",
        benefitData: [response],
        benefitErr: null,
        benefitIsLoading: false,
    }

}



const editbenefitError = (error) =>{

    return {
        type: "EDIT_BENEFIT_ERROR",
        benefitData: [],
        benefitErr: error,
        benefitIsLoading: false,
    }

}



const getbenefitList = (ono, themeNum) =>{

    return (dispatch) =>{
        
      
        dispatch(getbenefitStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/benefit/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getbenefitSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getbenefitError(err));
            });
    }

}

const createbenefit = (data) =>{
    return (dispatch) =>{
        
            const submitData = {...data, postType: 'C'}; 
            dispatch(createbenefitStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/benefit/`,
                data: submitData
            })
            .then((response)=>{
                dispatch(createbenefitSuccess(response.data));
                alert("新增資料完成");
                dispatch(getbenefitList(data.ono, data.themeNum));
            })
            .catch(err => {
                dispatch(createbenefitError(err));
            });
    }

}


const updatebenefit = (data) =>{
    return (dispatch) =>{
        
            const submitData = {...data, postType: 'U'}; 
            dispatch(editbenefitStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/benefit/`,
                data: submitData
            })
            .then((response) => {
                dispatch(editbenefitSuccess(response.data));
                alert("更新資料完成");
              //  dispatch(getbenefitList(data.ono));
            })
            .catch(err => {
                dispatch(editbenefitError(err));
            });
    }

}


export  {getbenefitList,createbenefit,updatebenefit};