
const validEmailRegex = 
        RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

const validPhoneRegex =
        RegExp(/^[0-9]{10}$/g);

const validation =  (name, value) => {

    switch (name) {
        case 'custMail': 
            return validEmailRegex.test(value) ? '' : '您輸入的電子郵件格式錯誤';
        case 'custMobile': 
            return value ==='' ? '電話不可空白' : validPhoneRegex.test(value) ? '' : '您輸入的電話格式錯誤(僅數字10位)';
        default:
            break;
    }
}

export default validation;