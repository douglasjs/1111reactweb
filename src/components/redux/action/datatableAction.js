import axios from 'axios';

const getAllStart = () =>{

    return {

        type: "GET_ALL_START",
        data: [],
        err: null,
        isLoading: true,
    }

}

const getAllSuccess = (response) =>{

    return {

        type: "GET_ALL_SUCCESS",
        data: response,
        err: null,
        isLoading: false,
    }

}



const getAllError = (error) =>{

    return {
        type: "GET_ALL_ERROR",
        data: [],
        err: error,
        isLoading: false,
    }

}

const createAllStart = () =>{

    return {

        type: "CREATE_ALL_START",
        data: [],
        err: null,
        isLoading: true,
    }

}


const createAllSuccess = (response) =>{

    return {

        type: "CREATE_ALL_SUCCESS",
        data: response,
        err: null,
        isLoading: false,
    }

}

const createAllError = (error) =>{

    return {
        type: "CREATE_ALL_ERROR",
        data: [],
        err: error,
        isLoading: false,
    }

}


const editAllStart = () =>{

    return {

        type: "EDIT_ALL_START",
        data: [],
        err: null,
        isLoading: true,
    }

}

const editAllSuccess = (response) =>{

    return {

        type: "EDIT_ALL_SUCCESS",
        data: [response],
        err: null,
        isLoading: false,
    }

}



const editAllError = (error) =>{

    return {
        type: "EDIT_ALL_ERROR",
        data: [],
        err: error,
        isLoading: false,
    }

}



const deleteAllStart = () =>{

    return {

        type: "DELETE_ALL_START",
        data: [],
        err: null,
        isLoading: true,
    }

}


const deleteAllSuccess = (response) =>{

    return {

        type: "DELETE_ALL_SUCCESS",
        data: response,
        err: null,
        isLoading: false,
    }

}

const deleteAllError = (error) =>{

    return {
        type: "DELETE_ALL_ERROR",
        data: [],
        err: error,
        isLoading: false,
    }

}

const getDataList = (ono,rowSet, page, serach, sortString ) =>{

    return (dispatch) =>{
        
      
        dispatch(getAllStart());
        axios({ method: 'get', url: 'https://localhost:44312/api/main/' + ono})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getAllSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getAllError(err));
            });
    }

}

const createData = (data, handleBack) =>{

   
    return (dispatch) =>{
        
      
            dispatch(createAllStart());
            axios({
                method: 'post',
                url: 'http://localhost:8888/api/users',
                data
            })
            .then((response)=>{
                dispatch(createAllSuccess(response.data));
                handleBack();})
            .catch(err => {
                dispatch(createAllError(err));
            });
    }

}


const updateData = (data) =>{

   
    return (dispatch) =>{
        
      
            dispatch(editAllStart());
            axios({
                method: 'put',
                url: `https://localhost:44312/api/main/${data.ono}`,
                data
            })
            .then((response) => {
                dispatch(editAllSuccess(response.data));
                alert("更新資料完成");
             
            })
            .catch(err => {
                dispatch(editAllError(err));
            });
    }

}


const deleteData = (data, rowSet, curPage, search, sortDB) =>{

 
    return (dispatch) =>{
        
      
            dispatch(deleteAllStart());
            
            axios
            .delete(`http://localhost:8888/api/users/${data.id}`,{ crossdomain: true })
            .then((response) => {
                        dispatch(deleteAllSuccess(response.data));
                        dispatch(getDataList(rowSet, curPage, search, sortDB));
                    })
            .catch(err => {
                dispatch(deleteAllError(err));
            });
    }

}



export  {getDataList,createData,deleteData, updateData};