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


const deletePositionStart = () =>{

    return {

        type: "DEL_POSITION_START",
        positionData: [],
        positionErr: null,
        positionIsLoading: true,
    }

}

const deletePositionSuccess = (response) =>{

    return {

        type: "DEL_POSITION_SUCCESS",
        positionData: [response],
        positionErr: null,
        positionIsLoading: false,
    }

}



const deletePositionError = (error) =>{

    return {
        type: "DEL_POSITION_ERROR",
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
                dispatch(getPositionList(data.oNo));
            })
            .catch(err => {
                dispatch(createPositionError(err));
                alert("已有資料");
                dispatch(getPositionList(data.oNo));
            });
    }

}


const deletePosition = (data) =>{

    return (dispatch) =>{
        
      
            dispatch(deletePositionStart());
            axios.delete(`${envConfig.WebAPI}/Position/`, { data })
            .then((response) => {
                dispatch(deletePositionSuccess(response.data));
                alert("資料刪除完成");
                dispatch(getPositionList(data.oNo));
            })
            .catch(err => {
                dispatch(deletePositionError(err));
            });
    }

}


export  {getPositionList,createPosition,deletePosition};