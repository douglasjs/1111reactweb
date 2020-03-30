import React from 'react';

function PreviewButton(props){
    const {cid, themNum} = props;
    return(

        <div>
            <div className="mangerweb-pb-1"><a href={`/${cid}`} target='_blank'rel="noopener noreferrer"><button className='btn btn-primary'>確認發佈</button></a></div>
            <a className="scroll-to-top rounded scroll-to-top-bottom" href={`/managerweb/${cid}/preview/${themNum}`} target='_blank' rel="noopener noreferrer">預覽</a>
        </div>
    )
   
    
}

export default PreviewButton;


