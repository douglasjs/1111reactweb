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


const newArryMaker = (dataType, dataArry) =>{

    let newArry = [];

    switch(dataType){

        case "city":  
            dataArry.forEach( element => {
                newArry.push(element.WorkCity);
            });
            newArry = [...new Set(newArry)];
            break;

        case "duty":
            dataArry.forEach( element => {
                if(!newArry.some( arrayElement => arrayElement.DutyNo === element.DutyArr[0].DutyNo)){
                    newArry.push(element.DutyArr[0]);
                }
            });
            break;
        default:
    }
    return newArry;
}

export {createArray, strNumLimite, emptyCheck, numCheck, newArryMaker};