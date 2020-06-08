import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';

class Session8 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactEnable : '',
            contactImg : ' ',
            contactImgUpload : '',
        };     
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj={
            ono : cid,
            themeNum : event.target.themeNum8.value,
            contactEnable : event.target.contactEnable.checked,
            contactImg : event.target.contactImg.value,
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
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(contactData && contactData.length > 0){
            actionType = 'modify';
            contactData.forEach(element => {
                contactEnable = contactEnable !== ""  ? contactEnable : element.contactEnable;
                contactImg = contactImg !== " " ? contactImg : element.contactImg;
            })
        }

            
        let contactImgUpload = "";
        if(contactImg === " "){
            contactImgUpload = "/image/logo-1111.png";
        }else{
            contactImgUpload = this.state.contactImg !== ' ' ?  this.state.contactImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${contactImg}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#Session8" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="Session8">
                    <h6 className="m-0 font-weight-bold">設定區段-{sessionName}</h6>
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
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <ImgUpload title={`${sessionName}背景圖片`} notice='(圖檔尺寸大小為 745*665 ，接受格式為png、jpg)' objName='contactImg'  imgUpload={contactImgUpload} 
                                                    imgFileName={contactImg} parentObj={this} imgW={745} imgH={665} required={false} />
                                    <hr />
                                    <div  align="center"><button type='submit' id='action8' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div><img src="/image/sample_03/08.png" alt="Temp3_Contact" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp3_contact">觀看放大圖例</a></div>
                                    <hr />
                                    <div>
                                        <table border='1' width="100%">
                                            <thead>
                                                <tr>
                                                    <th width="20%">項目</th>
                                                    <th width="35%">內容</th>
                                                    <th width="15%">規格</th>
                                                    <th width="30%">備註</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>連絡我們圖片</td>
                                                    <td>寬、高(px)</td>
                                                    <td>745*665</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>接受格式為png、jpg</li>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp3_contact_pic">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>                                
                            </div>
                        </form>
                        <div className="modal fade" id="tmp3_contact">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">連絡我們範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/08.png" alt="tmp3_contact" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp3_contact_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">連絡我們範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/08-1.png" alt="tmp3_contact_pic" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
           </div>
        )
    }


}
export default Session8;