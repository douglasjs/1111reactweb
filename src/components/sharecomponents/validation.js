
const validation =  (name, value, that) => {

    const validEmailRegex = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const validPhoneRegex = new RegExp(/^[0-9]{10}$/g);

    let msg = '';
    let result = false;

    switch (name) {
        case 'custMail': 
            result = validEmailRegex.test(value);
            if(result === false){
                if(value ===''){
                    msg = '電子郵件不可空白'
                }else{
                    msg = '您輸入的電子郵件格式錯誤';
                }
                alert(msg);
                that.emailInput.current.focus();
                return false;
            }
            break;
        case 'custMobile': 
            result = validPhoneRegex.test(value);
            if(result === false){
                if(value ===''){
                    msg = '電話不可空白'
                }else{
                    msg = '您輸入的電話格式錯誤(僅數字10位)';
                }
                alert(msg);
                that.phoneInput.current.focus();
                return false;
            }
            break;
        case 'custName':
            if(value ===''){
                msg = '姓名不可空白'
                alert(msg);
                that.custName.current.focus();
                return false;
            }
            break;
        case 'custMsg':
            if(value ===''){
                msg = '問題不可空白'
                alert(msg);
                that.custMsg.current.focus();
                return false;
            }
            break;
        default:
            break;
    }
    return true;
}

export default validation;