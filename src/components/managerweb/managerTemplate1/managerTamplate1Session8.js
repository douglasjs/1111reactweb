import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';

class Session8 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactEnable : ' ',
            contactImg : ' ',
            contactImgUpload : '',
        };     
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj={
            ono: cid,
            themeNum : event.target.themeNum8.value,
            contactEnable:  event.target.contactEnable.checked,
            contactImg:  event.target.contactImg.value,
            contactImgUpload : this.state.contactImgUpload ? this.state.contactImgUpload.value : null
        }

        if(event.target.action8.value === 'create'){
            this.props.createcontact(submitObj);
        }
        if(event.target.action8.value === 'modify'){
            this.props.updatecontact(submitObj);
        }
    }

    render(){
        const cid = this.props.match.params.cid.trim();
        const { contactData, contactErr, contactIsLoading} = this.props.contactReducer;


        let contactEnable = this.state.contactEnable;
        let contactImg = this.state.contactImg;

        const sessionName=  "聯絡我們";
        let themeNum = 'tp01';
        let actionType = 'create';

        if(contactData && contactData.length > 0){
            actionType = 'modify';
            contactData.forEach(element => {
                contactEnable = contactEnable !==" "  ? contactEnable : element.contactEnable;
                contactImg = contactImg !==" " ? contactImg : element.contactImg;
            })
        }

            
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
                        <form id='dataForm8' className={contactIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                            <Msg type ='LOADING'  value = {contactIsLoading} text='Processing ' /> 
                            <Msg type ='ERROR' value = {contactErr} text= 'Opps! Error : ' />
                            <input type="hidden" id="themeNum8" value={themeNum} />
                            <InputSwitch sessionName={sessionName} inputName='contactEnable' inputState={contactEnable} stateObj={this} />
                            <div className="form-row">
                                <label> </label>
                            </div>
                            <ImgUpload title={`${sessionName}背景圖片`} notice='(圖檔尺寸大小為 1080*540 ，接受格式為png、jpg)' objName='contactImg'  imgUpload={contactImgUpload} 
                                            imgFileName={contactImg} parentObj={this} imgW={2400} imgH={1200} required={false} />
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