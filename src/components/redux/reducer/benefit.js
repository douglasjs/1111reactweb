const benefitInitState = {
    benefitIsLoading: false,
    benefitData: [],
    benefitErr: null
};


const benefit = (state= benefitInitState, action) =>{


    const GET_benefit_ACTION =  {
         ...state,
         benefitData : action.benefitData,
         benefitErr : action.benefitErr,
         benefitIsLoading:  action.benefitIsLoading
    }

    

    switch(action.type) {

         case 'GET_BENEFIT_START' :
                    return GET_benefit_ACTION;
         case 'GET_BENEFIT_SUCCESS' :
                    return GET_benefit_ACTION;
         case 'GET_BENEFIT_ERROR' :
                    return GET_benefit_ACTION;
         case 'CREATE_BENEFIT_START' :
                    return GET_benefit_ACTION;
         case 'CREATE_BENEFIT_SUCCESS' :
                     return GET_benefit_ACTION;
         case 'CREATE_BENEFIT_ERROR' :
                    return GET_benefit_ACTION;
         case 'EDIT_BENEFIT_START' :
                    return GET_benefit_ACTION;
         case 'EDIT_BENEFIT_SUCCESS' :
                    return GET_benefit_ACTION;
         case 'EDIT_BENEFIT_ERROR' :
                    return GET_benefit_ACTION;
         default:
                    return state;
    } 
    

}

export default benefit;

