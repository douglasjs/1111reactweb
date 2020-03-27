function checkTextLength(string, value, title){
    
    if (string.length === 0) {
        alert(title + '不可以空白');
        return false;
    }
    if (string.length > value) {
        alert(title + '超過' + value + '個字的限制，目前字數為' + string.length + '個字');
        return false;
    }

}

export default checkTextLength;