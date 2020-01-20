import axios from 'axios';
import envConfig from '../../../config/env';

const getcustomizeStart = () =>{

    return {

        type: "GET_CUSTM_START",
        customizeData: [],
        customizeErr: null,
        customizeIsLoading: true,
    }

}

const getcustomizeSuccess = (response) =>{

    return {

        type: "GET_CUSTM_SUCCESS",
        customizeData: response,
        customizeErr: null,
        customizeIsLoading: false,
    }

}



const getcustomizeError = (error) =>{

    return {
        type: "GET_CUSTM_ERROR",
        customizeData: [],
        customizeErr: error,
        customizeIsLoading: false,
    }

}

const createcustomizeStart = () =>{

    return {

        type: "CREATE_CUSTM_START",
        customizeData: [],
        customizeErr: null,
        customizeIsLoading: true,
    }

}


const createcustomizeSuccess = (response) =>{

    return {

        type: "CREATE_CUSTM_SUCCESS",
        customizeData: response,
        customizeErr: null,
        customizeIsLoading: false,
    }

}

const createcustomizeError = (error) =>{

    return {
        type: "CREATE_CUSTM_ERROR",
        customizeData: [],
        customizeErr: error,
        customizeIsLoading: false,
    }

}


const editcustomizeStart = () =>{

    return {

        type: "EDIT_CUSTM_START",
        customizeData: [],
        customizeErr: null,
        customizeIsLoading: true,
    }

}

const editcustomizeSuccess = (response) =>{

    return {

        type: "EDIT_CUSTM_SUCCESS",
        customizeData: [response],
        customizeErr: null,
        customizeIsLoading: false,
    }

}



const editcustomizeError = (error) =>{

    return {
        type: "EDIT_CUSTM_ERROR",
        customizeData: [],
        customizeErr: error,
        customizeIsLoading: false,
    }

}



const getcustomizeList = (ono, themeNum) =>{

    return (dispatch) =>{
        
      
        dispatch(getcustomizeStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/customize/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getcustomizeSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getcustomizeError(err));
            });
    }

}

const createcustomize = (data) =>{

   
  
    return (dispatch) =>{
        
      
            dispatch(createcustomizeStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/customize/`,
                data
            })
            .then((response)=>{
                dispatch(createcustomizeSuccess(response.data));
                alert("新增資料完成");
               // dispatch(getcustomizeList(data.ono));
            })
            .catch(err => {
                dispatch(createcustomizeError(err));
            });
    }

}


const updatecustomize = (data) =>{
    console.log(data);
    return (dispatch) =>{
        
      
            dispatch(editcustomizeStart());
            axios({
                method: 'put',
                url: `${envConfig.WebAPI}/customize/${data.ono}`,
                data
            })
            .then((response) => {
                dispatch(editcustomizeSuccess(response.data));
                alert("更新資料完成");
              //  dispatch(getcustomizeList(data.ono));
            })
            .catch(err => {
                dispatch(editcustomizeError(err));
            });
    }

}


export  {getcustomizeList,createcustomize,updatecustomize};