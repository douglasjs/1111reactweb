import React from 'react';

function ImgUpload(props){

    const handleFileUpload = (name, stateName, uploadName, parentObj) => event =>{
        const infoArea = document.getElementById(name);
        const input = event.target;
   

        if (input.files && input.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                
                const img = new Image();
                const that = parentObj;
                img.src=reader.result;

                img.onload = function() {
                   if(img.width > props.imgW || img.height > props.imgH){
                       alert('上傳圖片尺寸不合');
                       return false;
                   }else{
                        that.setState( {...that.state,
                            [uploadName]: {
                                file: URL.createObjectURL(file),
                                value : reader.result
                            }
                        });
                        infoArea.textContent = '上傳檔案名稱: ' + file.name;
                        const fileFullName = stateName + "_"+ file.name;
                        that.setState({ ...that.state, [stateName]: fileFullName });

                   }
                };


           
            };

        }

       
    }


    return(

       <div>
            <div className="form-row">
                <label>
                    { props.required &&
                        <span className='text-danger'>*</span>
                    }
                    {props.title}
                </label>
                <em className='text-primary'>{props.notice}</em> 
            </div>
            <div className="form-row">
                <div className="card image-area mt-4">
                    <img id={`${props.objName}_Result`} src={props.imgUpload} alt="For Upload" className="img-fluid rounded shadow-sm mx-auto d-block" />
                </div>
                
                <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
                    <input type="hidden" id={`${props.objName}`} value={props.imgFileName} />
                
                    <input id={`${props.objName}Upload`} type="file"  accept="image/*" onChange={handleFileUpload(`${props.objName}Upload-label`, props.objName,`${props.objName}Upload`, props.parentObj)} className="form-control border-0 uploadFile" />
                    <label id={`${props.objName}Upload-label`} htmlFor="upload" className="font-weight-light text-muted upload-label">選擇檔案</label>
                    <div className="input-group-append">
                        <label htmlFor={`${props.objName}Upload`} className="btn btn-light m-0 rounded-pill px-4"> <i className="fa fa-cloud-upload mr-2 text-muted"></i>
                        <small className="text-uppercase font-weight-bold text-muted">選擇檔案</small></label>
                    </div>
                </div>
        
            </div>
        </div>

    )

    
}

export default ImgUpload;