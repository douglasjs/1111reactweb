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
            introTitle : '',
            introMainContent : '',
            introSubTitle1 : '',
            introSubTitle1Img : ' ',
            introSubTitle1ImgUpload : ''
        }
    }

    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    /*handleFileUpload = (name, stateName, uploadName) => event =>{
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
    }*/

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid.trim();

        const submitObj={
            ono : cid,
            themeNum : event.target.themeNum2.value,
            introTitle : event.target.introTitle.value,
            introMainContent : event.target.introMainContent.value,
            introSubTitle1 : event.target.introSubTitle1.value,
            introSubTitle1Content : '',
            introSubTitle1ImgText : '',
            introSubTitle1Img : event.target.introSubTitle1Img.value,
            introSubTitle1ImgUpload : this.state.introSubTitle1ImgUpload ? this.state.introSubTitle1ImgUpload.value : null,

            introSubTitle2 : '',
            introSubTitle2Content : '',
            introSubTitle2ImgText : '',
            introSubTitle2Img : '',
            introSubTitle2ImgUpload : null,

            introSubTitle3 : '',
            introSubTitle3Content : '',
            introSubTitle3ImgText : '',
            introSubTitle3Img : '',
            introSubTitle3ImgUpload : null,

            intro1ImgUpload : null,
            intro1Img : '',
            intro2ImgUpload : null,
            intro2Img : '',
            intro3ImgUpload : null,
            intro3Img : '',
            intro4ImgUpload: null,
            intro4Img : '',
            intro5ImgUpload: null,
            intro5Img : '',
            intro6ImgUpload: null,
            intro6Img : '',
            intro7ImgUpload: null,
            intro7Img : '',
            intro8ImgUpload: null,
            intro8Img : '',
            intro9ImgUpload: null,
            intro9Img : '',
            intro10ImgUpload: null,
            intro10Img : '',
            introImgEnable : false
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
        let introSubTitle1Img = this.state.introSubTitle1Img;        
        
        let themeNum = this.props.themeNum;
        let actionType = 'create';
       
        if(introductionData && introductionData.length > 0){
            actionType = 'modify';
            introductionData.forEach(element => {
                introTitle = introTitle !== "" ? introTitle : element.introTitle;
                introMainContent = introMainContent !== "" ? introMainContent : element.introMainContent;
                introSubTitle1 = introSubTitle1 !== "" ? introSubTitle1 : element.introSubTitle1;
                introSubTitle1Img = introSubTitle1Img !== " " ? introSubTitle1Img : element.introSubTitle1Img;
            })
        }

        if(actionType === "create"){
            introMainContent = kind01_data && kind01_data.length > 0 && introMainContent === ' ' ? strNumLimite(kind01_data[0].brief,80)  : this.state.introMainContent;
            if(introSubTitle1 === ''){
                introSubTitle1 = `https://www.1111.com.tw/corp/${cid}/`;
            }
        }

         // image
         let introSubTitle1ImgUpload = "";
         if(introSubTitle1Img === " "){
            introSubTitle1ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle1ImgUpload = this.state.introSubTitle1Img !== ' ' ?  this.state.introSubTitle1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
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

                            <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                            
                            <div className="form-row">

                                <div className="col-md-6 mb-3">
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='主標題' notice='(建議字數為13個字以內)' inputName='introTitle' inputState={introTitle}
                                           stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='主內容' notice='(建議字數為175個字以內)' inputName='introMainContent' inputState={introMainContent}
                                           rows='5' stateObj={this} required={true} checkValue='500' />
                                    </div>
                                    <div className="form-row">
                                        <InputText title='了解更多網址' notice='(請輸入網址)' inputName='introSubTitle1' inputState={introSubTitle1}
                                            stateObj={this} required={true} checkValue='500' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片 上傳' notice='(圖檔尺寸大小為 1120*600，接受格式為png、jpg)' objName='introSubTitle1Img' imgUpload={introSubTitle1ImgUpload} 
                                            imgFileName={introSubTitle1Img} parentObj={this} imgW={1120} imgH={600} required={true} />                                               
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">                                    
                                    <div><img src="/image/sample_06/02.png" alt="Temp6_Company_title" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp6_company">觀看放大圖例</a></div>
                                    <hr />
                                    <div>
                                        <table border='1'>
                                            <thead>
                                                <tr>
                                                    <th width="10%">項目</th>
                                                    <th width="45%">內容範例</th>
                                                    <th width="15%">規格</th>
                                                    <th width="30%">備註</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>主標題</td>
                                                    <td align='left'>求職徵才的信賴品牌</td>
                                                    <td>建議13個字以內</td>
                                                    <td>
                                                        不可空白<br />
                                                        <a type="button" data-toggle="modal" href="#tmp6_company_title">觀看範例圖片</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>主內容</td>
                                                    <td align='left'>
                                                        1111人力銀行求職徵才的信賴品牌，榮獲2018年人力銀行服務業金牌大獎，提供最貼心的求才求職服務<br/>
                                                        2019幸福企業擴大徵才活動，以推動企業多提供好的福利，吸引優秀的人才，創造更佳的績效！<br />
                                                        以【熱誠】、【專業】為企業經營理念，堅持營造一個【人才、職缺、功能、媒合4個第1】求職求才媒合平台
                                                    </td>
                                                    <td>建議175個字以內</td>
                                                    <td>
                                                        不可空白<br />
                                                        <a type="button" data-toggle="modal" href="#tmp6_company_content">觀看範例圖片</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>了解更多網址</td>
                                                    <td align='left'>了解更多</td>
                                                    <td>請輸入網址</td>
                                                    <td>
                                                        不可空白<br />
                                                        <a type="button" data-toggle="modal" href="#tmp6_company_url">觀看範例圖片</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>圖片</td>
                                                    <td>寬、高(px)</td>
                                                    <td>1120*600</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>接受格式為png、jpg</li>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp6_company_pic">觀看範例圖片</a></li>
                                                        </ul>                                                
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="modal fade" id="tmp6_company">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_06/02.png" alt="tmp6_company" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp6_company_title">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主標題 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_06/02-1.png" alt="tmp6_company_title" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp6_company_content">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_06/02-2.png" alt="tmp6_company_content" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp6_company_url">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 了解更多網址 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_06/02-3.png" alt="tmp6_company_url" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="tmp6_company_pic">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 圖片 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_06/02-4.png" alt="tmp6_company_pic" width="100%" />
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