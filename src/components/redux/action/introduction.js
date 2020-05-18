import axios from 'axios';
import envConfig from '../../../config/env';

const getintroductionStart = () =>{

    return {

        type: "GET_INTRO_START",
        introductionData: [],
        introductionErr: null,
        introductionIsLoading: true,
    }

}

const getintroductionSuccess = (response) =>{

    return {

        type: "GET_INTRO_SUCCESS",
        introductionData: response,
        introductionErr: null,
        introductionIsLoading: false,
    }

}



const getintroductionError = (error) =>{

    return {
        type: "GET_INTRO_ERROR",
        introductionData: [],
        introductionErr: error,
        introductionIsLoading: false,
    }

}

const createintroductionStart = () =>{

    return {

        type: "CREATE_INTRO_START",
        introductionData: [],
        introductionErr: null,
        introductionIsLoading: true,
    }

}


const createintroductionSuccess = (response) =>{

    return {

        type: "CREATE_INTRO_SUCCESS",
        introductionData: response,
        introductionErr: null,
        introductionIsLoading: false,
    }

}

const createintroductionError = (error) =>{

    return {
        type: "CREATE_INTRO_ERROR",
        introductionData: [],
        introductionErr: error,
        introductionIsLoading: false,
    }

}


const editintroductionStart = () =>{

    return {

        type: "EDIT_INTRO_START",
        introductionData: [],
        introductionErr: null,
        introductionIsLoading: true,
    }

}

const editintroductionSuccess = (response) =>{

    return {

        type: "EDIT_INTRO_SUCCESS",
        introductionData: [response],
        introductionErr: null,
        introductionIsLoading: false,
    }

}



const editintroductionError = (error) =>{

    return {
        type: "EDIT_INTRO_ERROR",
        introductionData: [],
        introductionErr: error,
        introductionIsLoading: false,
    }

}



const getintroductionList = (ono, themeNum) =>{

    return (dispatch) =>{
        dispatch(getintroductionStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/introduction/${ono}`, params:{themeNum: themeNum}})
       // axios.get(`${envConfig.WebAPI}/introduction/${ono}`, {params: { themeNum: themeNum} })
            .then(response => {
                //setTimeout(() => {
                    dispatch(getintroductionSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getintroductionError(err));
            });
    }

}

const createintroduction = (data) =>{

   
  
    return (dispatch) =>{
        
      
            dispatch(createintroductionStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/introduction/`,
                data
            })
            .then((response)=>{
                dispatch(createintroductionSuccess(response.data));
                alert("新增資料完成");
                dispatch(getintroductionList(data.ono, data.themeNum));
            })
            .catch(err => {
                dispatch(createintroductionError(err));
            });
    }

}


const updateintroduction = (data) =>{
    return (dispatch) =>{
        
      
            dispatch(editintroductionStart());
            axios({
                method: 'put',
                url: `${envConfig.WebAPI}/introduction/${data.ono}`,
                data
            })
            .then((response) => {
                dispatch(editintroductionSuccess(response.data));
                alert("更新資料完成");
                dispatch(getintroductionList(data.ono,data.themeNum));
            })
            .catch(err => {
                dispatch(editintroductionError(err));
            });
    }

}


export  {getintroductionList,createintroduction,updateintroduction};