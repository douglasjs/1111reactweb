import axios from 'axios';
import envConfig from '../../../config/env';

const getEmailStart = () =>{

    return {

        type: "GET_EMAIL_START",
        email_data: [],
        email_err: null,
        email_isLoading: true,
    }


}
const getEmailSuccess = (response) =>{

    return {

        type: "GET_EMAIL_SUCCESS",
        email_data: response,
        email_err: null,
        email_isLoading: false,
    }

}


const getEmailError = (error) =>{

    return {
        type: "GET_EMAIL_ERROR",
        email_data: [],
        email_err: error,
        email_isLoading: false,
    }

}



const getEmail = (data) =>{

    return (dispatch) =>{
        
      
            dispatch(getEmailStart());
            axios({
                method: 'post',
                url: envConfig.email,
                data
            })
            .then(response => {
                //setTimeout(() => {
                dispatch(getEmailSuccess(response.data));
                alert("感謝您！您寶貴的意見，已成功送出！");
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getEmailError(err));
            });
    }

}


export  default getEmail;