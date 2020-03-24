function checkTextLength(string, value, title){
    
    if (string.length === 0) {
        alert(title + '不可以空白');
        return false;
    }
    if (string.length > value) {
        alert(title + '超過字數');
        return false;
    }

}

export default checkTextLength;