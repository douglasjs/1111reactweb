const contactInitState = {
    contactIsLoading: false,
    contactData: [],
    contactErr: null
};


const contact = (state= contactInitState, action) =>{


    const GET_CONTACT_ACTION =  {
         ...state,
         contactData : action.contactData,
         contactErr : action.contactErr,
         contactIsLoading:  action.contactIsLoading
    }

    

    switch(action.type) {

         case 'GET_CONTACT_START' :
                    return GET_CONTACT_ACTION;
         case 'GET_CONTACT_SUCCESS' :
                    return GET_CONTACT_ACTION;
         case 'GET_CONTACT_ERROR' :
                    return GET_CONTACT_ACTION;
         case 'CREATE_CONTACT_START' :
                    return GET_CONTACT_ACTION;
         case 'CREATE_CONTACT_SUCCESS' :
                     return GET_CONTACT_ACTION;
         case 'CREATE_CONTACT_ERROR' :
                    return GET_CONTACT_ACTION;
         case 'EDIT_CONTACT_START' :
                    return GET_CONTACT_ACTION;
         case 'EDIT_CONTACT_SUCCESS' :
                    return GET_CONTACT_ACTION;
         case 'EDIT_CONTACT_ERROR' :
                    return GET_CONTACT_ACTION;
         default:
                    return state;
    } 
    

}

export default contact;

