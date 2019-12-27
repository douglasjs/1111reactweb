const kind01InitState = {
    kind01_isLoading: false,
    kind01_data: [],
    kind01_err: null
};



const kind01 = (state= kind01InitState, action) =>{


    const GET_kind01_ACTION =  {
         ...state,
         kind01_data : action.kind01_data,
         kind01_err : action.kind01_err,
         kind01_isLoading:  action.kind01_isLoading
    }

    

    switch(action.type) {

         case 'GET_KIND01_START' :
                    return GET_kind01_ACTION;
         case 'GET_KIND01_SUCCESS' :
                    return GET_kind01_ACTION;
         case 'GET_KIND01_ERROR' :
                    return GET_kind01_ACTION;
         default:
                    return state;
    } 
    

}

export default kind01;