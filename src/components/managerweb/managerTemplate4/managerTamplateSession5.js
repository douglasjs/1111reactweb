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
            brandImg1 : ' ',
            brandImg2 : ' ',
            brandImg1Upload : '',
            brandImg2Upload : '',
            brandURL1 : '',
            brandURL2 : '',
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
            brandImg : '',
            brandImgUpload : null,
            brandImg1 : event.target.brandImg1.value,
            brandImg1Upload : this.state.brandImg1Upload ? this.state.brandImg1Upload.value : null,
            brandImg2 : event.target.brandImg2.value,
            brandImg2Upload: this.state.brandImg2Upload ? this.state.brandImg2Upload.value : null,
            brandImg3 : '',
            brandImg3Upload: null,
            brandURL1 : event.target.brandURL1.value,
            brandURL2 : event.target.brandURL2.value,
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

        let brandImg1 = this.state.brandImg1;
        let brandImg2 = this.state.brandImg2;

        let brandURL1 = this.state.brandURL1;
        let brandURL2 = this.state.brandURL2;

        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(brandData && brandData.length > 0){
            actionType = 'modify';
            brandData.forEach(element => {
                brandTitleSub1 = brandTitleSub1 !== "" ? brandTitleSub1 : element.brandTitleSub1;
                brandTitleSub1Content = brandTitleSub1Content !== "" ? brandTitleSub1Content : element.brandTitleSub1Content;
                brandTitleSub2 = brandTitleSub2 !== "" ? brandTitleSub2 : element.brandTitleSub2;
                brandTitleSub2Content = brandTitleSub2Content !== "" ? brandTitleSub2Content : element.brandTitleSub2Content;                
                brandImg1 = brandImg1 !== " " ? brandImg1 : element.brandImg1;
                brandImg2 = brandImg2 !== " " ? brandImg2 : element.brandImg2;
                brandURL1 = brandURL1 !== "" ? brandURL1 : element.brandURL1;
                brandURL2 = brandURL2 !== "" ? brandURL2 : element.brandURL2;
            })
        }

        // image
        let brandImg1Upload ="";
        if(brandImg1 === " "){
            brandImg1Upload = "/image/logo-1111.png";
        }else{
            brandImg1Upload = this.state.brandImg1 !==' ' ?  this.state.brandImg1Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg1}`;
        }

        let brandImg2Upload ="";
        if(brandImg2 === " "){
            brandImg2Upload = "/image/logo-1111.png";
        }else{
            brandImg2Upload = this.state.brandImg2 !==' ' ?  this.state.brandImg2Upload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg2}`;
        }
        const loading = brandIsLoading ? '' : 'd-none';
        
        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard5" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard5">
                <h6 className="m-0 font-weight-bold">設定區段-品牌介紹</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard5">
                    <div className="card-body">
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <div className={`spinner-grow text-primary ${loading}`} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <form id='dataForm5' className={brandIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                                    <Msg type ='LOADING'  value = {brandIsLoading} text='Processing ' /> 
                                    <Msg type ='ERROR' value = {brandErr} text= 'Opps! Error : ' />
                                    <input type="hidden" id="themeNum5" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹標題1' notice='(字數限制為4個字以內)' inputName='brandTitleSub1' inputState={brandTitleSub1}
                                            stateObj={this} required={true} checkValue='4' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹副標題1內文 ' notice='(字數限制為120個字以內)' inputName='brandTitleSub1Content' inputState={brandTitleSub1Content}
                                            rows='3' stateObj={this} required={true} checkValue='120'/>
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹小標題1' notice='(字數限制為8個字以內)' inputName='brandURL1' inputState={brandURL1}
                                            stateObj={this} required={true} checkValue='8' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片1 上傳' notice='(圖檔尺寸大小為 140*140 ，接受格式為png、jpg)' objName='brandImg1'  imgUpload={brandImg1Upload} 
                                            imgFileName={brandImg1} parentObj={this} imgW={140} imgH={140} required={true} />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹標題2' notice='(字數限制為4個字以內)' inputName='brandTitleSub2' inputState={brandTitleSub2}
                                            stateObj={this} required={true} checkValue='4' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹副標題2內文 ' notice='(字數限制為120個字以內)' inputName='brandTitleSub2Content' inputState={brandTitleSub2Content}
                                            rows='3' stateObj={this} required={true} checkValue='120' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹小標題2' notice='(字數限制為8個字以內)' inputName='brandURL2' inputState={brandURL2}
                                            stateObj={this} required={true} checkValue='8' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片2 上傳' notice='(圖檔尺寸大小為 140*140 ，接受格式為png、jpg)' objName='brandImg2'  imgUpload={brandImg2Upload} 
                                            imgFileName={brandImg2} parentObj={this} imgW={140} imgH={140} required={true} />
                                    </div>

                                    <hr />
                                    
                                    <div align="center"><button type='submit' id='action5' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_04/05.png" alt="Temp4_Brand" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp4_brand">
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
                                                <td>品牌介紹標題1</td>
                                                <td align='left'>亞尼克</td>
                                                <td>4個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_brand_title01">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題1內文</td>
                                                <td align='left'>【食材安心】、【製作用心】、【銷售放心】，是亞尼克一直堅持的理念，亞尼克打破傳統以來，好蛋糕必須高價位的刻板印象，用高品質，高成本的原料但平易近人的價位，讓來到亞尼克享用甜點的客人，感受到物超所值的幸福滋味。</td>
                                                <td>120個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_brand_content01">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹小標題1</td>
                                                <td align='left'>Yannick</td>
                                                <td>8個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_brand_subtitle01">觀看範例圖片</a>
                                                </td>
                                            </tr>                                            
                                            <tr>
                                                <td>品牌介紹圖片1</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>140*140</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp4_brand_pic01">觀看範例圖片</a></li>
                                                    </ul>                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題2</td>
                                                <td align='left'>亞尼克</td>
                                                <td>4個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_brand_title02">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題2內文</td>
                                                <td align='left'>20年來「不偷工、不減料、新鮮製作、新鮮販售」，希望精心製作的甜點，能讓顧客吃過後，洋溢著幸福的微笑，就像拍照時Say Cheese一樣的開心！</td>
                                                <td>120個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_brand_content02">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹小標題2</td>
                                                <td align='left'>Yannick</td>
                                                <td>8個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_brand_subtitle02">觀看範例圖片</a>
                                                </td>
                                            </tr>                                            
                                            <tr>
                                                <td>品牌介紹圖片2</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>140*140</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>不可空白</li>
                                                        <li><a type="button" data-toggle="modal" href="#tmp4_brand_pic02">觀看範例圖片</a></li>
                                                    </ul>                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05.png" alt="tmp4_brand" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_title01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題1 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-1-1.png" alt="tmp4_brand_title01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_content01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題1內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-1-2.png" alt="tmp4_brand_content01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_subtitle01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 小標題1 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-1-3.png" alt="tmp4_brand_subtitle01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_pic01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片1 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-1-4.png" alt="tmp4_brand_pic01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_title02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題2 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-2-1.png" alt="tmp4_brand_title02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_content02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題2內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-2-2.png" alt="tmp4_brand_content02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_subtitle02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 小標題2 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-2-3.png" alt="tmp4_brand_subtitle02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp4_brand_pic02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片2 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/05-2-4.png" alt="tmp4_brand_pic02" width="100%" />
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