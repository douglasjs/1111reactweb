const positionGrpInitState = {
    positionGrpIsLoading: false,
    positionGrpData: [],
    positionGrpErr: null
};


const positionGrp = (state= positionGrpInitState, action) =>{


    const GET_POSITIONGRP_ACTION =  {
         ...state,
         positionGrpData : action.positionGrpData,
         positionGrpErr : action.positionGrpErr,
         positionGrpIsLoading:  action.positionGrpIsLoading
    }

    

    switch(action.type) {

         case 'GET_POSITIONGRP_START' :
                    return GET_POSITIONGRP_ACTION;
         case 'GET_POSITIONGRP_SUCCESS' :
                    return GET_POSITIONGRP_ACTION;
         case 'GET_POSITIONGRP_ERROR' :
                    return GET_POSITIONGRP_ACTION;
         case 'CREATE_POSITIONGRP_START' :
                    return GET_POSITIONGRP_ACTION;
         case 'CREATE_POSITIONGRP_SUCCESS' :
                     return GET_POSITIONGRP_ACTION;
         case 'CREATE_POSITIONGRP_ERROR' :
                    return GET_POSITIONGRP_ACTION;
         case 'EDIT_POSITIONGRP_START' :
                    return GET_POSITIONGRP_ACTION;
         case 'EDIT_POSITIONGRP_SUCCESS' :
                    return GET_POSITIONGRP_ACTION;
         case 'EDIT_POSITIONGRP_ERROR' :
                    return GET_POSITIONGRP_ACTION;
         default:
                    return state;
    } 
    

}

export default positionGrp;

