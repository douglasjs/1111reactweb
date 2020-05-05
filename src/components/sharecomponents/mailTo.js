function mailTo( name, mobile, email, message, omail ){
    
    const uri = 'https://www.1111.com.tw/webService/NET40/CompanyPage/API.ashx';    
    let mailContent = name + "," + "," + mobile + "," + email + "," + message;

    fetch(uri, {
    method:'POST',
    body:encodeURI(JSON.stringify({
        oMail:omail,
        csMail:"csMail",
        Subject:"1111郵件主旨",
        Content:mailContent,
        kind:2
    })),
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
    })
    .then(res => {
        return res.json();
    }).then(result => {
        console.log(result); 
    });
}

export {mailTo};