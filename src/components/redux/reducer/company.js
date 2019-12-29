const companyInitState = {
    companyIsLoading: false,
    companyData: [],
    companyErr: null
};


const company = (state= companyInitState, action) =>{


    const GET_COMPANY_ACTION =  {
         ...state,
         companyData : action.companyData,
         companyErr : action.companyErr,
         companyIsLoading:  action.companyIsLoading
    }

    

    switch(action.type) {

         case 'GET_COM_START' :
                    return GET_COMPANY_ACTION;
         case 'GET_COM_SUCCESS' :
                    return GET_COMPANY_ACTION;
         case 'GET_COM_ERROR' :
                    return GET_COMPANY_ACTION;
         case 'CREATE_COM_START' :
                    return GET_COMPANY_ACTION;
         case 'CREATE_COM_SUCCESS' :
                     return GET_COMPANY_ACTION;
         case 'CREATE_COM_ERROR' :
                    return GET_COMPANY_ACTION;
         case 'EDIT_COM_START' :
                    return GET_COMPANY_ACTION;
         case 'EDIT_COM_SUCCESS' :
                    return GET_COMPANY_ACTION;
         case 'EDIT_COM_ERROR' :
                    return GET_COMPANY_ACTION;
         default:
                    return state;
    } 
    

}

export default company;

