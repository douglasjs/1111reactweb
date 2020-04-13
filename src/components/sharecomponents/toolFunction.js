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

    return str.substring(0,str.length-1 > number ? number-1: str.length-1 ) 

}

export {createArray, strNumLimite};