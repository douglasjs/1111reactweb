const customizeInitState = {
    customizeIsLoading: false,
    customizeData: [],
    customizeErr: null
};


const customize = (state= customizeInitState, action) =>{


    const GET_CUSTM_ACTION =  {
         ...state,
         customizeData : action.customizeData,
         customizeErr : action.customizeErr,
         customizeIsLoading:  action.customizeIsLoading
    }

    

    switch(action.type) {

         case 'GET_CUSTM_START' :
                    return GET_CUSTM_ACTION;
         case 'GET_CUSTM_SUCCESS' :
                    return GET_CUSTM_ACTION;
         case 'GET_CUSTM_ERROR' :
                    return GET_CUSTM_ACTION;
         case 'CREATE_CUSTM_START' :
                    return GET_CUSTM_ACTION;
         case 'CREATE_CUSTM_SUCCESS' :
                     return GET_CUSTM_ACTION;
         case 'CREATE_CUSTM_ERROR' :
                    return GET_CUSTM_ACTION;
         case 'EDIT_CUSTM_START' :
                    return GET_CUSTM_ACTION;
         case 'EDIT_CUSTM_SUCCESS' :
                    return GET_CUSTM_ACTION;
         case 'EDIT_CUSTM_ERROR' :
                    return GET_CUSTM_ACTION;
         default:
                    return state;
    } 
    

}

export default customize;

