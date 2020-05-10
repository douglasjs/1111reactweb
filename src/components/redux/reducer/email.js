const emailInitState = {
    email_isLoading: false,
    email_data: [],
    email_err: null
};



const email = (state= emailInitState, action) =>{


    const GET_email_ACTION =  {
         ...state,
         email_data : action.email_data,
         email_err : action.email_err,
         email_isLoading:  action.email_isLoading
    }

    

    switch(action.type) {

         case 'GET_EMAIL_START' :
                    return GET_email_ACTION;
         case 'GET_EMAIL_SUCCESS' :
                    return GET_email_ACTION;
         case 'GET_EMAIL_ERROR' :
                    return GET_email_ACTION;
         default:
                    return state;
    } 
    

}

export default email;