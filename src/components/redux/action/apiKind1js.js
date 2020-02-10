import axios from 'axios';
import envConfig from '../../../config/env';

const getKind01Start = () =>{

    return {

        type: "GET_KIND01_START",
        kind01_data: [],
        kind01_err: null,
        kind01_isLoading: true,
    }


}
const getKind01Success = (response) =>{

    return {

        type: "GET_KIND01_SUCCESS",
        kind01_data: response,
        kind01_err: null,
        kind01_isLoading: false,
    }

}


const getKind01Error = (error) =>{

    return {
        type: "GET_KIND01_ERROR",
        kind01_data: [],
        kind01_err: error,
        kind01_isLoading: false,
    }

}



const getKind01 = (ono) =>{

    return (dispatch) =>{
        
      
        dispatch(getKind01Start());
        axios({ method: 'get', url: envConfig.kind01API})
            .then(response => {
                //setTimeout(() => {
                    dispatch(getKind01Success(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getKind01Error(err));
            });
    }

}


export  default getKind01;