import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';


class Session3 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            benefitContent: ' ',
            benefitImg : ' ',
            benefitImgUpload : ''
        }

    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const benObj={
            ono: cid,
            themeNum : event.target.themeNum3.value,
            benefitContent:  this.state.benefitContent,
            benefitImg: event.target.benefitImg.value,
            benefitImg2: '',
            benefitImgUpload: this.state.benefitImgUpload ? this.state.benefitImgUpload.value : null,
            benefitImg2Upload: null,
            benefitSubTitle1: '',
            benefitSubTitle2: '',
            benefitSubTitle3: '',
            benefitSubTitle4: '',
            benefitSubTitle5: '',
            benefitSubTitle6: '',
            benefitSubContent1: '',
            benefitSubContent2: '',
            benefitSubContent3: '',
            benefitSubContent4: '',
            benefitSubContent5: '',
            benefitSubContent6: '',
            benefitSubImg1: '',
            benefitSubImg2: '',
            benefitSubImg3: '',
            benefitSubImg4: '',
            benefitSubImg5: '',
            benefitSubImg6: '',
            benefitSubImg1Upload: null,
            benefitSubImg2Upload: null,
            benefitSubImg3Upload: null,
            benefitSubImg4Upload: null,
            benefitSubImg5Upload: null,
            benefitSubImg6Upload: null
        }
        
        if(event.target.action3.value === 'create'){
            this.props.createbenefit(benObj);
        }
        if(event.target.action3.value === 'modify'){
            this.props.updatebenefit(benObj);
        }
    }

    handleChange = (event, data) => {
        /*
        ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
        } 
        */
        //let newValue = event.target.data;
        this.setState({ ...this.state, benefitContent : data});
    };

    render(){
        const { benefitData, benefitErr, benefitIsLoading} = this.props.benefitReducer;
        const cid = this.props.match.params.cid.trim();

        let benefitContent = this.state.benefitContent;
        let benefitImg = this.state.benefitImg;

        let themeNum = 'tp01';
        let actionType = 'create';

        if(benefitData && benefitData.length > 0){
            actionType = 'modify';
            benefitData.forEach(element => {
                benefitContent = benefitContent !==" " ? benefitContent : element.benefitContent;
                benefitImg = benefitImg !==" " ? benefitImg : element.benefitImg;
            })
        }

        // image
        let benefitImgUpload ="";
        if(benefitImg === " "){
            benefitImgUpload = "/image/logo-1111.png";
        }else{
            benefitImgUpload = this.state.benefitImg !==' ' ?  this.state.benefitImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3">
                <h6 className="m-0 font-weight-bold text-primary">設定區段-員工福利</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard3">
                    <div className="card-body">
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <form id='dataForm3' className={benefitIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                                    <Msg type ='LOADING'  value = {benefitIsLoading} text='Processing ' /> 
                                    <Msg type ='ERROR' value = {benefitErr} text= 'Opps! Error : ' />
                                    <input type="hidden" id="themeNum3" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    <ImgUpload title='員工福利圖片' notice='(圖檔尺寸大小為 500*354 ，接受格式為png、jpg)' objName='benefitImg'  imgUpload={benefitImgUpload} imgFileName={benefitImg} 
                                                    parentObj={this}  imgW={500} imgH={354} required={false}/> 
                                    <div className="form-row">
                                        <label><span className='text-danger'>*</span>員工福利內容 <em className='text-primary'>( 字數限制為350個字以內 )</em> </label>
                                    </div>
                                    <div>
                                        <CKEditor
                                            id='benefitContent'
                                            className='form-control'
                                            editor={ ClassicEditor }
                                            data={benefitContent}
                                            onInit={ editor => {
                                                // You can store the "editor" and use when it is needed.
                                                console.log( 'Editor is ready to use!', editor );
                                            } }
                                            onChange={( event, editor ) => {
                                                this.handleChange(event, editor.getData());
                                            } }
                                            onBlur={ ( event, editor ) => {
                                                console.log( 'Blur.', editor );
                                            } }
                                            onFocus={ ( event, editor ) => {
                                                console.log( 'Focus.', editor );
                                            } }
                                        />
                                    </div>
                                    <hr />
                                    <div align="center"><button type='submit' id='action3' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                    
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_01/03.png" alt="Temp1_Benefit" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp1_benefit">
                                        觀看放大圖例
                                    </a>
                                </div>
                                <hr />
                                <div>
                                    <table border='1'>
                                        <thead>
                                        <tr>
                                            <th width="10%">項目</th>
                                            <th width="35%">內容</th>
                                            <th width="15%">規格</th>
                                            <th width="40%">備註</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>員工福利圖片</td>
                                            <td align='left'>寬、高(px)</td>
                                            <td>500*354</td>
                                            <td>
                                                <ul>
                                                    <li>接受格式為png、jpg</li>
                                                    <li>無輪播</li>
                                                    <li>不可空白</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>員工福利內容</td>
                                            <td align='left'>
                                            法定項目<br />
                                                勞保、健保、男性員工陪產假、育嬰假、生理假、特別休假、員工體檢、勞退提撥金、職災保險<br />
                                            福利制度<br />
                                                獎 金 類：全勤獎金、年節獎金、員工生日禮金、年終獎金、三節獎金、禮品、績效獎金<br />
                                                保 險 類：意外險、員工團保、員工及眷屬住院慰問金<br />
                                                餐 飲 類：免費供餐<br />
                                                娛 樂 類：自強活動、國內旅遊、尾牙、員工運動會<br />
                                                補 助 類：員工結婚補助、生育補助、員工國內、外進修補助、員工及眷屬喪葬補助、員工購物優惠、社團補助<br />
                                                其 　他：員工在職教育訓練、良好升遷制度<br />
                                            </td>
                                            <td>350個字以內</td>
                                            <td>可自行編輯排版，不可空白</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp1_benefit">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/03.png" alt="tmp1_benefit" width="100%" />
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
export default Session3;