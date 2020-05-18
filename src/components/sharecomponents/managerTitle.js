import React from 'react'

function managerTitle(props) {
    let themeNum = props.themeNum;
    let title = "您現在編輯的是: ";
    switch (themeNum){
         case ('tp01'): 
                title = "模組樣式一"
                break;
         case ('tp02'): 
                title = "模組樣式二"
                break;
         case ('tp03'): 
                title = "模組樣式三"
                break;
         case ('tp04'): 
                title = "模組樣式四"
                break;
         case ('tp05'): 
                title = "模組樣式五"
                break;
         case ('tp06'): 
                title = "模組樣式六"
                break;  
         default:
            title = "無"
            break;
    }

    return(
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default managerTitle;