import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';

class Session5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brandTitle: ' ',
            brandTitleSub1: ' ',
            brandTitleSub1Content: ' ',
            brandTitleSub2: ' ',
            brandTitleSub2Content: ' ',
            brandTitleSub3: ' ',
            brandTitleSub3Content: ' ',
            brandImg : ' ',
            brandImgUpload : ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj = {
            ono: cid,
            themeNum : event.target.themeNum5.value,
            brandTitle:  event.target.brandTitle.value,
            brandTitleSub1:  event.target.brandTitleSub1.value,
            brandTitleSub1Content:  event.target.brandTitleSub1Content.value,
            brandTitleSub2:  event.target.brandTitleSub2.value,
            brandTitleSub2Content:  event.target.brandTitleSub2Content.value,
            brandTitleSub3:  event.target.brandTitleSub3.value,
            brandTitleSub3Content:  event.target.brandTitleSub3Content.value,
            brandImg : event.target.brandImg.value,
            brandImgUpload: event.target.brandImgUpload ? this.state.brandImgUpload.value : null,
            brandImg1 : '',
            brandImg1Upload: null,
            brandImg2 : '',
            brandImg2Upload: null,
            brandImg3 : '',
            brandImg3Upload: null,
            brandURL1 : '',
            brandURL2 : '',
            brandURL3 : ''
        }

        console.log(event.target.action5.value);
        if(event.target.action5.value === 'create'){
            this.props.createbrand(submitObj);
        }
        if(event.target.action5.value === 'modify'){
            this.props.updatebrand(submitObj);
        }
     
    }

    render(){
        const { brandData, brandErr, brandIsLoading} = this.props.brandReducer;
        const cid = this.props.match.params.cid.trim();

        let brandTitle = this.state.brandTitle;
        let brandTitleSub1 = this.state.brandTitleSub1;
        let brandTitleSub1Content = this.state.brandTitleSub1Content;
        let brandTitleSub2 = this.state.brandTitleSub2;
        let brandTitleSub2Content = this.state.brandTitleSub2Content;
        let brandTitleSub3 = this.state.brandTitleSub3;
        let brandTitleSub3Content = this.state.brandTitleSub3Content;
        let brandImg = this.state.brandImg;

        let themeNum = 'tp01';
        let actionType = 'create';

        if(brandData && brandData.length > 0){
            actionType = 'modify';
            brandData.forEach(element => {
                brandTitle = brandTitle !==" " ? brandTitle : element.brandTitle;
                brandTitleSub1 = brandTitleSub1 !==" " ? brandTitleSub1 : element.brandTitleSub1;
                brandTitleSub1Content = brandTitleSub1Content !==" " ? brandTitleSub1Content : element.brandTitleSub1Content;
                brandTitleSub2 = brandTitleSub2 !==" " ? brandTitleSub2 : element.brandTitleSub2;
                brandTitleSub2Content = brandTitleSub2Content !==" " ? brandTitleSub2Content : element.brandTitleSub2Content;
                brandTitleSub3 = brandTitleSub3 !==" " ? brandTitleSub3 : element.brandTitleSub3;
                brandTitleSub3Content = brandTitleSub3Content !==" " ? brandTitleSub3Content : element.brandTitleSub3Content;
                brandImg = brandImg !==" " ? brandImg : element.brandImg;
            })
        }

        // image
        let brandImgUpload ="";
        if(brandImg === " "){
            brandImgUpload = "/image/logo-1111.png";
        }else{
            brandImgUpload = this.state.brandImg !==' ' ?  this.state.brandImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard5" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard5">
                <h6 className="m-0 font-weight-bold">設定區段-品牌介紹</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard5">
                    <div className="card-body">
                        <Msg type ='LOADING'  value = {brandIsLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {brandErr} text= 'Opps! Error : ' />
                        <div className={brandIsLoading ? 'd-none' : 'form-row'}>
                            <div className="col-md-6 mb-3">
                                <form id='dataForm5'  onSubmit={this.handleSubmit}>
                                    <input type="hidden" id="themeNum5" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹主標題' notice='(建議字數為13個字以內)' inputName='brandTitle' inputState={brandTitle}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹副標題1' notice='(建議字數為13個字以內)' inputName='brandTitleSub1' inputState={brandTitleSub1}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹副標題1內文 ' notice='(建議字數為135個字以內)' inputName='brandTitleSub1Content' inputState={brandTitleSub1Content}
                                            rows='3' stateObj={this} required={true} checkValue='500'/>
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹副標題2' notice='(建議字數為13個字以內)' inputName='brandTitleSub2' inputState={brandTitleSub2}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹副標題2內文 ' notice='(建議字數為135個字以內)' inputName='brandTitleSub2Content' inputState={brandTitleSub2Content}
                                            rows='3' stateObj={this} required={true} checkValue='500' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹副標題3' notice='(建議字數為13個字以內)' inputName='brandTitleSub3' inputState={brandTitleSub3}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹副標題3內文 ' notice='(建議字數為135個字以內)' inputName='brandTitleSub3Content' inputState={brandTitleSub3Content}
                                            rows='3' stateObj={this} required={true} checkValue='500' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片' notice='(圖檔尺寸大小為 555*370 ，接受格式為png、jpg)' objName='brandImg'  imgUpload={brandImgUpload} 
                                            imgFileName={brandImg} parentObj={this} imgW={555} imgH={370} required={true} />
                                    </div>

                                    <hr />
                                    
                                    <div align="center"><button type='submit' id='action5' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_01/05.png" alt="Temp1_Brand" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp1_brand">
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
                                            <td>品牌介紹主標題</td>
                                            <td align='left'>1流的人才，進入1流的企業</td>
                                            <td>建議13個字以內</td>
                                            <td>不可空白</td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題1</td>
                                            <td align='left'>人力銀行指標品牌</td>
                                            <td>建議13個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle01">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題1 內文</td>
                                            <td align='left'>於 1998 年成立，累積超過 800 萬份求職履歷，20 萬以上徵才廠商！1111 不只是一般人力銀行，更是追求創新卓越的人才銀行！</td>
                                            <td>建議135個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle01">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題2</td>
                                            <td align='left'>專屬客服一流服務</td>
                                            <td>建議13個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle02">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題2 內文</td>
                                            <td align='left'>全國唯一擁有 400 多位人資客服人員，隨時協助您解決找尋人才或者系統上的各項問題！</td>
                                            <td>建議135個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle02">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題3</td>
                                            <td align='left'>特色求職工具，吸引人才加入</td>
                                            <td>建議13個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle03">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題3 內文</td>
                                            <td align='left'>求職工具. 工欲善其事，必先利其器！履歷準備好，工作更好找！</td>
                                            <td>建議135個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle03">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹圖片</td>
                                            <td>寬、高(px)</td>
                                            <td>555*370</td>
                                            <td align='left'>
                                                <ul>
                                                    <li>接受格式為png、jpg</li>
                                                    <li>無輪播</li>
                                                    <li>不可空白</li>
                                                    <li><a type="button" data-toggle="modal" href="#tmp1_brand_pic">觀看範例圖片</a></li>
                                                </ul>                                                
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp1_brand">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/05.png" alt="tmp1_brand" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp1_brand_subtitle01">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 副標題1 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/05-1.png" alt="tmp1_brand_subtitle01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp1_brand_subtitle02">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 副標題2 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/05-2.png" alt="tmp1_brand_subtitle02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp1_brand_subtitle03">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 副標題3 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/05-3.png" alt="tmp1_brand_subtitle03" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp1_brand_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/05-4.png" alt="tmp1_brand_pic" width="100%" />
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
export default Session5;