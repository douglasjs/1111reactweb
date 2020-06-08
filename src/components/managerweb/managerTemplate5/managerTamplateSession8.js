import React from 'react';
import InputSwitch from '../../sharecomponents/inputSwitch';
import Msg from '../msg';

class Session8 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactEnable : ''
        };     
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj={
            ono: cid,
            themeNum : event.target.themeNum8.value,
            contactEnable : event.target.contactEnable.checked,
            contactImg : '',
            contactImgUpload : null
        }

        if(event.target.action8.value === 'create'){
            this.props.createcontact(submitObj);
        }
        if(event.target.action8.value === 'modify'){
            this.props.updatecontact(submitObj);
        }
    }

    render(){
        const { contactData, contactErr, contactIsLoading} = this.props.contactReducer;


        let contactEnable = this.state.contactEnable;

        const sessionName = "聯絡我們";
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(contactData && contactData.length > 0){
            actionType = 'modify';
            contactData.forEach(element => {
                contactEnable = contactEnable !== ""  ? contactEnable : element.contactEnable;
            })
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
                                    <h3> 此版型的「{sessionName}」不須額外設定，背景圖片也為固定不可更換。<br />請選擇是否開啟後直接儲存。</h3>
                                    <hr />
                                    <div  align="center"><button type='submit' id='action8' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div><img src="/image/sample_05/08.png" alt="Temp5_Contact" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp5_contact">觀看放大圖例</a></div>
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
                                                    <td>連絡我們</td>
                                                    <td>無</td>
                                                    <td>無須設定</td>
                                                    <td>固定不可變更</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>                                
                            </div>
                        </form>
                        <div className="modal fade" id="tmp5_contact">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">連絡我們範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/08.png" alt="tmp5_contact" width="100%" />
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