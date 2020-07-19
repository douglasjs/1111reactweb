function createArray( preName, psotName , number, thatState){
    const newArray = [];
    let name = '';
    for(let i =0 ; i < number; i++){
        name = `${preName}${i+1}${psotName}`;
        newArray.push({name, value: thatState[name]});
    }
    return newArray;
}

function strNumLimite( str, number ){
    return str.substring(0,str.length-1 > number ? number: str.length-1 );
}

const emptyCheck = (value, title, oldValue) => {
    if (value.length === 0){
        alert(title + '不可以空白');
        /*return oldValue;*/
        return " ";
    }else{
        return value;
    }
}


const numCheck = (value, num , title) =>{
    if (value.length > num) {
        alert(title + '超過' + num + '個字的限制');
        return strNumLimite(value,num);
    }else{
        return value;
    }
}

export {createArray, strNumLimite, emptyCheck, numCheck};