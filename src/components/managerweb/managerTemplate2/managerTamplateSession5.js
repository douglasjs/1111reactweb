import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import Msg from '../msg';

class Session5 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brandTitleSub1 : '',
            brandTitleSub1Content : '',
            brandTitleSub2 : '',
            brandTitleSub2Content : '',
            brandTitleSub3 : '',
            brandTitleSub3Content : '',
            brandURL1 : '',
            brandURL2 : '',
            brandURL3 : ''
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
            brandTitleSub3 : event.target.brandTitleSub3.value,
            brandTitleSub3Content : event.target.brandTitleSub3Content.value,
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
            brandURL3 : event.target.brandURL3.value
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
        let brandTitleSub3 = this.state.brandTitleSub3;
        let brandTitleSub3Content = this.state.brandTitleSub3Content;
        let brandURL1 = this.state.brandURL1;
        let brandURL2 = this.state.brandURL2;
        let brandURL3 = this.state.brandURL3;

        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(brandData && brandData.length > 0){
            actionType = 'modify';
            brandData.forEach(element => {
                brandTitleSub1 = brandTitleSub1 !== "" ? brandTitleSub1 : element.brandTitleSub1;
                brandTitleSub1Content = brandTitleSub1Content !== "" ? brandTitleSub1Content : element.brandTitleSub1Content;
                brandTitleSub2 = brandTitleSub2 !== "" ? brandTitleSub2 : element.brandTitleSub2;
                brandTitleSub2Content = brandTitleSub2Content !== "" ? brandTitleSub2Content : element.brandTitleSub2Content;
                brandTitleSub3 = brandTitleSub3 !== "" ? brandTitleSub3 : element.brandTitleSub3;
                brandTitleSub3Content = brandTitleSub3Content !== "" ? brandTitleSub3Content : element.brandTitleSub3Content;
                brandURL1 = brandURL1 !== "" ? brandURL1 : element.brandURL1;
                brandURL2 = brandURL2 !== "" ? brandURL2 : element.brandURL2;
                brandURL3 = brandURL3 !== "" ? brandURL3 : element.brandURL3;
            })
        }

        if(actionType === 'create') {
            if(brandURL1 === ''){
                brandURL1 = `https://www.1111.com.tw/corp/${cid}/`;
            }
    
            if(brandURL2 === ''){
                brandURL2 = `https://www.1111.com.tw/corp/${cid}/`;
            }
    
            if(brandURL3 === ''){
                brandURL3 = `https://www.1111.com.tw/corp/${cid}/`;
            }
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
                                        <InputText title='品牌介紹標題1' notice='(建議字數為7個字以內)' inputName='brandTitleSub1' inputState={brandTitleSub1}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹標題1內文 ' notice='(建議字數為48個字以內)' inputName='brandTitleSub1Content' inputState={brandTitleSub1Content}
                                            rows='4' stateObj={this} required={true} checkValue='300'/>
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹連結1' notice='(請輸入網址)' inputName='brandURL1' inputState={brandURL1}
                                            stateObj={this} required={true} checkValue='500' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹標題2' notice='(建議字數為7個字以內)' inputName='brandTitleSub2' inputState={brandTitleSub2}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹標題2內文 ' notice='(建議字數為48個字以內)' inputName='brandTitleSub2Content' inputState={brandTitleSub2Content}
                                            rows='4' stateObj={this} required={true} checkValue='300' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹連結2' notice='(請輸入網址)' inputName='brandURL2' inputState={brandURL2}
                                            stateObj={this} required={true} checkValue='500' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹標題3' notice='(建議字數為7個字以內)' inputName='brandTitleSub3' inputState={brandTitleSub3}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='品牌介紹標題3內文 ' notice='(建議字數為48個字以內)' inputName='brandTitleSub3Content' inputState={brandTitleSub3Content}
                                            rows='4' stateObj={this} required={true} checkValue='300' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputText title='品牌介紹連結3' notice='(請輸入網址)' inputName='brandURL3' inputState={brandURL3}
                                            stateObj={this} required={true} checkValue='500' />
                                    </div>

                                    <hr />
                                    
                                    <div align="center"><button type='submit' id='action5' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_02/05.png" alt="Temp2_Brand" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp2_brand">
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
                                                <td align='left'>我們的目標</td>
                                                <td>建議7個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle01">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題1內文</td>
                                                <td align='left'>針對每次服務進行「星評」媽咪樂接收您的聲音最即時，守護您的環境與健康！</td>
                                                <td>建議48個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle01">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹連結1</td>
                                                <td align='left'>了解更多</td>
                                                <td>請輸入網址</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle01">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題2</td>
                                                <td align='left'>我們的價值觀</td>
                                                <td>建議7個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle02">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題2內文</td>
                                                <td align='left'>每次服務管家打卡即時通知無時差，為家裡的安全把關！</td>
                                                <td>建議48個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle02">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹連結2</td>
                                                <td align='left'>了解更多</td>
                                                <td>請輸入網址</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle02">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題3</td>
                                                <td align='left'>業界領導品牌</td>
                                                <td>建議7個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle03">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹標題3內文</td>
                                                <td align='left'>一覽服務合約狀態、起迄日期，及每次服務人員名單，省下紀錄及搜尋時間！</td>
                                                <td>建議48個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle03">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>品牌介紹連結3</td>
                                                <td align='left'>了解更多</td>
                                                <td>請輸入網址</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp2_brand_subtitle03">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp2_brand">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/05.png" alt="tmp2_brand" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp2_brand_subtitle01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題1範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/05-1.png" alt="tmp2_brand_subtitle01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp2_brand_subtitle02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題2範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/05-2.png" alt="tmp2_brand_subtitle02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal fade" id="tmp2_brand_subtitle03">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">品牌介紹 - 標題3範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/05-3.png" alt="tmp2_brand_subtitle03" width="100%" />
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