import axios from 'axios';
import envConfig from '../../../config/env';

const getcontactStart = () =>{

    return {

        type: "GET_CONTACT_START",
        contactData: [],
        contactErr: null,
        contactIsLoading: true,
    }

}

const getcontactSuccess = (response) =>{

    return {

        type: "GET_CONTACT_SUCCESS",
        contactData: response,
        contactErr: null,
        contactIsLoading: false,
    }

}



const getcontactError = (error) =>{

    return {
        type: "GET_CONTACT_ERROR",
        contactData: [],
        contactErr: error,
        contactIsLoading: false,
    }

}

const createcontactStart = () =>{

    return {

        type: "CREATE_CONTACT_START",
        contactData: [],
        contactErr: null,
        contactIsLoading: true,
    }

}


const createcontactSuccess = (response) =>{

    return {

        type: "CREATE_CONTACT_SUCCESS",
        contactData: [response],
        contactErr: null,
        contactIsLoading: false,
    }

}

const createcontactError = (error) =>{

    return {
        type: "CREATE_CONTACT_ERROR",
        contactData: [],
        contactErr: error,
        contactIsLoading: false,
    }

}


const editcontactStart = () =>{

    return {

        type: "EDIT_CONTACT_START",
        contactData: [],
        contactErr: null,
        contactIsLoading: true,
    }

}

const editcontactSuccess = (response) =>{

    return {

        type: "EDIT_CONTACT_SUCCESS",
        contactData: [response],
        contactErr: null,
        contactIsLoading: false,
    }

}



const editcontactError = (error) =>{

    return {
        type: "EDIT_CONTACT_ERROR",
        contactData: [],
        contactErr: error,
        contactIsLoading: false,
    }

}



const getcontactList = (ono, themeNum) =>{

    return (dispatch) =>{
        
      
        dispatch(getcontactStart());
        axios({ method: 'get', url: `${envConfig.WebAPI}/contact/${ono}`, params:{themeNum: themeNum}})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getcontactSuccess(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getcontactError(err));
            });
    }

}

const createcontact = (data) =>{

   
  
    return (dispatch) =>{
        
            const submitData = {...data, postType: 'C'}; 
            dispatch(createcontactStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/contact/`,
                data: submitData
            })
            .then((response)=>{
                dispatch(createcontactSuccess(response.data));
                alert("新增資料完成");
                dispatch(getcontactList(data.ono, data.themeNum));
            })
            .catch(err => {
                dispatch(createcontactError(err));
            });
    }

}


const updatecontact = (data) =>{
    console.log(data);
    return (dispatch) =>{
        
            const submitData = {...data, postType: 'U'}; 
            dispatch(editcontactStart());
            axios({
                method: 'post',
                url: `${envConfig.WebAPI}/contact/`,
                data: submitData
            })
            .then((response) => {
                dispatch(editcontactSuccess(response.data));
                alert("更新資料完成");
              //  dispatch(getcontactList(data.ono));
            })
            .catch(err => {
                dispatch(editcontactError(err));
            });
    }

}


export  {getcontactList,createcontact,updatecontact};