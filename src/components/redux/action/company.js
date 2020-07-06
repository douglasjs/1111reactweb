import axios from 'axios';
import envConfig from '../../../config/env';

const getCompanyStart = () =>{

    return {

        type: "GET_COM_START",
        companyData: [],
        companyErr: null,
        companyIsLoading: true,
    }

}

const getCompanySuccess = (response) =>{

    return {

        type: "GET_COM_SUCCESS",
        companyData: response,
        companyErr: null,
        companyIsLoading: false,
    }

}



const getCompanyError = (error) =>{

    return {
        type: "GET_COM_ERROR",
        companyData: [],
        companyErr: error,
        companyIsLoading: false,
    }

}

const createCompanyStart = () =>{

    return {

        type: "CREATE_COM_START",
        companyData: [],
        companyErr: null,
        companyIsLoading: true,
    }

}


const createCompanySuccess = (response) =>{

    return {

        type: "CREATE_COM_SUCCESS",
        companyData: [response],
        companyErr: null,
        companyIsLoading: false,
    }

}

const createCompanyError = (error) =>{

    return {
        type: "CREATE_COM_ERROR",
        companyData: [],
        companyErr: error,
        companyIsLoading: false,
    }

}


const editCompanyStart = () =>{

    return {

        type: "EDIT_COM_START",
        companyData: [],
        companyErr: null,
        companyIsLoading: true,
    }

}

const editCompanySuccess = (response) =>{

    return {

        type: "EDIT_COM_SUCCESS",
        companyData: [response],
        companyErr: null,
        companyIsLoading: false,
    }

}



const editCompanyError = (error) =>{

    return {
        type: "EDIT_COM_ERROR",
        companyData: [],
        companyErr: error,
        companyIsLoading: false,
    }

}



const getCompanyList = (ono, themeNum) =>{

    return (dispatch) =>{
        
        dispatch(getCompanyStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/company/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getCompanySuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getCompanyError(err));
            });
    }

}

const createCompany = (data) =>{

   
  
    return (dispatch) =>{
        
            const submitData = {...data, postType: 'C'}; 
            dispatch(createCompanyStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/company/`,
                data: submitData
            })
            .then((response)=>{
                dispatch(createCompanySuccess(response.data));
                alert("新增資料完成");
                dispatch(getCompanyList(data.ono, data.themeNum));
            })
            .catch(err => {
                dispatch(createCompanyError(err));
            });
    }

}


const updateCompany = (data) =>{
    return (dispatch) =>{
        
            const submitData = {...data, postType: 'U'}; 
            dispatch(editCompanyStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/company/`,
                data: submitData
            })
            .then((response) => {
                dispatch(editCompanySuccess(response.data));
                //dispatch(getCompanyList(data.ono));
                alert("更新資料完成");
            })
            .catch(err => {
                dispatch(editCompanyError(err));
            });
    }

}


export  {getCompanyList,createCompany,updateCompany};