import React from 'react';
//import env from '../../config/env'; 

function PreviewButton(props){
    const {cid, themNum} = props;
    //const url= `${env.Website}/managerweb/${cid}/preview/${themNum}`;
    return(

        <div>
            {themNum && cid && 
                <div>
                  <div className="mangerweb-pb-1">
                    <a href={`/${cid}`} target='_blank'rel="noopener noreferrer"><button className='btn btn-primary'>確認發佈</button></a>
                  </div>
                  <div className="scroll-to-top rounded scroll-to-top-bottom">
                    <a href='/managerweb/50750609/preview/tp01' target='_blank' rel="noopener noreferrer"><span className='previewButton'>預覽</span></a>
                  </div>
                </div>
            }
      
        </div>
    )
   
    
}

export default PreviewButton;


