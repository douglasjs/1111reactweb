import axios from 'axios';
import envConfig from '../../../config/env';

const getPositionStart = () =>{

    return {

        type: "GET_POSITION_START",
        positionData: [],
        positionErr: null,
        positionIsLoading: true,
    }

}

const getPositionSuccess = (response) =>{

    return {

        type: "GET_POSITION_SUCCESS",
        positionData: response,
        positionErr: null,
        positionIsLoading: false,
    }

}



const getPositionError = (error) =>{

    return {
        type: "GET_POSITION_ERROR",
        positionData: [],
        positionErr: error,
        positionIsLoading: false,
    }

}

const createPositionStart = () =>{

    return {

        type: "CREATE_POSITION_START",
        positionData: [],
        positionErr: null,
        positionIsLoading: true,
    }

}


const createPositionSuccess = (response) =>{

    return {

        type: "CREATE_POSITION_SUCCESS",
        positionData: response,
        positionErr: null,
        positionIsLoading: false,
    }

}

const createPositionError = (error) =>{

    return {
        type: "CREATE_POSITION_ERROR",
        positionData: [],
        positionErr: error,
        positionIsLoading: false,
    }

}


const editPositionStart = () =>{

    return {

        type: "EDIT_POSITION_START",
        positionData: [],
        positionErr: null,
        positionIsLoading: true,
    }

}

const editPositionSuccess = (response) =>{

    return {

        type: "EDIT_POSITION_SUCCESS",
        positionData: [response],
        positionErr: null,
        positionIsLoading: false,
    }

}



const editPositionError = (error) =>{

    return {
        type: "EDIT_POSITION_ERROR",
        positionData: [],
        positionErr: error,
        positionIsLoading: false,
    }

}



const getPositionList = (ono, themeNum) =>{

    return (dispatch) =>{
        
      
        dispatch(getPositionStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/Position/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getPositionSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getPositionError(err));
            });
    }

}

const createPosition = (data) =>{

   
  
    return (dispatch) =>{
        
      
            dispatch(createPositionStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/Position/`,
                data
            })
            .then((response)=>{
                dispatch(createPositionSuccess(response.data));
                alert("新增資料完成");
               // dispatch(getPositionList(data.ono));
            })
            .catch(err => {
                dispatch(createPositionError(err));
            });
    }

}


const updatePosition = (data) =>{
    console.log(data);
    return (dispatch) =>{
        
      
            dispatch(editPositionStart());
            axios({
                method: 'put',
                url: `${envConfig.WebAPI}/Position/${data.ono}`,
                data
            })
            .then((response) => {
                dispatch(editPositionSuccess(response.data));
                alert("更新資料完成");
              //  dispatch(getPositionList(data.ono));
            })
            .catch(err => {
                dispatch(editPositionError(err));
            });
    }

}


export  {getPositionList,createPosition,updatePosition};