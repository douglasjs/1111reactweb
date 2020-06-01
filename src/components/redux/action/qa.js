import axios from 'axios';
import envConfig from '../../../config/env';

const getqaStart = () =>{

    return {

        type: "GET_QA_START",
        qaData: [],
        qaErr: null,
        qaIsLoading: true,
    }

}

const getqaSuccess = (response) =>{

    return {

        type: "GET_QA_SUCCESS",
        qaData: response,
        qaErr: null,
        qaIsLoading: false,
    }

}



const getqaError = (error) =>{

    return {
        type: "GET_QA_ERROR",
        qaData: [],
        qaErr: error,
        qaIsLoading: false,
    }

}

const createqaStart = () =>{

    return {

        type: "CREATE_QA_START",
        qaData: [],
        qaErr: null,
        qaIsLoading: true,
    }

}


const createqaSuccess = (response) =>{

    return {

        type: "CREATE_QA_SUCCESS",
        qaData: [response],
        qaErr: null,
        qaIsLoading: false,
    }

}

const createqaError = (error) =>{

    return {
        type: "CREATE_QA_ERROR",
        qaData: [],
        qaErr: error,
        qaIsLoading: false,
    }

}


const editqaStart = () =>{

    return {

        type: "EDIT_QA_START",
        qaData: [],
        qaErr: null,
        qaIsLoading: true,
    }

}

const editqaSuccess = (response) =>{

    return {

        type: "EDIT_QA_SUCCESS",
        qaData: [response],
        qaErr: null,
        qaIsLoading: false,
    }

}



const editqaError = (error) =>{

    return {
        type: "EDIT_QA_ERROR",
        qaData: [],
        qaErr: error,
        qaIsLoading: false,
    }

}



const getqaList = (ono, themeNum) =>{

    return (dispatch) =>{
        
      
        dispatch(getqaStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/qa/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getqaSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getqaError(err));
            });
    }

}

const createqa = (data) =>{

   
  
    return (dispatch) =>{
        
      
            dispatch(createqaStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/qa/`,
                data
            })
            .then((response)=>{
                dispatch(createqaSuccess(response.data));
                alert("新增資料完成");
               // dispatch(getqaList(data.ono));
            })
            .catch(err => {
                dispatch(createqaError(err));
            });
    }

}


const updateqa = (data) =>{
    console.log(data);
    return (dispatch) =>{
        
      
            dispatch(editqaStart());
            axios({
                method: 'put',
                url: `${envConfig.WebAPI}/qa/${data.ono}`,
                data
            })
            .then((response) => {
                dispatch(editqaSuccess(response.data));
                alert("更新資料完成");
              //  dispatch(getqaList(data.ono));
            })
            .catch(err => {
                dispatch(editqaError(err));
            });
    }

}


export  {getqaList,createqa,updateqa};