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
            introSubTitle1Content : '',
            introSubTitle1Img : ' ',
            introSubTitle1ImgUpload : '',
            introSubTitle2Content : '',
            introSubTitle3Content : ''
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
            ono : cid,
            themeNum : event.target.themeNum2.value,
            introTitle : event.target.introTitle.value,
            introMainContent : event.target.introMainContent.value,
            introSubTitle1 : event.target.introSubTitle1.value,
            introSubTitle1Content : event.target.introSubTitle1Content.value,
            introSubTitle1ImgText : '',
            introSubTitle1Img : event.target.introSubTitle1Img.value,
            introSubTitle1ImgUpload : this.state.introSubTitle1ImgUpload ? this.state.introSubTitle1ImgUpload.value : null,

            introSubTitle2 : '',
            introSubTitle2Content : event.target.introSubTitle2Content.value,
            introSubTitle2ImgText : '',
            introSubTitle2Img : '',
            introSubTitle2ImgUpload : null,

            introSubTitle3 : '',
            introSubTitle3Content : event.target.introSubTitle3Content.value,
            introSubTitle3ImgText : '',
            introSubTitle3Img : '',
            introSubTitle3ImgUpload : null,

            intro1ImgUpload : null,
            intro1Img : '',
            intro2ImgUpload : null,
            intro2Img : '',
            intro3ImgUpload : null,
            intro3Img : '',
            intro4ImgUpload : null,
            intro4Img : '',
            intro5ImgUpload : null,
            intro5Img : '',
            intro6ImgUpload : null,
            intro6Img : '',
            intro7ImgUpload : null,
            intro7Img : '',
            intro8ImgUpload : null,
            intro8Img : '',
            intro9ImgUpload : null,
            intro9Img : '',
            intro10ImgUpload : null,
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
        let introSubTitle1Content = this.state.introSubTitle1Content;
        let introSubTitle1Img = this.state.introSubTitle1Img;
        let introSubTitle2Content = this.state.introSubTitle2Content;
        let introSubTitle3Content = this.state.introSubTitle3Content;
        let themeNum = this.props.themeNum;
        let actionType = 'create';
       
        if(introductionData && introductionData.length > 0){
            actionType = 'modify';
            introductionData.forEach(element => {
                introTitle = introTitle !== "" ? introTitle : element.introTitle;
                introMainContent = introMainContent !== "" ? introMainContent : element.introMainContent;

                introSubTitle1 = introSubTitle1 !== "" ? introSubTitle1 : element.introSubTitle1;
                introSubTitle1Content = introSubTitle1Content !== "" ? introSubTitle1Content : element.introSubTitle1Content;
                introSubTitle1Img = introSubTitle1Img !== " " ? introSubTitle1Img : element.introSubTitle1Img;

                introSubTitle2Content = introSubTitle2Content !== "" ? introSubTitle2Content : element.introSubTitle2Content;
                introSubTitle3Content = introSubTitle3Content !== "" ? introSubTitle3Content : element.introSubTitle3Content;
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
                                        <InputText title='主標題' notice='(字數限制為8個字以內)' inputName='introTitle' inputState={introTitle}
                                           stateObj={this} required={true} checkValue='8' />
                                    </div>
                                    <div className="form-row">
                                        <InputText title='副標題' notice='(字數限制為8個字以內)' inputName='introSubTitle1' inputState={introSubTitle1}
                                            stateObj={this} required={true} checkValue='8' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='主內容' notice='(字數限制為290個字以內)' inputName='introMainContent' inputState={introMainContent}
                                           rows='6' stateObj={this} required={true} checkValue='290' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='短文1內容' notice='(字數限制為13個字以內)' inputName='introSubTitle1Content' inputState={introSubTitle1Content}
                                            rows='1' stateObj={this} required={true} checkValue='13' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='短文2內容' notice='(字數限制為13個字以內)' inputName='introSubTitle2Content' inputState={introSubTitle2Content}
                                            rows='1' stateObj={this} required={true} checkValue='13' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='短文3內容' notice='(字數限制為13個字以內)' inputName='introSubTitle3Content' inputState={introSubTitle3Content}
                                            rows='1' stateObj={this} required={true} checkValue='13' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='圖片 上傳' notice='(圖檔尺寸大小為 750*590，接受格式為png、jpg)' objName='introSubTitle1Img'  imgUpload={introSubTitle1ImgUpload} 
                                            imgFileName={introSubTitle1Img} parentObj={this} imgW={750} imgH={590} required={true} />                                               
                                    </div>
                                    <hr />
                                    <div align="center">
                                        <button type='submit' id='action2' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="pic-bigger"><img src="/image/sample_02/02.png" alt="Temp2_Company" width="100%"/></div>
                                    <div><a type="button" data-toggle="modal" href="#tmp2_company">觀看放大圖例</a></div>
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
                                                    <td align='left'>媽咪樂MHHS</td>
                                                    <td>8個字以內</td>
                                                    <td>不可空白</td>
                                                </tr>
                                                <tr>
                                                    <td>副標題</td>
                                                    <td align='left'>新一代 居家服務集團</td>
                                                    <td>8個字以內</td>
                                                    <td>不可空白</td>
                                                </tr>
                                                <tr>
                                                    <td>主內容</td>
                                                    <td align='left'>以「滿足人的需求」為出發，成立於1996年的「順遠工程」，秉持著服務社會的熱誠、改善環境的品質為理念，充分運用團隊管理的優勢，兢兢業業地塑造出積極、創新的立業精神，期許以專業的清潔施工技術，給予消費者一個最舒適的環境。
    而企業內所提倡的三意，指的便是夥伴樂意、 顧客滿意、經營得意這三大目標。</td>
                                                    <td>290個字以內</td>
                                                    <td>不可空白</td>
                                                </tr>
                                                <tr>
                                                    <td>短文1內容</td>
                                                    <td align='left'>深耕二十餘年，100%正職嚴選管家</td>
                                                    <td>13個字以內</td>
                                                    <td>不可空白</td>
                                                </tr>
                                                <tr>
                                                    <td>短文2內容</td>
                                                    <td align='left'>投入百萬教育訓練預算，培育專業職人</td>
                                                    <td>13個字以內</td>
                                                    <td>不可空白</td>
                                                </tr>
                                                <tr>
                                                    <td>短文3內容</td>
                                                    <td align='left'>比照公家機關休，員工每年享有旅遊福利</td>
                                                    <td>13個字以內</td>
                                                    <td>不可空白</td>
                                                </tr>
                                                <tr>
                                                    <td>圖片</td>
                                                    <td align='left'>寬、高(px)</td>
                                                    <td>750*590</td>
                                                    <td>不可空白</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="modal fade" id="tmp2_company">
                                <div className="modal-dialog sample-img-width">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <p className="modal-title">公司簡介範例</p>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>
                                        <div className="modal-body text-center">
                                            <img src="/image/sample_02/02.png" alt="tmp2_company" width="100%" />
                                        </div>
                                        <div className="modal-footer">
                                            <p className="small">範例僅供參考</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                 </div>
           </div>
             
        )

    }


}
export default Session2;