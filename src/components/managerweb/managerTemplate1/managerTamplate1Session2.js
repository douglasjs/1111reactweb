import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import Msg from '../msg';
import envConfig from '../../../config/env';
import {strNumLimite} from '../../sharecomponents/toolFunction';

class Session2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            introTitle: ' ',
            introMainContent: ' ',
            introSubTitle1: ' ',
            introSubTitle1Content: ' ',
            introSubTitle1ImgText: ' ',
            introSubTitle1Img: ' ',
            introSubTitle1ImgUpload: '',
            introSubTitle2: ' ',
            introSubTitle2Content: ' ',
            introSubTitle2ImgText: ' ',
            introSubTitle2Img: ' ',
            introSubTitle2ImgUpload: '',
            introSubTitle3: ' ',
            introSubTitle3Content: ' ',
            introSubTitle3ImgText: ' ',
            introSubTitle3Img: ' ',
            introSubTitle3ImgUpload: '',
        }
    }

    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    handleFileUpload = (name, stateName, uploadName) => event =>{
        const infoArea = document.getElementById(name);
        const input = event.target;
   

        if (input.files && input.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                
                const img = new Image();
                const that = this;
                img.src=reader.result;

                img.onload = function() {
                   if(img.width > 724 || img.height > 500){
                       alert('上傳圖片尺寸不合');
                       return false;
                   }else{
                        that.setState( {...this.state,
                            [uploadName]: {
                                file: URL.createObjectURL(file),
                                value : reader.result
                            }
                        });
                        infoArea.textContent = '上傳檔案名稱: ' + file.name;
                        const fileFullName = stateName + "_"+ file.name;
                        that.setState({ ...this.state, [stateName]: fileFullName });
                   }
                };
            };
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid.trim();

        const submitObj={
            ono: cid,
                themeNum : event.target.themeNum2.value,
                introTitle: event.target.introTitle.value,
                introMainContent: event.target.introMainContent.value,
                introSubTitle1: event.target.introSubTitle1.value,
                introSubTitle1Content:event.target.introSubTitle1Content.value,
                introSubTitle1ImgText:event.target.introSubTitle1ImgText.value,
                introSubTitle1Img:event.target.introSubTitle1Img.value,
                introSubTitle1ImgUpload: this.state.introSubTitle1ImgUpload ? this.state.introSubTitle1ImgUpload.value : null,

                introSubTitle2: event.target.introSubTitle2.value,
                introSubTitle2Content:event.target.introSubTitle2Content.value,
                introSubTitle2ImgText:event.target.introSubTitle2ImgText.value,
                introSubTitle2Img:event.target.introSubTitle2Img.value,
                introSubTitle2ImgUpload: this.state.introSubTitle2ImgUpload ? this.state.introSubTitle2ImgUpload.value : null,

                introSubTitle3: event.target.introSubTitle3.value,
                introSubTitle3Content:event.target.introSubTitle3Content.value,
                introSubTitle3ImgText:event.target.introSubTitle3ImgText.value,
                introSubTitle3Img:event.target.introSubTitle3Img.value,
                introSubTitle3ImgUpload: this.state.introSubTitle3ImgUpload ? this.state.introSubTitle3ImgUpload.value : null,

                intro1ImgUpload: null,
                intro1Img: "",
                intro2ImgUpload: null,
                intro2Img: "",
                intro3ImgUpload: null,
                intro3Img: "",
                intro4ImgUpload: null,
                intro4Img: "",
                intro5ImgUpload: null,
                intro5Img: "",
                intro6ImgUpload: null,
                intro6Img: "",
                intro7ImgUpload: null,
                intro7Img: "",
                intro8ImgUpload: null,
                intro8Img: "",
                intro9ImgUpload: null,
                intro9Img: "",
                intro10ImgUpload: null,
                intro10Img: "",
                introImgEnable: false
        }

        if(event.target.action2.value === 'create'){
            this.props.createintroduction(submitObj);            
        }
        if(event.target.action2.value === 'modify'){
            this.props.updateintroduction(submitObj);            
        }
    }
    
    render(){

        const { introductionData, introductionErr, introductionIsLoading} = this.props.introductionReducer;
        const { kind01_data } = this.props.kind01Reducer;
       

        const cid = this.props.match.params.cid.trim();

        let introTitle = this.state.introTitle;
        let introMainContent = this.state.introMainContent;
        let introSubTitle1 = this.state.introSubTitle1;
        let introSubTitle1Content = this.state.introSubTitle1Content;
        let introSubTitle1ImgText = this.state.introSubTitle1ImgText;
        let introSubTitle1Img = this.state.introSubTitle1Img;
        let introSubTitle2 = this.state.introSubTitle2;
        let introSubTitle2Content = this.state.introSubTitle2Content;
        let introSubTitle2ImgText = this.state.introSubTitle2ImgText;
        let introSubTitle2Img = this.state.introSubTitle2Img;
        let introSubTitle3 = this.state.introSubTitle3;
        let introSubTitle3Content = this.state.introSubTitle3Content;
        let introSubTitle3ImgText = this.state.introSubTitle3ImgText;
        let introSubTitle3Img = this.state.introSubTitle3Img;
        let themeNum = 'tp01';
        let actionType = 'create';
       
        if(introductionData && introductionData.length > 0){
            actionType = 'modify';
            introductionData.forEach(element => {
                introTitle = introTitle !==" " ? introTitle : element.introTitle;
                introMainContent = introMainContent !==" " ? introMainContent : element.introMainContent;

                introSubTitle1 = introSubTitle1 !==" " ? introSubTitle1 : element.introSubTitle1;
                introSubTitle1Content = introSubTitle1Content !==" " ? introSubTitle1Content : element.introSubTitle1Content;
                introSubTitle1ImgText = introSubTitle1ImgText !==" " ? introSubTitle1ImgText : element.introSubTitle1ImgText;
                introSubTitle1Img = introSubTitle1Img !==" " ? introSubTitle1Img : element.introSubTitle1Img;

                introSubTitle2 = introSubTitle2 !==" " ? introSubTitle2 : element.introSubTitle2;
                introSubTitle2Content = introSubTitle2Content !==" " ? introSubTitle2Content : element.introSubTitle2Content;
                introSubTitle2ImgText = introSubTitle2ImgText !==" " ? introSubTitle2ImgText : element.introSubTitle2ImgText;
                introSubTitle2Img = introSubTitle2Img !==" " ? introSubTitle2Img : element.introSubTitle2Img;

                introSubTitle3 = introSubTitle3 !==" " ? introSubTitle3 : element.introSubTitle3;
                introSubTitle3Content = introSubTitle3Content !==" " ? introSubTitle3Content : element.introSubTitle3Content;
                introSubTitle3ImgText = introSubTitle3ImgText !==" " ? introSubTitle3ImgText : element.introSubTitle3ImgText;
                introSubTitle3Img = introSubTitle3Img !==" " ? introSubTitle3Img : element.introSubTitle3Img;

            })
        }

        if(actionType === "create"){
            introMainContent = kind01_data && kind01_data.length > 0 && introMainContent === ' ' ? strNumLimite(kind01_data[0].brief,80)  : this.state.introMainContent;
        }

         // image
         let introSubTitle1ImgUpload ="";
         if(introSubTitle1Img === " "){
            introSubTitle1ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle1ImgUpload = this.state.introSubTitle1Img !==' ' ?  this.state.introSubTitle1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
         }

         let introSubTitle2ImgUpload ="";
         if(introSubTitle2Img === " "){
            introSubTitle2ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle2ImgUpload = this.state.introSubTitle2Img !==' ' ?  this.state.introSubTitle2ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle2Img}`;
         }

         let introSubTitle3ImgUpload ="";
         if(introSubTitle3Img === " "){
            introSubTitle3ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle3ImgUpload = this.state.introSubTitle3Img !==' ' ?  this.state.introSubTitle3ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle3Img}`;
         }


        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard2" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2">
                    <h6 className="m-0 font-weight-bold">設定區段-公司介紹</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard2">
                    <div className="card-body">
                        <Msg type ='LOADING'  value = {introductionIsLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {introductionErr} text= 'Opps! Error : ' />
                        <form id='dataForm2' className={introductionIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                            <input type="hidden" id="themeNum2" value={themeNum} />

                            <div><img src="/image/sample_01/02.png" alt="Temp1_Company" width="50%"/></div>
                            <div><a type="button" data-toggle="modal" href="#tmp1_company">觀看放大圖例</a></div>
                            <hr />

                            <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                            
                            <div className="form-row">

                                <div className="col-md-6 mb-3">
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='主標題' notice='(建議字數為20個字以內)' inputName='introTitle' inputState={introTitle}
                                           stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='主內容' notice='(建議字數為92個字以內)' inputName='introMainContent' inputState={introMainContent}
                                           rows='4' stateObj={this} required={true} checkValue='200' />
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">                                    
                                    <div><img src="/image/sample_01/02-1.png" alt="Temp1_Company_title" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp1_company_02">觀看放大圖例</a></div>
                                    <hr />
                                    <div>
                                        <table border='1'>
                                            <thead>
                                            <tr>
                                                <th width="10%">項目</th>
                                                <th width="35%">內容範例</th>
                                                <th width="15%">規格</th>
                                                <th width="40%">備註</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>主標題</td>
                                                <td align='left'>求職徵才的信賴品牌</td>
                                                <td>建議20個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp1_company_title">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>主內容</td>
                                                <td align='left'>1111人力銀行求職徵才的信賴品牌，榮獲2018年人力銀行服務業金牌大獎，提供最貼心的求才求職服務</td>
                                                <td>建議92個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp1_company_content">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="modal fade" id="tmp1_company">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02.png" alt="tmp1_company" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp1_company_02">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主標題/內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-1.png" alt="tmp1_company_02" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp1_company_title">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主標題 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-1-1.png" alt="tmp1_company_title" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp1_company_content">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-1-2.png" alt="tmp1_company_content" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <label><span className='text-danger'>*</span>小標題一 <em className='text-primary'>(必填)</em> </label>
                            </div>

                            <div>
                                <div className="card">
                                    <a href="#collapseCard2-1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2-1">
                                        <div className="card-header text-white bg-primary">小標題一</div>
                                    </a>                                    
                                    <div className="card-body collapse show" id="collapseCard2-1">
                                        <div className="form-row">

                                            <div className="col-md-6 mb-3">
                                                <div className="form-row">
                                                    <InputText title='小標題1' notice='(限制字數為12個字以內)' inputName='introSubTitle1' inputState={introSubTitle1}
                                                        stateObj={this} required={true} checkValue='12' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputTextArea title='小標題1內容' notice='(建議字數為38個字以內)' inputName='introSubTitle1Content' inputState={introSubTitle1Content}
                                                        rows='3' stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputText title='小標題1圖片文字' notice='(建議字數為24個字以內)' inputName='introSubTitle1ImgText' inputState={introSubTitle1ImgText}
                                                        stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='小標題1圖片 上傳' notice='(圖檔尺寸大小為 724*500，接受格式為png、jpg)' notice2='請放置原始圖片，版型已經有帶遮罩' objName='introSubTitle1Img' imgUpload={introSubTitle1ImgUpload} 
                                                        imgFileName={introSubTitle1Img} parentObj={this} imgW={724} imgH={500} required={true} />                                               
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <div><img src="/image/sample_01/02-2.png" alt="Temp1_Company_card01" width="100%"/></div>
                                                <div><a type="button" data-toggle="modal" href="#tmp1_company_card01">觀看放大圖例</a>
                                                </div>
                                                <hr />
                                                <div>
                                                    <table border='1'>
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">項目</th>
                                                                <th width="35%">內容範例</th>
                                                                <th width="15%">規格</th>
                                                                <th width="30%">備註</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>小標題1</td>
                                                                <td align='left'>幸福企業擴大徵才</td>
                                                                <td>12個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card01_title">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題1 內容</td>
                                                                <td align='left'>2019幸福企業擴大徵才活動，以推動企業多提供好的福利，吸引優秀的人才，創造更佳的績效！</td>
                                                                <td>建議38個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card01_content">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題1 圖片文字</td>
                                                                <td align='left'>推動企業多提供好的福利，吸引優秀的人才</td>
                                                                <td>建議24個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card01_pictext">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題1 圖片</td>
                                                                <td align='left'>寬、高(px)</td>
                                                                <td>724*500</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card01_pic">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp1_company_card01">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題一 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-2.png" alt="tmp1_company_card01" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card01_title">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題1 標題 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-2-1.png" alt="temp1_Company_card01_title" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card01_content">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題1 內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-2-2.png" alt="temp1_Company_card01_content" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card01_pictext">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題1 圖片文字 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-2-3.png" alt="temp1_Company_card01_pictext" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card01_pic">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題1 圖片 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-2-4.png" alt="temp1_Company_card01_pic" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <label><span className='text-danger'>*</span>小標題二 <em className='text-primary'>(必填)</em> </label>
                            </div>

                            <div>
                                <div className="card">
                                    <a href="#collapseCard2-2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2-2">
                                        <div className="card-header text-white bg-primary">小標題二</div>
                                    </a>                                    
                                    <div className="card-body collapse show" id="collapseCard2-2">
                                        <div className="form-row">

                                            <div className="col-md-6 mb-3">
                                                <div className="form-row">
                                                    <InputText title='小標題2' notice='(限制字數為12個字以內)' inputName='introSubTitle2' inputState={introSubTitle2}
                                                        stateObj={this} required={true} checkValue='12' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputTextArea title='小標題2內容' notice='(建議字數為38個字以內)' inputName='introSubTitle2Content' inputState={introSubTitle2Content}
                                                        rows='3' stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputText title='小標題2圖片文字' notice='(建議字數為24個字以內)' inputName='introSubTitle2ImgText' inputState={introSubTitle2ImgText}
                                                        stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='小標題2圖片 上傳' notice='(圖檔尺寸大小為 724*500，接受格式為png、jpg)' notice2='請放置原始圖片，版型已經有帶遮罩' objName='introSubTitle2Img'  imgUpload={introSubTitle2ImgUpload} 
                                                        imgFileName={introSubTitle2Img} parentObj={this} imgW={724} imgH={500} required={true} />                                          
                                                </div>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <div><img src="/image/sample_01/02-3.png" alt="Temp1_Company_card02" width="100%"/></div>
                                                <div><a type="button" data-toggle="modal" href="#tmp1_company_card02">觀看放大圖例</a></div>
                                                <hr />
                                                <div>
                                                    <table border='1'>
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">項目</th>
                                                                <th width="35%">內容範例</th>
                                                                <th width="15%">規格</th>
                                                                <th width="30%">備註</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>小標題2</td>
                                                                <td align='left'>人才、職缺、功能、媒合</td>
                                                                <td>12個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card02_title">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題2 內容</td>
                                                                <td align='left'>以【熱誠】、【專業】為企業經營理念，堅持營造一個【人才、職缺、功能、媒合4個第1】求職求才媒合平台</td>
                                                                <td>建議38個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card02_content">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題2 圖片</td>
                                                                <td align='left'>寬、高(px)</td>
                                                                <td>724*500</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card02_pictext">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題2 圖片文字</td>
                                                                <td align='left'>人才、職缺、功能、媒合4個第1求職求才媒合平台</td>
                                                                <td>建議24個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card02_pic">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp1_company_card02">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題二 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-3.png" alt="tmp1_company_card02" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card02_title">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題2 標題 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-3-1.png" alt="temp1_Company_card02_title" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card02_content">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題2 內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-3-2.png" alt="temp1_Company_card02_content" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card02_pictext">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題2 圖片文字 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-3-3.png" alt="temp1_Company_card02_pictext" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card02_pic">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題2 圖片 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-3-4.png" alt="temp1_Company_card02_pic" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
  
  
                            <div className="form-row">
                                <label><span className='text-danger'>*</span>小標題三 <em className='text-primary'>(必填)</em> </label>
                            </div>

                            <div>
                                <div className="card">
                                    <a href="#collapseCard2-3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard2-3">
                                        <div className="card-header text-white bg-primary">小標題三</div>
                                    </a>                                    
                                    <div className="card-body collapse show" id="collapseCard2-3">
                                        <div className="form-row">

                                            <div className="col-md-6 mb-3">
                                                <div className="form-row">
                                                    <InputText title='小標題3' notice='(限制字數為12個字以內)' inputName='introSubTitle3' inputState={introSubTitle3}
                                                        stateObj={this} required={true} checkValue='12' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputTextArea title='小標題3內容' notice='(建議字數為38個字以內)' inputName='introSubTitle3Content' inputState={introSubTitle3Content}
                                                        rows='3' stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <InputText title='小標題3圖片文字' notice='(建議字數為24個字以內)' inputName='introSubTitle3ImgText' inputState={introSubTitle3ImgText}
                                                        stateObj={this} required={true} checkValue='100' />
                                                </div>
                                                <div className="form-row row-style-w95-pt1">
                                                    <ImgUpload title='小標題3圖片 上傳' notice='(圖檔尺寸大小為 724*500，接受格式為png、jpg)' notice2='請放置原始圖片，版型已經有帶遮罩' objName='introSubTitle3Img'  imgUpload={introSubTitle3ImgUpload} 
                                                        imgFileName={introSubTitle3Img} parentObj={this} imgW={724} imgH={500} required={true} />                                          
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-6 mb-3">
                                                <div><img src="/image/sample_01/02-4.png" alt="Temp1_Company_card03" width="100%"/></div>
                                                <div><a type="button" data-toggle="modal" href="#tmp1_company_card03">觀看放大圖例</a></div>
                                                <hr />
                                                <div>
                                                    <table border='1'>
                                                        <thead>
                                                            <tr>
                                                                <th width="20%">項目</th>
                                                                <th width="35%">內容範例</th>
                                                                <th width="15%">規格</th>
                                                                <th width="30%">備註</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>小標題3</td>
                                                                <td align='left'>科技人才智庫</td>
                                                                <td>12個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card03_title">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題3 內容</td>
                                                                <td align='left'>1111人力銀行成立兩岸三地唯一的科技人才智庫，將兩岸三地的科技人才全部網羅其中，讓人才無疆界，達到人盡其才的目標</td>
                                                                <td>建議38個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card03_content">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題3 圖片</td>
                                                                <td align='left'>寬、高(px)</td>
                                                                <td>724*500</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card03_pictext">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>小標題3 圖片文字</td>
                                                                <td align='left'>兩岸三地唯一的科技人才智庫</td>
                                                                <td>建議24個字以內</td>
                                                                <td>
                                                                    不可空白<br />
                                                                    <a type="button" data-toggle="modal" href="#temp1_Company_card03_pic">觀看範例圖片</a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp1_company_card03">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題三 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-4.png" alt="tmp1_company_card03" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card03_title">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題3 標題 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-4-1.png" alt="temp1_Company_card03_title" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card03_content">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題3 內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-4-2.png" alt="temp1_Company_card03_content" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card03_pictext">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題3 圖片文字 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-4-3.png" alt="temp1_Company_card03_pictext" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="temp1_Company_card03_pic">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 小標題3 圖片 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_01/02-4-4.png" alt="temp1_Company_card03_pic" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div align="center">
                                <button type='submit' id='action2' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                            </div>
                        </form>
                    </div>
                 </div>
           </div>
             
        )

    }


}
export default Session2;