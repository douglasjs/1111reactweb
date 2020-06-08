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
            brandTitle: '',
            brandTitleSub1Content: '',
            brandImg : ' ',
            brandImgUpload : '',
            brandURL1 : ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj = {
            ono: cid,
            themeNum : event.target.themeNum5.value,
            brandTitle : event.target.brandTitle.value,
            brandTitleSub1 : '',
            brandTitleSub1Content : event.target.brandTitleSub1Content.value,
            brandTitleSub2 : '',
            brandTitleSub2Content : '',
            brandTitleSub3 : '',
            brandTitleSub3Content : '',
            brandImg : event.target.brandImg.value,
            brandImgUpload : this.state.brandImgUpload ? this.state.brandImgUpload.value : null,
            brandImg1 : '',
            brandImg1Upload: null,
            brandImg2 : '',
            brandImg2Upload: null,
            brandImg3 : '',
            brandImg3Upload: null,
            brandURL1 : event.target.brandURL1.value,
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
        let brandTitleSub1Content = this.state.brandTitleSub1Content;
        let brandImg = this.state.brandImg;
        let brandURL1 = this.state.brandURL1;

        let themeNum = this.props.themeNum;
        let actionType = 'create';
        
        if(brandURL1 === ""){
            brandURL1 = `https://www.1111.com.tw/corp/${cid}/`
        }

        if(brandData && brandData.length > 0){
            actionType = 'modify';
            brandData.forEach(element => {                
                brandTitle = brandTitle !=="" ? brandTitle : element.brandTitle;
                brandTitleSub1Content = brandTitleSub1Content !=="" ? brandTitleSub1Content : element.brandTitleSub1Content;
                brandImg = brandImg !==" " ? brandImg : element.brandImg;
                brandURL1 = brandURL1 !=="" ? brandURL1 : element.brandURL1;
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
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <form id='dataForm5' className={brandIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                                    <Msg type ='LOADING'  value = {brandIsLoading} text='Processing ' /> 
                                    <Msg type ='ERROR' value = {brandErr} text= 'Opps! Error : ' />
                                    <input type="hidden" id="themeNum5" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹主標題' notice='(字數限制為25個字以內)' inputName='brandTitle' inputState={brandTitle}
                                            stateObj={this} required={true} checkValue='25' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹內文' notice='(字數限制為240個字以內)' inputName='brandTitleSub1Content' inputState={brandTitleSub1Content}
                                            rows='5' stateObj={this} required={true} checkValue='240'/>
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='了解更多網址' notice='(請輸入網址)' inputName='brandURL1' inputState={brandURL1}
                                            stateObj={this} required={true} checkValue='200' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='品牌介紹圖片' notice='(圖檔尺寸大小為 560*480 ，接受格式為png、jpg)' objName='brandImg'  imgUpload={brandImgUpload} 
                                            imgFileName={brandImg} parentObj={this} imgW={560} imgH={480} required={true} />
                                    </div>

                                    <hr />
                                    
                                    <div align="center"><button type='submit' id='action5' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_05/05.png" alt="Temp5_Brand" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp5_brand">
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
                                            <td align='left'>持續為地球綠色能源貢獻一份心力</td>
                                            <td>25個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp5_brand_title">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹內文</td>
                                            <td align='left'>
                                                集陽綠能的團隊成員（在職成員）來自於不同產業（建設業、營造業、機械業、鋁業），
                                                我們擁有來自不同產業的知識與專業。
                                                集陽綠能擁有甲級電器承裝業＆５個成員擁有太陽能光電設置乙級技術士國家級證照。<br />
                                                團隊的宣誓<br />
                                                我們堅持使用高品質的物料與施工方式，不斷精進技術與優化成本<br />
                                                團隊的願景<br />
                                                深耕台灣太陽能產業的發展，將持續為地球綠色能源貢獻一份心力
                                            </td>
                                            <td>240個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp5_brand_content">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>了解更多網址</td>
                                            <td align='left'>了解更多</td>
                                            <td>請輸入網址</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp5_brand_url">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹圖片</td>
                                            <td align='left'>寬、高(px)</td>
                                            <td>560*480</td>
                                            <td align='left'>
                                                <ul>
                                                    <li>接受格式為png、jpg</li>
                                                    <li>不可空白</li>
                                                    <li><a type="button" data-toggle="modal" href="#tmp5_brand_pic">觀看範例圖片</a></li>
                                                </ul>                                                
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp5_brand">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/05.png" alt="tmp5_brand" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp5_brand_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 主標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/05-1.png" alt="tmp5_brand_title" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp5_brand_content">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/05-2.png" alt="tmp5_brand_content" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp5_brand_url">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 了解更多網址 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/05-3.png" alt="tmp5_brand_url" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_brand_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 圖片 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/05-4.png" alt="tmp5_brand_pic" width="100%" />
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