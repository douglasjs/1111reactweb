import axios from 'axios';
import envConfig from '../../../config/env';

const getPositionGrpStart = () =>{

    return {

        type: "GET_POSITIONGRP_START",
        positionGrpData: [],
        positionGrpErr: null,
        positionGrpIsLoading: true,
    }

}

const getPositionGrpSuccess = (response) =>{

    return {

        type: "GET_POSITIONGRP_SUCCESS",
        positionGrpData: response,
        positionGrpErr: null,
        positionGrpIsLoading: false,
    }

}



const getPositionGrpError = (error) =>{

    return {
        type: "GET_POSITIONGRP_ERROR",
        positionGrpData: [],
        positionGrpErr: error,
        positionGrpIsLoading: false,
    }

}

const createPositionGrpStart = () =>{

    return {

        type: "CREATE_POSITIONGRP_START",
        positionGrpData: [],
        positionGrpErr: null,
        positionGrpIsLoading: true,
    }

}


const createPositionGrpSuccess = (response) =>{

    return {

        type: "CREATE_POSITIONGRP_SUCCESS",
        positionGrpData: response,
        positionGrpErr: null,
        positionGrpIsLoading: false,
    }

}

const createPositionGrpError = (error) =>{

    return {
        type: "CREATE_POSITIONGRP_ERROR",
        positionGrpData: [],
        positionGrpErr: error,
        positionGrpIsLoading: false,
    }

}


const editPositionGrpStart = () =>{

    return {

        type: "EDIT_POSITIONGRP_START",
        positionGrpData: [],
        positionGrpErr: null,
        positionGrpIsLoading: true,
    }

}

const editPositionGrpSuccess = (response) =>{

    return {

        type: "EDIT_POSITIONGRP_SUCCESS",
        positionGrpData: [response],
        positionGrpErr: null,
        positionGrpIsLoading: false,
    }

}



const editPositionGrpError = (error) =>{

    return {
        type: "EDIT_POSITIONGRP_ERROR",
        positionGrpData: [],
        positionGrpErr: error,
        positionGrpIsLoading: false,
    }

}



const getPositionGrpList = (ono, themeNum) =>{

    return (dispatch) =>{
        
      
        dispatch(getPositionGrpStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/positionGroup/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getPositionGrpSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getPositionGrpError(err));
            });
    }

}

const createPositionGrp = (data) =>{

   
  
    return (dispatch) =>{
        
      
            dispatch(createPositionGrpStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/positionGroup/`,
                data
            })
            .then((response)=>{
                dispatch(createPositionGrpSuccess(response.data));
                alert("更新資料完成 請繼續前往新增職缺");
                dispatch(getPositionGrpList(data.ono, data.themeNum ));
            })
            .catch(err => {
                dispatch(createPositionGrpError(err));
            });
    }

}


const updatePositionGrp = (data) =>{
    console.log(data);
    return (dispatch) =>{
        
      
            dispatch(editPositionGrpStart());
            axios({
                method: 'put',
                url: `${envConfig.WebAPI}/positionGroup/${data.ono}`,
                data
            })
            .then((response) => {
                dispatch(editPositionGrpSuccess(response.data));
                alert("更新資料完成 請繼續前往新增職缺");
              //  dispatch(getPositionGrpList(data.ono));
            })
            .catch(err => {
                dispatch(editPositionGrpError(err));
            });
    }

}


export  {getPositionGrpList,createPositionGrp,updatePositionGrp};