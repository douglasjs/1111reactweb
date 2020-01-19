const brandInitState = {
    brandIsLoading: false,
    brandData: [],
    brandErr: null
};


const brand = (state= brandInitState, action) =>{


    const GET_BRAND_ACTION =  {
         ...state,
         brandData : action.brandData,
         brandErr : action.brandErr,
         brandIsLoading:  action.brandIsLoading
    }

    

    switch(action.type) {

         case 'GET_BRAND_START' :
                    return GET_BRAND_ACTION;
         case 'GET_BRAND_SUCCESS' :
                    return GET_BRAND_ACTION;
         case 'GET_BRAND_ERROR' :
                    return GET_BRAND_ACTION;
         case 'CREATE_BRAND_START' :
                    return GET_BRAND_ACTION;
         case 'CREATE_BRAND_SUCCESS' :
                     return GET_BRAND_ACTION;
         case 'CREATE_BRAND_ERROR' :
                    return GET_BRAND_ACTION;
         case 'EDIT_BRAND_START' :
                    return GET_BRAND_ACTION;
         case 'EDIT_BRAND_SUCCESS' :
                    return GET_BRAND_ACTION;
         case 'EDIT_BRAND_ERROR' :
                    return GET_BRAND_ACTION;
         default:
                    return state;
    } 
    

}

export default brand;

