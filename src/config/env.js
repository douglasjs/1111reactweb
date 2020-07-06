/* 1111 Private 

const envConfig = {
    kind01API : 'http://192.168.1.195:8080/api/GetApi',
    kind00API : 'http://192.168.1.195:8080/api/GetApi',
    email: 'http://192.168.1.195:8080/WebAPI/api/email',
    WebAPI: ' http://192.168.1.195:8080/api'
}*/

/* 1111 Public 
const envConfig = {
    kind01API : 'https://brand.1111.com.tw/WebAPI/api/GetApi',
    kind00API : 'https://brand.1111.com.tw/WebAPI/api/GetApi',
    email: 'https://brand.1111.com.tw/WebAPI/api/email',
    WebAPI: 'https://brand.1111.com.tw/WebAPI/api'

}*/

/* Benedik */
/*
const envConfig = {
    kind01API : 'http://benedik.ddns.net:8080/api/GetApi',
    kind00API : 'http://benedik.ddns.net:8080/api/GetApi',
    email: 'http://benedik.ddns.net:8080/api/email',
    WebAPI: 'http://benedik.ddns.net:8080/api'
}
*/



/* Douglas */

const server = "http://111.185.21.100:8080/api";
const envConfig = {
    kind01API : server + '/GetApi',
    kind00API : server + '/GetApi',
    email: server +'/email',
    WebAPI: server

};


export default envConfig;