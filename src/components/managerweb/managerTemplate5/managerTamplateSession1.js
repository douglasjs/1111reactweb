import React from 'react';
import InputText from '../../sharecomponents/inputText';
import ImgUpload from '../../sharecomponents/imgUpload';
import Msg from '../msg';
import envConfig from '../../../config/env';

class Session1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            title : '',
            title2 : '',
            companySubTitle1 : '',
            companySubTitle2 : '',
            companyBackgroundImg1: ' ',
            companyBackgroundImg1Upload:'',
            companyBackgroundImg2: ' ',
            companyBackgroundImg2Upload:''
        };
    }


    handleChange = name => event => {
        let newValue = event.target.value;
        this.setState({ ...this.state, [name]: newValue});

    };

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const　comObj = {
            ono: cid,
            themeNum : event.target.themeNum.value,
            title : event.target.title.value,
            title2 : event.target.title2.value,
            title3 : '',
            companySubTitle1 : event.target.companySubTitle1.value,
            companySubTitle2 : event.target.companySubTitle2.value,
            companySubTitle3 : '',
            companyBackgroundImg1 : event.target.companyBackgroundImg1.value,
            companyBackgroundImg2 : event.target.companyBackgroundImg2.value,
            companyBackgroundImg3 : '',
            UploadImg1 : this.state.companyBackgroundImg1Upload ? this.state.companyBackgroundImg1Upload.value : null,
            UploadImg2 : this.state.companyBackgroundImg2Upload ? this.state.companyBackgroundImg2Upload.value : null,
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
        const { companyData, companyErr, companyIsLoading } = this.props.companyReducer;
        const cid = this.props.match.params.cid.trim();

        let title = this.state.title;
        let title2 = this.state.title2;
        let companySubTitle1 = this.state.companySubTitle1;
        let companySubTitle2 = this.state.companySubTitle2;
        let companyBackgroundImg1 = this.state.companyBackgroundImg1;
        let companyBackgroundImg2 = this.state.companyBackgroundImg2;
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(companyData && companyData.length > 0){
            actionType = 'modify';
            companyData.forEach(element => {
                title = title !== "" ? title : element.title;
                title2 = title2 !== "" ? title2 : element.title2;
                companySubTitle1 = companySubTitle1 !== "" ? companySubTitle1 : element.companySubTitle1;
                companySubTitle2 = companySubTitle2 !== "" ? companySubTitle2 : element.companySubTitle2;
                companyBackgroundImg1 = companyBackgroundImg1 !==" " ? companyBackgroundImg1 : element.companyBackgroundImg1;
                companyBackgroundImg2 = companyBackgroundImg2 !==" " ? companyBackgroundImg2 : element.companyBackgroundImg2;
            })
        }

        // image
        let companyBackgroundImg1Upload ="";
        if(companyBackgroundImg1 === " "){
           companyBackgroundImg1Upload = "/image/logo-1111.png";
        }else{
           companyBackgroundImg1Upload = this.state.companyBackgroundImg1 !==' ' ?  this.state.companyBackgroundImg1Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;
        }
        let companyBackgroundImg2Upload ="";
        if(companyBackgroundImg2 === " "){
           companyBackgroundImg2Upload = "/image/logo-1111.png";
        }else{
           companyBackgroundImg2Upload = this.state.companyBackgroundImg2 !==' ' ?  this.state.companyBackgroundImg2Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg2}`;
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
                                <form id='dataForm1' className={companyIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                                    <input type="hidden" id="themeNum" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='大標題 1' notice='(字數限制為8個字以內)' inputName='title' inputState={title}
                                           stateObj={this} required={true} checkValue='8' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='大標題 2' notice='(字數限制為8個字以內)' inputName='title2' inputState={title2}
                                           stateObj={this} required={true} checkValue='8' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='副標題 1' notice='(字數限制為18個字以內)' inputName='companySubTitle1' inputState={companySubTitle1}
                                           stateObj={this} required={true} checkValue='18' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='副標題 2' notice='(字數限制為18個字以內)' inputName='companySubTitle2' inputState={companySubTitle2}
                                           stateObj={this} required={true} checkValue='18' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='背景圖片1' notice='(圖檔尺寸大小為 1920*570 ，接受格式為png、jpg)' objName='companyBackgroundImg1'  imgUpload={companyBackgroundImg1Upload} imgFileName={companyBackgroundImg1} 
                                            parentObj={this}  imgW={1920} imgH={570} required={true}/> 
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='背景圖片2' notice='(圖檔尺寸大小為 1920*570 ，接受格式為png、jpg)' objName='companyBackgroundImg2'  imgUpload={companyBackgroundImg2Upload} imgFileName={companyBackgroundImg2} 
                                            parentObj={this}  imgW={1920} imgH={570} required={true}/> 
                                    </div>

                                    <hr />
                                    <div align="center">
                                        <button type='submit' id='action1' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="pic-bigger"><img src="/image/sample_05/01.png" alt="Temp5_Banner" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp5_banner">
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
                                                <th width="30%">備註</th>
                                            </tr>
                                        </thead>
                                        <tbody>                                            
                                            <tr>
                                                <td>大標題1、2</td>
                                                <td align='left'></td>
                                                <td>8個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp5_banner_title">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>副標題1、2</td>
                                                <td align='left'></td>
                                                <td>18個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp5_banner_subtitle">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>背景圖片1、2</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>1920*570</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>上傳兩張底圖進行輪播</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="tmp5_banner">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">主視覺範例</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="/image/sample_05/01.png" alt="tmp5_banner" width="100%" />
                            </div>
                            <div className="modal-footer">
                                <p className="small">範例僅供參考</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="tmp5_banner_title">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">主視覺 - 大標題1、2 範例</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="/image/sample_05/01-1.png" alt="tmp5_banner_title" width="100%" />
                            </div>
                            <div className="modal-footer">
                                <p className="small">範例僅供參考</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="tmp5_banner_subtitle">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">主視覺 - 副標題1、2 範例</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="/image/sample_05/01-2.png" alt="tmp5_banner_subtitle" width="100%" />
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