const introductionInitState = {
    introductionIsLoading: false,
    introductionData: [],
    introductionErr: null
};


const introduction = (state= introductionInitState, action) =>{


    const GET_introduction_ACTION =  {
         ...state,
         introductionData : action.introductionData,
         introductionErr : action.introductionErr,
         introductionIsLoading:  action.introductionIsLoading
    }

    

    switch(action.type) {

         case 'GET_INTRO_START' :
                    return GET_introduction_ACTION;
         case 'GET_INTRO_SUCCESS' :
                    return GET_introduction_ACTION;
         case 'GET_INTRO_ERROR' :
                    return GET_introduction_ACTION;
         case 'CREATE_INTRO_START' :
                    return GET_introduction_ACTION;
         case 'CREATE_INTRO_SUCCESS' :
                     return GET_introduction_ACTION;
         case 'CREATE_INTRO_ERROR' :
                    return GET_introduction_ACTION;
         case 'EDIT_INTRO_START' :
                    return GET_introduction_ACTION;
         case 'EDIT_INTRO_SUCCESS' :
                    return GET_introduction_ACTION;
         case 'EDIT_INTRO_ERROR' :
                    return GET_introduction_ACTION;
         default:
                    return state;
    } 
    

}

export default introduction;

