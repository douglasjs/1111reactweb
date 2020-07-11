import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import Msg from '../msg';
import envConfig from '../../../config/env';

class Session1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title : '',
            companySubTitle1 : '',
            companySubTitle2 : '',
            companyBackgroundImg1 : ' ',
            companyBackgroundImg1Upload : ''
        };
    }


    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        if(event.target.title.value){
            if(event.target.title.value ===' '){
                return false;
            }
        }
        if(event.target.companySubTitle1.value){
            if(event.target.companySubTitle1.value ===' '){
                return false;
            }
        }

        const　comObj = {
            ono: cid,
            themeNum : event.target.themeNum.value,
            title : event.target.title.value,
            title2 : '',
            title3 : '',
            companySubTitle1 : event.target.companySubTitle1.value,
            companySubTitle2 : event.target.companySubTitle2.value,
            companySubTitle3 : '',
            companyBackgroundImg1 : event.target.companyBackgroundImg1.value,
            companyBackgroundImg2 : '',
            companyBackgroundImg3 : '',
            UploadImg1 : this.state.companyBackgroundImg1Upload ? this.state.companyBackgroundImg1Upload.value : null,
            UploadImg2 : null,
            uploadImg3 : null
        }

        if(event.target.action1.value === 'create'){
            this.props.createCompany(comObj);
        }

        if(event.target.action1.value === 'modify'){
            this.props.updateCompany(comObj);
        }

    }
    
    render(){
        const { companyData, companyErr, companyIsLoading} = this.props.companyReducer;
        const cid = this.props.match.params.cid.trim();

        let title = this.state.title;
        let companySubTitle1 = this.state.companySubTitle1;
        let companySubTitle2 = this.state.companySubTitle2;
        let companyBackgroundImg1 = this.state.companyBackgroundImg1;
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(companyData && companyData.length > 0){
            actionType = 'modify';
            companyData.forEach(element => {
                title = title !== "" ? title : element.title;
                companySubTitle1 = companySubTitle1 !== "" ? companySubTitle1 : element.companySubTitle1;
                companySubTitle2 = companySubTitle2 !== "" ? companySubTitle2 : element.companySubTitle2;
                companyBackgroundImg1 = companyBackgroundImg1 !== " " ? companyBackgroundImg1 : element.companyBackgroundImg1;
                
            })
        }

        // image
        let companyBackgroundImg1Upload ="";
        if(companyBackgroundImg1 === " "){
           companyBackgroundImg1Upload = "/image/logo-1111.png";
        }else{
           companyBackgroundImg1Upload = this.state.companyBackgroundImg1 !==' ' ?  this.state.companyBackgroundImg1Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard1" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard1">
                    <h6 className="m-0 font-weight-bold">設定區段-主視覺</h6>
                </a>
                <div className="collapse show" id="collapseCard1">
                    <div className="card-body">
                        
                        <Msg type ='LOADING'  value = {companyIsLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {companyErr} text= 'Opps! Error : ' />
                        <div  className={companyIsLoading ? 'd-none' : 'form-row'} >
                            
                            <div className="col-md-6 mb-3">

                                <form id='dataForm1'  onSubmit={this.handleSubmit}>
                                
                                    <input type="hidden" id="themeNum" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='大標題' notice='(字數限制為33個字以內)' inputName='title' inputState={title}
                                           stateObj={this} required={true} checkValue='30' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='副標題' notice='(字數限制為22個字以內)' inputName='companySubTitle1' inputState={companySubTitle1}
                                           stateObj={this} required={true} checkValue='22' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='短文' notice='(字數限制為96個字以內)' inputName='companySubTitle2' inputState={companySubTitle2}
                                           rows='4' stateObj={this} required={true} checkValue='96' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='背景圖片' notice='(圖檔尺寸大小為 1800*1100 ，接受格式為png、jpg)' objName='companyBackgroundImg1'  imgUpload={companyBackgroundImg1Upload} imgFileName={companyBackgroundImg1} 
                                            parentObj={this}  imgW={1800} imgH={1100} required={true}/> 
                                    </div>
                                    
                                    <hr />
                                    <div align="center">
                                        <button type='submit' id='action1' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="pic-bigger"><img src="/image/sample_04/01.png" alt="Temp4_Banner" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp4_banner">
                                        觀看放大圖例
                                    </a>
                                </div>
                                <hr />
                                <div>
                                    <table border='1'>
                                        <thead>
                                            <tr>
                                                <th width="20%">項目</th>
                                                <th width="35%">內容</th>
                                                <th width="15%">規格</th>
                                                <th width="20%">備註</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>背景圖</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>1800*1100</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>因特殊效果關係，請特別注意圖片主視覺位置，可參考比例說明</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp4_banner_pic">觀看範例圖片</a></li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp4_slide_sample">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>大標題</td>
                                                <td align='left'>【Sharing melts our hearts.分享｡讓心融化】</td>
                                                <td>字數限制為30個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>副標題</td>
                                                <td align='left'>歡迎負責、熱情、有同理心的你</td>
                                                <td>22個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>短文</td>
                                                <td align='left'>在餐廳裡，甜點是飽餐一頓的完美句點；在亞尼克，甜點是美好生活的幸福起點。</td>
                                                <td>96個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                        </tbody>                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="tmp4_banner">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">主視覺範例</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="/image/sample_04/01.png" alt="tmp4_banner" width="100%" />
                            </div>
                            <div className="modal-footer">
                                <p className="small">範例僅供參考</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="tmp4_banner_pic">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">主視覺範例</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="/image/sample_04/01-1.png" alt="tmp4_banner_pic" width="100%" />
                            </div>
                            <div className="modal-footer">
                                <p className="small">範例僅供參考</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="tmp4_slide_sample">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">主視覺範例</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="/image/sample_04/slider_sample.jpg" alt="tmp4_slide_sample" width="100%" />
                            </div>
                            <div className="modal-footer">
                                <p className="small">範例僅供參考</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        )
    

    }


  
}
export default Session1;