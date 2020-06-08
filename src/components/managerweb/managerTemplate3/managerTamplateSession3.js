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
            benefitImg : ' ',
            benefitImgUpload : '',
            benefitSubTitle1 : '',
            benefitSubTitle2 : '',
            benefitSubTitle3 : '',
            benefitSubTitle4 : '',
            benefitSubContent1 : '',
            benefitSubContent2 : '',
            benefitSubContent3 : '',
            benefitSubContent4 : '',
            benefitSubImg1 : ' ',
            benefitSubImg2 : ' ',
            benefitSubImg3 : ' ',
            benefitSubImg4 : ' ',
            benefitSubImg1Upload : '',
            benefitSubImg2Upload : '',
            benefitSubImg3Upload : '',
            benefitSubImg4Upload : ''
        }

    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const benObj={
            ono : cid,
            themeNum : event.target.themeNum3.value,
            benefitContent : '',
            benefitImg : event.target.benefitImg.value,
            benefitImg2 : '',
            benefitImgUpload : this.state.benefitImgUpload ? this.state.benefitImgUpload.value : null,
            benefitImg2Upload : null,
            benefitSubTitle1 : event.target.benefitSubTitle1.value,
            benefitSubTitle2 : event.target.benefitSubTitle2.value,
            benefitSubTitle3 : event.target.benefitSubTitle3.value,
            benefitSubTitle4 : event.target.benefitSubTitle4.value,
            benefitSubTitle5 : '',
            benefitSubTitle6 : '',
            benefitSubContent1 : event.target.benefitSubContent1.value,
            benefitSubContent2 : event.target.benefitSubContent2.value,
            benefitSubContent3 : event.target.benefitSubContent3.value,
            benefitSubContent4 : event.target.benefitSubContent4.value,
            benefitSubContent5 : '',
            benefitSubContent6 : '',
            benefitSubImg1 : event.target.benefitSubImg1.value,
            benefitSubImg2 : event.target.benefitSubImg2.value,
            benefitSubImg3 : event.target.benefitSubImg3.value,
            benefitSubImg4 : event.target.benefitSubImg4.value,
            benefitSubImg5 : '',
            benefitSubImg6 : '',
            benefitSubImg1Upload : this.state.benefitSubImg1Upload ? this.state.benefitSubImg1Upload.value : null,
            benefitSubImg2Upload : this.state.benefitSubImg2Upload ? this.state.benefitSubImg2Upload.value : null,
            benefitSubImg3Upload : this.state.benefitSubImg3Upload ? this.state.benefitSubImg3Upload.value : null,
            benefitSubImg4Upload : this.state.benefitSubImg4Upload ? this.state.benefitSubImg4Upload.value : null,
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

    handleChange = (event, data) => {
        this.setState({ ...this.state, benefitContent : data});
    };

    render(){
        const { benefitData, benefitErr, benefitIsLoading} = this.props.benefitReducer;
        const cid = this.props.match.params.cid.trim();

        let benefitImg = this.state.benefitImg;

        let benefitSubTitle1 = this.state.benefitSubTitle1;
        let benefitSubTitle2 = this.state.benefitSubTitle2;
        let benefitSubTitle3 = this.state.benefitSubTitle3;
        let benefitSubTitle4 = this.state.benefitSubTitle4;

        let benefitSubContent1 = this.state.benefitSubContent1;
        let benefitSubContent2 = this.state.benefitSubContent2;
        let benefitSubContent3 = this.state.benefitSubContent3;
        let benefitSubContent4 = this.state.benefitSubContent4;

        let benefitSubImg1 = this.state.benefitSubImg1;
        let benefitSubImg2 = this.state.benefitSubImg2;
        let benefitSubImg3 = this.state.benefitSubImg3;
        let benefitSubImg4 = this.state.benefitSubImg4;

        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(benefitData && benefitData.length > 0){
            actionType = 'modify';
            benefitData.forEach(element => {
                benefitImg = benefitImg !== " " ? benefitImg : element.benefitImg;

                benefitSubTitle1 = benefitSubTitle1 !== "" ? benefitSubTitle1 : element.benefitSubTitle1;
                benefitSubTitle2 = benefitSubTitle2 !== "" ? benefitSubTitle2 : element.benefitSubTitle2;
                benefitSubTitle3 = benefitSubTitle3 !== "" ? benefitSubTitle3 : element.benefitSubTitle3;
                benefitSubTitle4 = benefitSubTitle4 !== "" ? benefitSubTitle4 : element.benefitSubTitle4;

                benefitSubContent1 = benefitSubContent1 !== "" ? benefitSubContent1 : element.benefitSubContent1;
                benefitSubContent2 = benefitSubContent2 !== "" ? benefitSubContent2 : element.benefitSubContent2;
                benefitSubContent3 = benefitSubContent3 !== "" ? benefitSubContent3 : element.benefitSubContent3;
                benefitSubContent4 = benefitSubContent4 !== "" ? benefitSubContent4 : element.benefitSubContent4;

                benefitSubImg1 = benefitSubImg1 !== " " ? benefitSubImg1 : element.benefitSubImg1;
                benefitSubImg2 = benefitSubImg2 !== " " ? benefitSubImg2 : element.benefitSubImg2;
                benefitSubImg3 = benefitSubImg3 !== " " ? benefitSubImg3 : element.benefitSubImg3;
                benefitSubImg4 = benefitSubImg4 !== " " ? benefitSubImg4 : element.benefitSubImg4;
            })
        }

        // image
        let benefitImgUpload = "";
        if(benefitImg === " "){
            benefitImgUpload = "/image/logo-1111.png";
        }else{
            benefitImgUpload = this.state.benefitImg !== ' ' ?  this.state.benefitImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        }

        let benefitSubImg1Upload = "";
        if(benefitSubImg1 === " "){
            benefitSubImg1Upload = "/image/logo-1111.png";
        }else{
            benefitSubImg1Upload = this.state.benefitSubImg1 !== ' ' ?  this.state.benefitSubImg1Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg1}`;
        }

        let benefitSubImg2Upload = "";
        if(benefitSubImg2 === " "){
            benefitSubImg2Upload = "/image/logo-1111.png";
        }else{
            benefitSubImg2Upload = this.state.benefitSubImg2 !== ' ' ?  this.state.benefitSubImg2Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg2}`;
        }

        let benefitSubImg3Upload = "";
        if(benefitSubImg3 === " "){
            benefitSubImg3Upload = "/image/logo-1111.png";
        }else{
            benefitSubImg3Upload = this.state.benefitSubImg3 !== ' ' ?  this.state.benefitSubImg3Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg3}`;
        }

        let benefitSubImg4Upload = "";
        if(benefitSubImg4 === " "){
            benefitSubImg4Upload = "/image/logo-1111.png";
        }else{
            benefitSubImg4Upload = this.state.benefitSubImg4 !== ' ' ?  this.state.benefitSubImg4Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitSubImg4}`;
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
                                        <ImgUpload title='員工福利圖片' notice='(圖檔尺寸大小為 710*480 ，接受格式為png、jpg)' objName='benefitImg'  imgUpload={benefitImgUpload} imgFileName={benefitImg} 
                                            parentObj={this}  imgW={710} imgH={480} required={true}/> 
                                    </div>                                    
                                    
                                    <div className="card">
                                        <a href="#collapseCard3-1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-1">
                                            <div className="card-header text-white bg-primary">小標題一</div>
                                        </a>                                    
                                        <div className="card-body collapse show" id="collapseCard3-1">
                                            <div className="form-row">

                                                <div className="col-md-10 mb-6">
                                                    <div className="form-row">
                                                        <InputText title='小標題1' notice='(字數限制為4個字以內)' inputName='benefitSubTitle1' inputState={benefitSubTitle1}
                                                            stateObj={this} required={true} checkValue='4' />
                                                    </div>
                                                    <div className="form-row">
                                                        <InputTextArea title='小標題1內容' notice='(字數限制為75個字以內)' inputName='benefitSubContent1' inputState={benefitSubContent1}
                                                            rows='3' stateObj={this} required={true} checkValue='75' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <ImgUpload title='小標題1圖片 上傳' notice='(圖檔尺寸大小為 300*300，接受格式為png、jpg)' objName='benefitSubImg1' imgUpload={benefitSubImg1Upload} 
                                                            imgFileName={benefitSubImg1} parentObj={this} imgW={300} imgH={300} required={true} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-2">
                                            <div className="card-header text-white bg-primary">小標題二</div>
                                        </a>                                    
                                        <div className="card-body collapse show" id="collapseCard3-2">
                                            <div className="form-row">

                                                <div className="col-md-10 mb-6">
                                                    <div className="form-row">
                                                        <InputText title='小標題2' notice='(字數限制為4個字以內)' inputName='benefitSubTitle2' inputState={benefitSubTitle2}
                                                            stateObj={this} required={true} checkValue='4' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題2內容' notice='(字數限制為75個字以內)' inputName='benefitSubContent2' inputState={benefitSubContent2}
                                                            rows='3' stateObj={this} required={true} checkValue='75' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <ImgUpload title='小標題2圖片 上傳' notice='(圖檔尺寸大小為 300*300，接受格式為png、jpg)' objName='benefitSubImg2' imgUpload={benefitSubImg2Upload} 
                                                            imgFileName={benefitSubImg2} parentObj={this} imgW={300} imgH={300} required={true} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <a href="#collapseCard3-3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3-3">
                                            <div className="card-header text-white bg-primary">小標題三</div>
                                        </a>                                    
                                        <div className="card-body collapse show" id="collapseCard3-3">
                                            <div className="form-row">

                                                <div className="col-md-10 mb-6">
                                                    <div className="form-row">
                                                        <InputText title='小標題3' notice='(字數限制為4個字以內)' inputName='benefitSubTitle3' inputState={benefitSubTitle3}
                                                            stateObj={this} required={true} checkValue='4' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題3內容' notice='(字數限制為75個字以內)' inputName='benefitSubContent3' inputState={benefitSubContent3}
                                                            rows='3' stateObj={this} required={true} checkValue='75' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <ImgUpload title='小標題3圖片 上傳' notice='(圖檔尺寸大小為 300*300，接受格式為png、jpg)' objName='benefitSubImg3' imgUpload={benefitSubImg3Upload} 
                                                            imgFileName={benefitSubImg3} parentObj={this} imgW={300} imgH={300} required={true} />
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

                                                <div className="col-md-10 mb-6">
                                                    <div className="form-row">
                                                        <InputText title='小標題4' notice='(字數限制為4個字以內)' inputName='benefitSubTitle4' inputState={benefitSubTitle4}
                                                            stateObj={this} required={true} checkValue='4' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <InputTextArea title='小標題4內容' notice='(字數限制為75個字以內)' inputName='benefitSubContent4' inputState={benefitSubContent4}
                                                            rows='3' stateObj={this} required={true} checkValue='75' />
                                                    </div>
                                                    <div className="form-row row-style-w95-pt1">
                                                        <ImgUpload title='小標題4圖片 上傳' notice='(圖檔尺寸大小為 300*300，接受格式為png、jpg)' objName='benefitSubImg4' imgUpload={benefitSubImg4Upload} 
                                                            imgFileName={benefitSubImg4} parentObj={this} imgW={300} imgH={300} required={true} />
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
                                <div><img src="/image/sample_03/03.png" alt="Temp3_Benefit" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp3_benefit">
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
                                                <td>員工福利圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>710*480</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>無輪播</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_picture">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題1</td>
                                                <td align='left'>法定項目</td>
                                                <td>4個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle01">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題1內容</td>
                                                <td align='left'>勞保、健保、加班費、生理假、產假、勞退提撥金</td>
                                                <td>75個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle01">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題1圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>300*300</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle01">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題2</td>
                                                <td align='left'>節慶福利</td>
                                                <td>4個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle02">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題2內容</td>
                                                <td align='left'>年節禮券、生日禮券、春酒聚餐</td>
                                                <td>75個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle02">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題2圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>300*300</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle02">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題3</td>
                                                <td align='left'>獎金類</td>
                                                <td>4個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle03">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題3內容</td>
                                                <td align='left'>全勤獎金、年節獎金、員工生日禮金、年終獎金、三節獎金、激勵獎金、績效獎金</td>
                                                <td>75個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle03">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題3圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>300*300</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle03">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題4</td>
                                                <td align='left'>其他福利</td>
                                                <td>4個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle04">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題4內容</td>
                                                <td align='left'>
                                                    餐 飲 類：免費供餐<br />
                                                    補 助 類：員工國內、外進修補助、員工手機配發或補助<br />
                                                    其 　他：員工在職教育訓練、良好升遷制度
                                                </td>
                                                <td>75個字以內</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle04">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題4圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>300*300</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_benefit_subtitle04">觀看範例圖片</a></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_benefit">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/03.png" alt="tmp3_benefit" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_benefit_picture">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利 - 圖片範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/03-0.png" alt="tmp3_benefit_picture" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_benefit_subtitle01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利 - 小標題1範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/03-1.png" alt="tmp3_benefit_subtitle01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_benefit_subtitle02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利 - 小標題2範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/03-2.png" alt="tmp3_benefit_subtitle02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_benefit_subtitle03">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利 - 小標題3範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/03-3.png" alt="tmp3_benefit_subtitle03" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_benefit_subtitle04">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利 - 小標題4範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/03-4.png" alt="tmp3_benefit_subtitle04" width="100%" />
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