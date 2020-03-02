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



const getKind00 = (ono) =>{

    return (dispatch) =>{
        
        const data = {oNo:50750609,kind: 0};
        dispatch(getKind00Start());
        axios({
            method: 'post',
            mode: 'no-cors',
            headers: {'Content-Type': 'application/json','Access-Control-Allow-Origin': 'http://benedik.ddns.net:3000',
            'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'content-type'},
            url: envConfig.kind00API,
            withCredentials: true,
            credentials: 'same-origin',
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