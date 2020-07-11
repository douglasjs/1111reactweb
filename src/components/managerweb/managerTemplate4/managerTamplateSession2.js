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
            introSubTitle1Img : ' ',
            introSubTitle1ImgUpload : '',            
            introSubTitle2Img : ' ',
            introSubTitle2ImgUpload : '',            
            introSubTitle3Img: ' ',
            introSubTitle3ImgUpload: ''
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
                introTitle : event.target.introTitle.value,
                introMainContent : event.target.introMainContent.value,
                introSubTitle1 : '',
                introSubTitle1Content : '',
                introSubTitle1ImgText : '',
                introSubTitle1Img : event.target.introSubTitle1Img.value,
                introSubTitle1ImgUpload : this.state.introSubTitle1ImgUpload ? this.state.introSubTitle1ImgUpload.value : null,

                introSubTitle2 : '',
                introSubTitle2Content : '',
                introSubTitle2ImgText : '',
                introSubTitle2Img : event.target.introSubTitle2Img.value,
                introSubTitle2ImgUpload : this.state.introSubTitle2ImgUpload ? this.state.introSubTitle2ImgUpload.value : null,

                introSubTitle3 : '',
                introSubTitle3Content : '',
                introSubTitle3ImgText : '',
                introSubTitle3Img : event.target.introSubTitle3Img.value,
                introSubTitle3ImgUpload : this.state.introSubTitle3ImgUpload ? this.state.introSubTitle3ImgUpload.value : null,

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
        let introSubTitle1Img = this.state.introSubTitle1Img;        
        let introSubTitle2Img = this.state.introSubTitle2Img;
        let introSubTitle3Img = this.state.introSubTitle3Img;
        let themeNum = this.props.themeNum;
        let actionType = 'create';
       
        if(introductionData && introductionData.length > 0){
            actionType = 'modify';
            introductionData.forEach(element => {
                introTitle = introTitle !== "" ? introTitle : element.introTitle;
                introMainContent = introMainContent !== "" ? introMainContent : element.introMainContent;
                
                introSubTitle1Img = introSubTitle1Img !== " " ? introSubTitle1Img : element.introSubTitle1Img;

                introSubTitle2Img = introSubTitle2Img !== " " ? introSubTitle2Img : element.introSubTitle2Img;

                introSubTitle3Img = introSubTitle3Img !== " " ? introSubTitle3Img : element.introSubTitle3Img;

            })
        }

        if(actionType === "create"){
            introMainContent = kind01_data && kind01_data.length > 0 && introMainContent === '' ? strNumLimite(kind01_data[0].brief,80)  : this.state.introMainContent;
        }

         // image
         let introSubTitle1ImgUpload = "";
         if(introSubTitle1Img === " "){
            introSubTitle1ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle1ImgUpload = this.state.introSubTitle1Img !== ' ' ?  this.state.introSubTitle1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle1Img}`;
         }

         let introSubTitle2ImgUpload = "";
         if(introSubTitle2Img === " "){
            introSubTitle2ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle2ImgUpload = this.state.introSubTitle2Img !== ' ' ?  this.state.introSubTitle2ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle2Img}`;
         }

         let introSubTitle3ImgUpload = "";
         if(introSubTitle3Img === " "){
            introSubTitle3ImgUpload = "/image/logo-1111.png";
         }else{
            introSubTitle3ImgUpload = this.state.introSubTitle3Img !== ' ' ?  this.state.introSubTitle3ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${introSubTitle3Img}`;
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
                                        <InputText title='主標題' notice='(字數限制為13個字以內)' inputName='introTitle' inputState={introTitle}
                                           stateObj={this} required={true} checkValue='13' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='主內容' notice='(字數限制為260個字以內)' inputName='introMainContent' inputState={introMainContent}
                                           rows='5' stateObj={this} required={true} checkValue='260' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片1 上傳' notice='(圖檔尺寸大小為 900*800，接受格式為png、jpg)' objName='introSubTitle1Img'  imgUpload={introSubTitle1ImgUpload} 
                                            imgFileName={introSubTitle1Img} parentObj={this} imgW={900} imgH={800} required={true} />                                               
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片2 上傳' notice='(圖檔尺寸大小為 900*800，接受格式為png、jpg)' objName='introSubTitle2Img'  imgUpload={introSubTitle2ImgUpload} 
                                            imgFileName={introSubTitle2Img} parentObj={this} imgW={900} imgH={800} required={true} />                                          
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片3 上傳' notice='(圖檔尺寸大小為 900*800，接受格式為png、jpg)' objName='introSubTitle3Img'  imgUpload={introSubTitle3ImgUpload} 
                                            imgFileName={introSubTitle3Img} parentObj={this} imgW={900} imgH={800} required={true} />                                          
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">                                    
                                    <div><img src="/image/sample_04/02.png" alt="Temp4_Company" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp4_company">觀看放大圖例</a></div>
                                    <hr />
                                    <div>
                                        <table border='1'>
                                            <thead>
                                                <tr>
                                                    <th width="20%">項目</th>
                                                    <th width="35%">內容範例</th>
                                                    <th width="15%">規格</th>
                                                    <th width="20%">備註</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>主標題</td>
                                                    <td align='left'>加入亞尼克</td>
                                                    <td>13個字以內</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp4_company_title">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>主內容</td>
                                                    <td align='left'>
                                                        20年來，亞尼克不斷在企業經營及產品品質上，以高標準自我要求，
                                                        每個環節的層層把關，從原物料嚴選、製程控管，並且不停持續研發創新。
                                                        讓我們從萬里小鎮，一間小小七坪蛋糕工作坊發跡，一路走來到現在，
                                                        更擁有北中南全台擁有多家門市，並且持續擴大經營中，
                                                        為的是將最好的甜點分享給更多的消費者。
                                                    </td>
                                                    <td>260個字以內</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp4_company_title">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>圖片 1</td>
                                                    <td align='left'>寬、高(px)</td>
                                                    <td>900*800</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>接受格式為png、jpg</li>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp4_company_pic01">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>圖片 2</td>
                                                    <td align='left'>寬、高(px)</td>
                                                    <td>900*800</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>接受格式為png、jpg</li>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp4_company_pic02">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>圖片 3</td>
                                                    <td align='left'>寬、高(px)</td>
                                                    <td>900*800</td>
                                                    <td align='left'>
                                                        <ul>
                                                            <li>接受格式為png、jpg</li>
                                                            <li>不可空白</li>
                                                            <li><a type="button" data-toggle="modal" href="#tmp4_company_pic03">觀看範例圖片</a></li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="modal fade" id="tmp4_company">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_04/02.png" alt="tmp4_company" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="tmp4_company_title">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 主標題/主內容 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_04/02-1.png" alt="tmp4_company_title" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="tmp4_company_pic01">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 圖片1 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_04/02-2-1.png" alt="tmp4_company_pic01" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="tmp4_company_pic02">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 圖片2 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_04/02-2-2.png" alt="tmp4_company_pic02" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="tmp4_company_pic03">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介 - 圖片3 範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_04/02-2-3.png" alt="tmp4_company_pic03" width="100%" />
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