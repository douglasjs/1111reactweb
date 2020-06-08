import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import Msg from '../msg';

class Session5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brandTitle : '',
            brandTitleSub1Content : '',
            brandURL1 : '',
            brandURL2 : ''
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj = {
            ono : cid,
            themeNum : event.target.themeNum5.value,
            brandTitle : event.target.brandTitle.value,
            brandTitleSub1 : '',
            brandTitleSub1Content : event.target.brandTitleSub1Content.value,
            brandTitleSub2 : '',
            brandTitleSub2Content : '',
            brandTitleSub3 : '',
            brandTitleSub3Content : '',
            brandImg : '',
            brandImgUpload : null,
            brandImg1 : '',
            brandImg1Upload : null,
            brandImg2 : '',
            brandImg2Upload : null,
            brandImg3 : '',
            brandImg3Upload : null,
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

        let brandTitle = this.state.brandTitle;
        let brandTitleSub1Content = this.state.brandTitleSub1Content;
        let brandURL1 = this.state.brandURL1;
        let brandURL2 = this.state.brandURL2;

        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(brandData && brandData.length > 0){
            actionType = 'modify';
            brandData.forEach(element => {
                brandTitle = brandTitle !== "" ? brandTitle : element.brandTitle;
                brandTitleSub1Content = brandTitleSub1Content !== "" ? brandTitleSub1Content : element.brandTitleSub1Content;
                brandURL1 = brandURL1 !== "" ? brandURL1 : element.brandURL1;
                brandURL2 = brandURL2 !== "" ? brandURL2 : element.brandURL2;
            })
        }

        if(actionType === 'create') {    
            if(brandURL2 === ''){
                brandURL2 = `https://www.1111.com.tw/corp/${cid}/`;
            }
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
                                        <InputText title='品牌介紹主標題' notice='(字數限制為13個字以內)' inputName='brandTitle' inputState={brandTitle}
                                            stateObj={this} required={true} checkValue='13' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹內文 ' notice='(字數限制為135個字以內)' inputName='brandTitleSub1Content' inputState={brandTitleSub1Content}
                                            rows='5' stateObj={this} required={true} checkValue='135'/>
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='了解更多網址' notice='(請輸入網址)' inputName='brandURL2' inputState={brandURL2}
                                            stateObj={this} required={true} checkValue='200' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='影片網址' notice='(請輸入影片連結網址)' inputName='brandURL1' inputState={brandURL1}
                                            stateObj={this} required={true} checkValue='200' />
                                    </div>

                                    <hr />
                                    
                                    <div align="center"><button type='submit' id='action5' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_06/05.png" alt="Temp6_Brand" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp6_brand">
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
                                                <td>13個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp6_brand_title">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹內文</td>
                                                <td align='left'>
                                                    於 1998 年成立，累積超過 800 萬份求職履歷，20 萬以上徵才廠商！1111 不只是一般人力銀行，更是追求創新卓越的人才銀行！<br />
                                                    全國唯一擁有 400 多位人資客服人員，隨時協助您解決找尋人才或者系統上的各項問題！<br />
                                                    求職工具. 工欲善其事，必先利其器！履歷準備好，工作更好找！
                                                </td>
                                                <td>135個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp6_brand_content">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>了解更多網址</td>
                                                <td align='left'>了解更多</td>
                                                <td>請輸入網址</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp6_brand_url">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>影片網址</td>
                                                <td align='left'>可設定所要撥放影片的網址</td>
                                                <td>請輸入網址</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp6_brand_vedio">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp6_brand">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_06/05.png" alt="tmp6_brand" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp6_brand_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 主標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_06/05-1.png" alt="tmp6_brand_title" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp6_brand_content">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_06/05-2.png" alt="tmp6_brand_content" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp6_brand_url">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 了解更多網址 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_06/05-3.png" alt="tmp6_brand_url" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp6_brand_vedio">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 影片網址 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_06/05-4.png" alt="tmp6_brand_vedio" width="100%" />
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