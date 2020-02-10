const positionInitState = {
    positionIsLoading: false,
    positionData: [],
    positionErr: null
};


const position = (state= positionInitState, action) =>{


    const GET_POSITION_ACTION =  {
         ...state,
         positionData : action.positionData,
         positionErr : action.positionErr,
         positionIsLoading:  action.positionIsLoading
    }

    

    switch(action.type) {

         case 'GET_POSITION_START' :
                    return GET_POSITION_ACTION;
         case 'GET_POSITION_SUCCESS' :
                    return GET_POSITION_ACTION;
         case 'GET_POSITION_ERROR' :
                    return GET_POSITION_ACTION;
         case 'CREATE_POSITION_START' :
                    return GET_POSITION_ACTION;
         case 'CREATE_POSITION_SUCCESS' :
                     return GET_POSITION_ACTION;
         case 'CREATE_POSITION_ERROR' :
                    return GET_POSITION_ACTION;
         case 'DEL_POSITION_START' :
                    return GET_POSITION_ACTION;
         case 'DEL_POSITION_SUCCESS' :
                    return GET_POSITION_ACTION;
         case 'DEL_POSITION_ERROR' :
                    return GET_POSITION_ACTION;
         default:
                    return state;
    } 
    

}

export default position;

