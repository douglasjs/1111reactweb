import axios from 'axios';
import envConfig from '../../../config/env';

const getKind00Start = () =>{

    return {

        type: "GET_KIND00_START",
        kind00Data: [],
        kind00Err: null,
        kind00IsLoading: true,
    }

}

const getKind00Success = (response) =>{

    return {

        type: "GET_KIND00_SUCCESS",
        kind00Data: response,
        kind00Err: null,
        kind00IsLoading: false,
    }

}



const getKind00Error = (error) =>{

    return {
        type: "GET_KIND00_ERROR",
        kind00Data: [],
        kind00Err: error,
        kind00IsLoading: false,
    }

}



const getKind00 = (oNo) =>{

    return (dispatch) =>{
            dispatch(getKind00Start());
            var data = {
                oNo,
                kind: "0"
            }
            axios({
                method: 'post',
                url: envConfig.kind00API,
                data
            })
            .then(response => {
                //setTimeout(() => {
                    dispatch(getKind00Success(response.data));
                //}, 1000);
              }
            
            )
            .catch(err => {
                dispatch(getKind00Error(err));
            });
    }

}





export default getKind00;