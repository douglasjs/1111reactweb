import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';


class Session3 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            benefitContent : '',
            benefitImg : ' ',
            benefitImg2 : ' ',
            benefitImgUpload : '',
            benefitImg2Upload : '',
            benefitSubTitle1 : '',
            benefitSubTitle2 : '',
            benefitSubTitle3 : '',
            benefitSubTitle4 : '',
            benefitSubTitle5 : '',
            benefitSubTitle6 : '',
            benefitSubContent1 : '',
            benefitSubContent2 : '',
            benefitSubContent3 : '',
            benefitSubContent4 : '',
            benefitSubContent5 : '',
            benefitSubContent6 : '',
            benefitSubImg1 : ' ',
            benefitSubImg1Upload : ''
        }

    }

    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const benObj={
            ono : cid,
            themeNum : event.target.themeNum3.value,
            benefitContent : event.target.benefitContent.value,
            benefitImg : event.target.benefitImg.value,
            benefitImg2 : event.target.benefitImg2.value,
            benefitImgUpload : this.state.benefitImgUpload ? this.state.benefitImgUpload.value : null,
            benefitImg2Upload : this.state.benefitImg2Upload ? this.state.benefitImg2Upload.value : null,
            benefitSubTitle1 : event.target.benefitSubTitle1.value,
            benefitSubTitle2 : event.target.benefitSubTitle2.value,
            benefitSubTitle3 : event.target.benefitSubTitle3.value,
            benefitSubTitle4 : event.target.benefitSubTitle4.value,
            benefitSubTitle5 : event.target.benefitSubTitle5.value,
            benefitSubTitle6 : event.target.benefitSubTitle6.value,
            benefitSubContent1 : event.target.benefitSubContent1.value,
            benefitSubContent2 : event.target.benefitSubContent2.value,
            benefitSubContent3 : event.target.benefitSubContent3.value,
            benefitSubContent4 : event.target.benefitSubContent4.value,
            benefitSubContent5 : event.target.benefitSubContent5.value,
            benefitSubContent6 : event.target.benefitSubContent6.value,
            benefitSubImg1 : event.target.benefitSubImg1.value,
            benefitSubImg2 : '',
            benefitSubImg3 : '',
            benefitSubImg4 : '',
            benefitSubImg5 : '',
            benefitSubImg6 : '',
            benefitSubImg1Upload : this.state.benefitSubImg1Upload ? this.state.benefitSubImg1Upload.value : null,
            benefitSubImg2Upload : null,
            benefitSubImg3Upload : null,
            benefitSubImg4Upload : null,
            benefitSubImg5Upload : null,
            benefitSubImg6Upload : null
        }
        
        if(event.target.action3.value === 'create'){
            this.props.createbenefit(benObj);
        }
        if(event.target.action3.value === 'modify'){
            this.props.updatebenefit(benObj);
        }
    }

    render(){
        const { benefitData, benefitErr, benefitIsLoading } = this.props.benefitReducer;
        const cid = this.props.match.params.cid.trim();

        let benefitContent = this.state.benefitContent;        
        let benefitSubTitle1 = this.state.benefitSubTitle1;
        let benefitSubTitle2 = this.state.benefitSubTitle2;
        let benefitSubTitle3 = this.state.benefitSubTitle3;
        let benefitSubTitle4 = this.state.benefitSubTitle4;
        let benefitSubTitle5 = this.state.benefitSubTitle5;
        let benefitSubTitle6 = this.state.benefitSubTitle6;
        let benefitSubContent1 = this.state.benefitSubContent1;
        let benefitSubContent2 = this.state.benefitSubContent2;
        let benefitSubContent3 = this.state.benefitSubContent3;
        let benefitSubContent4 = this.state.benefitSubContent4;
        let benefitSubContent5 = this.state.benefitSubContent5;
        let benefitSubContent6 = this.state.benefitSubContent6;
        let benefitImg = this.state.benefitImg;
        let benefitImg2 = this.state.benefitImg2;
        let benefitSubImg1 = this.state.benefitSubImg1;

        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(benefitData && benefitData.length > 0){
            actionType = 'modify';
            benefitData.forEach(element => {
                benefitContent = benefitContent !=="" ? benefitContent : element.benefitContent;
                benefitSubTitle1 = benefitSubTitle1 !=="" ? benefitSubTitle1 : element.benefitSubTitle1;
                benefitSubTitle2 = benefitSubTitle2 !=="" ? benefitSubTitle2 : element.benefitSubTitle2;
                benefitSubTitle3 = benefitSubTitle3 !=="" ? benefitSubTitle3 : element.benefitSubTitle3;
                benefitSubTitle4 = benefitSubTitle4 !=="" ? benefitSubTitle4 : element.benefitSubTitle4;
                benefitSubTitle5 = benefitSubTitle5 !=="" ? benefitSubTitle5 : element.benefitSubTitle5;
                benefitSubTitle6 = benefitSubTitle6 !=="" ? benefitSubTitle6 : element.benefitSubTitle6;
                benefitSubContent1 = benefitSubContent1 !=="" ? benefitSubContent1 : element.benefitSubContent1;
                benefitSubContent2 = benefitSubContent2 !=="" ? benefitSubContent2 : element.benefitSubContent2;
                benefitSubContent3 = benefitSubContent3 !=="" ? benefitSubContent3 : element.benefitSubContent3;
                benefitSubContent4 = benefitSubContent4 !=="" ? benefitSubContent4 : element.benefitSubContent4;
                benefitSubContent5 = benefitSubContent5 !=="" ? benefitSubContent5 : element.benefitSubContent5;
                benefitSubContent6 = benefitSubContent6 !=="" ? benefitSubContent6 : element.benefitSubContent6;
                benefitImg = benefitImg !==" " ? benefitImg : element.benefitImg;
                benefitImg2 = benefitImg2 !==" " ? benefitImg2 : element.benefitImg2;
                benefitSubImg1 = benefitSubImg1 !==" " ? benefitSubImg1 : element.benefitSubImg1;
            })
        }

        // image
        let benefitImgUpload ="";
        if(benefitImg === " "){
            benefitImgUpload = "/image/logo-1111.png";
        }else{
            benefitImgUpload = this.state.benefitImg !==' ' ?  this.state.benefitImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        }

        let benefitImg2Upload ="";
        if(benefitImg2 === " "){
            benefitImg2Upload = "/image/logo-1111.png";
        }else{
            benefitImg2Upload = this.state.benefitImg2 !==' ' ?  this.state.benefitImg2Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg2}`;
        }

        let benefitSubImg1Upload ="";
        if(benefitSubImg1 === " "){
            benefitSubImg1Upload = "/image/logo-1111.png";
        }else{
            benefitSubImg1Upload = this.state.benefitSubImg1 !==' ' ?  this.state.benefitSubImg1Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg1}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard3" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3">
                <h6 className="m-0 font-weight-bold">設定區段-員工福利</h6>
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
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='副標題' notice='(字數限制為40個字以內)' inputName='benefitContent' inputState={benefitContent}
                                           stateObj={this} required={true} checkValue='40' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片一 上傳' notice='(圖檔尺寸大小為 850*760，接受格式為png、jpg)' objName='benefitImg'  imgUpload={benefitImgUpload} 
                                            imgFileName={benefitImg} parentObj={this} imgW={850} imgH={760} required={true} />                                               
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片二 上傳' notice='(圖檔尺寸大小為 850*760，接受格式為png、jpg)' objName='benefitImg2'  imgUpload={benefitImg2Upload} imgFileName={benefitImg2} 
                                            parentObj={this} imgW={850} imgH={760} required={true}/> 
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='背景圖片 上傳' notice='(圖檔尺寸大小為 1330*660，接受格式為png、jpg)' objName='benefitSubImg1'  imgUpload={benefitSubImg1Upload} 
                                            imgFileName={benefitSubImg1} parentObj={this} imgW={1330} imgH={660} required={true} />                                               
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-1">
                                            <div className="card-header text-white bg-primary">小標題一</div>
                                        </a>                                    
                                        <div className="card-body collapse show" id="collapseCard3-1">
                                            <div className="form-row">

                                                <div className="col-md-6 mb-3">
                                                    <div className="form-row">
                                                        <InputText title='小標題1' notice='(字數限制為9個字以內)' inputName='benefitSubTitle1' inputState={benefitSubTitle1}
                                                            stateObj={this} required={true} checkValue='9' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題1內容' notice='(字數限制為50個字以內)' inputName='benefitSubContent1' inputState={benefitSubContent1}
                                                            rows='3' stateObj={this} required={true} checkValue='50' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-2">
                                            <div className="card-header text-white bg-primary">小標題二</div>
                                        </a>                                    
                                        <div className="card-body collapse" id="collapseCard3-2">
                                            <div className="form-row">

                                                <div className="col-md-6 mb-3">
                                                    <div className="form-row">
                                                        <InputText title='小標題2' notice='(字數限制為9個字以內)' inputName='benefitSubTitle2' inputState={benefitSubTitle2}
                                                            stateObj={this} required={true} checkValue='9' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題2內容' notice='(字數限制為50個字以內)' inputName='benefitSubContent2' inputState={benefitSubContent2}
                                                            rows='3' stateObj={this} required={true} checkValue='50' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-3">
                                            <div className="card-header text-white bg-primary">小標題三</div>
                                        </a>                                    
                                        <div className="card-body collapse" id="collapseCard3-3">
                                            <div className="form-row">

                                                <div className="col-md-6 mb-3">
                                                    <div className="form-row">
                                                        <InputText title='小標題3' notice='(字數限制為9個字以內)' inputName='benefitSubTitle3' inputState={benefitSubTitle3}
                                                            stateObj={this} required={true} checkValue='9' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題3內容' notice='(字數限制為50個字以內)' inputName='benefitSubContent3' inputState={benefitSubContent3}
                                                            rows='3' stateObj={this} required={true} checkValue='50' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-4">
                                            <div className="card-header text-white bg-primary">小標題四</div>
                                        </a>                                    
                                        <div className="card-body collapse" id="collapseCard3-4">
                                            <div className="form-row">

                                                <div className="col-md-6 mb-3">
                                                    <div className="form-row">
                                                        <InputText title='小標題4' notice='(字數限制為9個字以內)' inputName='benefitSubTitle4' inputState={benefitSubTitle4}
                                                            stateObj={this} required={true} checkValue='9' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題4內容' notice='(字數限制為50個字以內)' inputName='benefitSubContent4' inputState={benefitSubContent4}
                                                            rows='3' stateObj={this} required={true} checkValue='50' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-5" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-5">
                                            <div className="card-header text-white bg-primary">小標題五</div>
                                        </a>                                    
                                        <div className="card-body collapse" id="collapseCard3-5">
                                            <div className="form-row">

                                                <div className="col-md-6 mb-3">
                                                    <div className="form-row">
                                                        <InputText title='小標題5' notice='(字數限制為9個字以內)' inputName='benefitSubTitle5' inputState={benefitSubTitle5}
                                                            stateObj={this} required={true} checkValue='9' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題內容5' notice='(字數限制為50個字以內)' inputName='benefitSubContent5' inputState={benefitSubContent5}
                                                            rows='3' stateObj={this} required={true} checkValue='50' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-6" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-6">
                                            <div className="card-header text-white bg-primary">小標題六</div>
                                        </a>                                    
                                        <div className="card-body collapse" id="collapseCard3-6">
                                            <div className="form-row">

                                                <div className="col-md-6 mb-3">
                                                    <div className="form-row">
                                                        <InputText title='小標題6' notice='(字數限制為9個字以內)' inputName='benefitSubTitle6' inputState={benefitSubTitle6}
                                                            stateObj={this} required={true} checkValue='9' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題內容6' notice='(字數限制為50個字以內)' inputName='benefitSubContent6' inputState={benefitSubContent6}
                                                            rows='3' stateObj={this} required={true} checkValue='50' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
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