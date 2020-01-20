const qaInitState = {
    qaIsLoading: false,
    qaData: [],
    qaErr: null
};


const qa = (state= qaInitState, action) =>{


    const GET_QA_ACTION =  {
         ...state,
         qaData : action.qaData,
         qaErr : action.qaErr,
         qaIsLoading:  action.qaIsLoading
    }

    

    switch(action.type) {

         case 'GET_QA_START' :
                    return GET_QA_ACTION;
         case 'GET_QA_SUCCESS' :
                    return GET_QA_ACTION;
         case 'GET_QA_ERROR' :
                    return GET_QA_ACTION;
         case 'CREATE_QA_START' :
                    return GET_QA_ACTION;
         case 'CREATE_QA_SUCCESS' :
                     return GET_QA_ACTION;
         case 'CREATE_QA_ERROR' :
                    return GET_QA_ACTION;
         case 'EDIT_QA_START' :
                    return GET_QA_ACTION;
         case 'EDIT_QA_SUCCESS' :
                    return GET_QA_ACTION;
         case 'EDIT_QA_ERROR' :
                    return GET_QA_ACTION;
         default:
                    return state;
    } 
    

}

export default qa;

