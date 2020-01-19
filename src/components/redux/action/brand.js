import axios from 'axios';
import envConfig from '../../../config/env';

const getbrandStart = () =>{

    return {

        type: "GET_BRAND_START",
        brandData: [],
        brandErr: null,
        brandIsLoading: true,
    }

}

const getbrandSuccess = (response) =>{

    return {

        type: "GET_BRAND_SUCCESS",
        brandData: response,
        brandErr: null,
        brandIsLoading: false,
    }

}



const getbrandError = (error) =>{

    return {
        type: "GET_BRAND_ERROR",
        brandData: [],
        brandErr: error,
        brandIsLoading: false,
    }

}

const createbrandStart = () =>{

    return {

        type: "CREATE_BRAND_START",
        brandData: [],
        brandErr: null,
        brandIsLoading: true,
    }

}


const createbrandSuccess = (response) =>{

    return {

        type: "CREATE_BRAND_SUCCESS",
        brandData: response,
        brandErr: null,
        brandIsLoading: false,
    }

}

const createbrandError = (error) =>{

    return {
        type: "CREATE_BRAND_ERROR",
        brandData: [],
        brandErr: error,
        brandIsLoading: false,
    }

}


const editbrandStart = () =>{

    return {

        type: "EDIT_BRAND_START",
        brandData: [],
        brandErr: null,
        brandIsLoading: true,
    }

}

const editbrandSuccess = (response) =>{

    return {

        type: "EDIT_BRAND_SUCCESS",
        brandData: [response],
        brandErr: null,
        brandIsLoading: false,
    }

}



const editbrandError = (error) =>{

    return {
        type: "EDIT_BRAND_ERROR",
        brandData: [],
        brandErr: error,
        brandIsLoading: false,
    }

}



const getbrandList = (ono, themeNum) =>{

    return (dispatch) =>{
        
      
        dispatch(getbrandStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/brand/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getbrandSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getbrandError(err));
            });
    }

}

const createbrand = (data) =>{
    return (dispatch) =>{
        
            console.log(data);
            dispatch(createbrandStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/brand/`,
                data
            })
            .then((response)=>{
                dispatch(createbrandSuccess(response.data));
                alert("新增資料完成");
               // dispatch(getbrandList(data.ono));
            })
            .catch(err => {
                dispatch(createbrandError(err));
            });
    }

}


const updatebrand = (data) =>{
    
    return (dispatch) =>{
        
      
            dispatch(editbrandStart());
            axios({
                method: 'put',
                url: `${envConfig.WebAPI}/brand/${data.ono}`,
                data
            })
            .then((response) => {
                dispatch(editbrandSuccess(response.data));
                alert("更新資料完成");
              //  dispatch(getbrandList(data.ono));
            })
            .catch(err => {
                dispatch(editbrandError(err));
            });
    }

}


export  {getbrandList,createbrand,updatebrand};