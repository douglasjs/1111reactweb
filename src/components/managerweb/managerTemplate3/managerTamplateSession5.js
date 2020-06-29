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
            brandTitleSub1 : '',
            brandTitleSub1Content : '',
            brandTitleSub2 : '',
            brandTitleSub2Content : '',
            brandImg : ' ',
            brandImg1 : ' ',
            brandImg2 : ' ',
            brandImg3 : ' ',            
            brandImg1Upload : '',
            brandImg2Upload : '',
            brandImg3Upload : '',
            brandImg4Upload : ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj = {
            ono : cid,
            themeNum : event.target.themeNum5.value,
            brandTitle : '',
            brandTitleSub1 : event.target.brandTitleSub1.value,
            brandTitleSub1Content : event.target.brandTitleSub1Content.value,
            brandTitleSub2 : event.target.brandTitleSub2.value,
            brandTitleSub2Content : event.target.brandTitleSub2Content.value,
            brandTitleSub3 : '',
            brandTitleSub3Content : '',
            brandImg : event.target.brandImg.value,
            brandImgUpload : this.state.brandImgUpload ? this.state.brandImgUpload.value : null,
            brandImg1 : event.target.brandImg1.value,
            brandImg1Upload : this.state.brandImg1Upload ? this.state.brandImg1Upload.value : null,
            brandImg2 : event.target.brandImg2.value,
            brandImg2Upload : this.state.brandImg2Upload ? this.state.brandImg2Upload.value : null,
            brandImg3 : event.target.brandImg3.value,
            brandImg3Upload : this.state.brandImg3Upload ? this.state.brandImg3Upload.value : null,
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

        let brandTitleSub1 = this.state.brandTitleSub1;
        let brandTitleSub1Content = this.state.brandTitleSub1Content;
        let brandTitleSub2 = this.state.brandTitleSub2;
        let brandTitleSub2Content = this.state.brandTitleSub2Content;
        let brandImg = this.state.brandImg;
        let brandImg1 = this.state.brandImg1;
        let brandImg2 = this.state.brandImg2;
        let brandImg3 = this.state.brandImg3;

        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(brandData && brandData.length > 0){
            actionType = 'modify';
            brandData.forEach(element => {
                brandTitleSub1 = brandTitleSub1 !== "" ? brandTitleSub1 : element.brandTitleSub1;
                brandTitleSub1Content = brandTitleSub1Content !== "" ? brandTitleSub1Content : element.brandTitleSub1Content;
                brandTitleSub2 = brandTitleSub2 !== "" ? brandTitleSub2 : element.brandTitleSub2;
                brandTitleSub2Content = brandTitleSub2Content !== "" ? brandTitleSub2Content : element.brandTitleSub2Content;
                brandImg = brandImg !== " " ? brandImg : element.brandImg;
                brandImg1 = brandImg1 !== " " ? brandImg1 : element.brandImg1;
                brandImg2 = brandImg2 !== " " ? brandImg2 : element.brandImg2;
                brandImg3 = brandImg3 !== " " ? brandImg3 : element.brandImg3;
            })
        }

        // image
        let brandImgUpload = "";
        if(brandImg === " "){
            brandImgUpload = "/image/logo-1111.png";
        }else{
            brandImgUpload = this.state.brandImg !== ' ' ?  this.state.brandImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg}`;
        }

        let brandImg1Upload = "";
        if(brandImg1 === " "){
            brandImg1Upload = "/image/logo-1111.png";
        }else{
            brandImg1Upload = this.state.brandImg1 !== ' ' ?  this.state.brandImg1Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg1}`;
        }

        let brandImg2Upload = "";
        if(brandImg2 === " "){
            brandImg2Upload = "/image/logo-1111.png";
        }else{
            brandImg2Upload = this.state.brandImg2 !== ' ' ?  this.state.brandImg2Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg2}`;
        }

        let brandImg3Upload = "";
        if(brandImg3 === " "){
            brandImg3Upload = "/image/logo-1111.png";
        }else{
            brandImg3Upload = this.state.brandImg3 !== ' ' ?  this.state.brandImg3Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg3}`;
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
                                <form id='dataForm5' className={brandIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                                    <input type="hidden" id="themeNum5" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹標題 1' notice='(字數限制為16個字以內)' inputName='brandTitleSub1' inputState={brandTitleSub1}
                                            stateObj={this} required={true} checkValue='16' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹內文 1 ' notice='(字數限制為90個字以內)' inputName='brandTitleSub1Content' inputState={brandTitleSub1Content}
                                            rows='4' stateObj={this} required={true} checkValue='90'/>
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹標題 2' notice='(字數限制為16個字以內)' inputName='brandTitleSub2' inputState={brandTitleSub2}
                                            stateObj={this} required={true} checkValue='16' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹內文 2 ' notice='(字數限制為54個字以內)' inputName='brandTitleSub2Content' inputState={brandTitleSub2Content}
                                            rows='3' stateObj={this} required={true} checkValue='54' />
                                    </div>                                    
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片 1' notice='(圖檔尺寸大小為 960*480 ，接受格式為png、jpg)' objName='brandImg'  imgUpload={brandImgUpload} 
                                            imgFileName={brandImg} parentObj={this} imgW={960} imgH={480} required={true} />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片 2' notice='(圖檔尺寸大小為 480*480 ，接受格式為png、jpg)' objName='brandImg1'  imgUpload={brandImg1Upload} 
                                            imgFileName={brandImg1} parentObj={this} imgW={480} imgH={480} required={true} />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片 3' notice='(圖檔尺寸大小為 480*480 ，接受格式為png、jpg)' objName='brandImg2'  imgUpload={brandImg2Upload} 
                                            imgFileName={brandImg2} parentObj={this} imgW={480} imgH={480} required={true} />
                                    </div>                                    
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片 4' notice='(圖檔尺寸大小為 960*480 ，接受格式為png、jpg)' objName='brandImg3'  imgUpload={brandImg3Upload} 
                                            imgFileName={brandImg3} parentObj={this} imgW={960} imgH={480} required={true} />
                                    </div>

                                    <hr />
                                    
                                    <div align="center"><button type='submit' id='action5' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_03/05.png" alt="Temp3_Brand" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp3_brand">
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
                                                <td>品牌介紹標題 1</td>
                                                <td align='left'>用心 - 提升職能 共同學習成長</td>
                                                <td>16個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp3_brand_subtitle01">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹內文 1</td>
                                                <td align='left'>
                                                    藉由各種課程的舉辦，不僅提升同仁全方位的職能，更用心照顧同仁身心平衡發展。
                                                    如：五五併行：提升同仁競爭力。
                                                    產地學習：對於食材的素養更加提升。
                                                    關係工作坊：建立團隊信任，尋求共識與分工。
                                                </td>
                                                <td>90個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp3_brand_subtitle01">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題 2</td>
                                                <td align='left'>有情 - 支持陪伴 珍惜每位夥伴的聲音</td>
                                                <td>16個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp3_brand_subtitle02">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹內文 2</td>
                                                <td align='left'>我們相信，透過對話處理人與自己、與他人、與事物，以及與環境之間的關係，能讓彼此間的能量持續正向流動。</td>
                                                <td>90個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp3_brand_subtitle02">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹圖片 1</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>960*480</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>無輪播</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_brand_pic01">觀看範例圖片</a></li>
                                                    </ul>                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹圖片 2</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>480*480</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>無輪播</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_brand_pic02">觀看範例圖片</a></li>
                                                    </ul>                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹圖片 3</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>480*480</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>無輪播</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_brand_pic03">觀看範例圖片</a></li>
                                                    </ul>                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹圖片 4</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>960*480</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>無輪播</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp3_brand_pic04">觀看範例圖片</a></li>
                                                    </ul>                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_brand">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/05.png" alt="tmp3_brand" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_brand_subtitle01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題1範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/05-1.png" alt="tmp3_brand_subtitle01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_brand_subtitle02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題2範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/05-2.png" alt="tmp3_brand_subtitle02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_brand_pic01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片1範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/05-3-1.png" alt="tmp3_brand_pic01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_brand_pic02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片2範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/05-3-2.png" alt="tmp3_brand_pic02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_brand_pic03">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片3範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/05-3-3.png" alt="tmp3_brand_pic03" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp3_brand_pic04">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片4範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_03/05-3-4.png" alt="tmp3_brand_pic04" width="100%" />
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