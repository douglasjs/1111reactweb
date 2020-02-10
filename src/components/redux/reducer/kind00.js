const kind00InitState = {
    kind00_isLoading: false,
    kind00_data: [],
    kind00_err: null
};



const kind00 = (state= kind00InitState, action) =>{


    const GET_KIND00_ACTION =  {
         ...state,
         kind00Data : action.kind00Data,
         kind00Err : action.kind00Err,
         kind00IsLoading:  action.kind00IsLoading
    }

    

    switch(action.type) {

         case 'GET_KIND00_START' :
                    return GET_KIND00_ACTION;
         case 'GET_KIND00_SUCCESS' :
                    return GET_KIND00_ACTION;
         case 'GET_KIND00_ERROR' :
                    return GET_KIND00_ACTION;
         default:
                    return state;
    } 
    

}

export default kind00;