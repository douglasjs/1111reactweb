function checkTextLength(string, value, title){
    
    if (string.length === 0) {
        alert(title + '不可以空白');
        return " ";
    }
    if (string.length > value) {
        alert(title + '超過' + value + '個字的限制');
        return string.substring(0,string.length-1 > value ? value-1: string.length-1 );
    }

}

export default checkTextLength;