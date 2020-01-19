import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';

class Session8 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactEnable : false,
            contactImg : ' ',
            contactImgUpload : '',
        };     
    }


    render(){
        const cid = this.props.match.params.cid.trim();
        const sessionName=  "聯絡我們";
        const contactEnable = this.state.contactEnable;
        let contactImg = this.state.contactImg;
        let actionType = 'create';
    
        let contactImgUpload ="";
        if(contactImg === " "){
            contactImgUpload = "/image/logo-1111.png";
        }else{
            contactImgUpload = this.state.contactImg !==' ' ?  this.state.contactImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${contactImg}`;
        } 

        return(
            <div className="card shadow mb-4">
                <a href="#Session8" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="Session8">
                    <h6 className="m-0 font-weight-bold text-primary">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="Session8">
                    <div className="card-body">
                        <form id='dataForm8'>
                            <InputSwitch sessionName={sessionName} inputName='contactEnable' inputState={contactEnable} stateObj={this} />
                            <div className="form-row">
                                <label> </label>
                            </div>
                            <ImgUpload title={`${sessionName}背景圖片`} notice='(圖檔尺寸大小為 1080*540 ，接受格式為png、jpg)' objName='contactImg'  imgUpload={contactImgUpload} 
                                            imgFileName={contactImg} parentObj={this} imgW={1080} imgH={540} required={false} />
                            <hr />
                            <button type='submit' id='action8' value={actionType} className="btn btn-facebook btn-block" ><i className="fas fa-save"></i> 儲存設定</button>
                        </form>
                    </div>
                </div>
           </div>
        )
    }


}
export default Session8;