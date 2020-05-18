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
                                        <InputText title='了解更多網址2' notice='(請輸入網址)' inputName='brandURL1' inputState={brandURL1}
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
                                            <th width="10%">項目</th>
                                            <th width="35%">內容</th>
                                            <th width="15%">規格</th>
                                            <th width="40%">備註</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>品牌介紹主標題</td>
                                            <td align='left'>專業及熱情的有機生活管家</td>
                                            <td>13個字以內</td>
                                            <td>不可空白</td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題1</td>
                                            <td align='left'>安心宣言</td>
                                            <td>10個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle01">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題1 內文</td>
                                            <td align='left'>全方位的食材供應，從生產處理保存運送至宅配到府，層層把關，全程安心無污染，產品定期專業檢測。提昇您對於味覺的層次，講求食材的等級，與傳遞純淨飲食的生活態度。每週變化的菜單，提供搭配的烹調食譜，信手拈來，就是一桌美味盛宴。讓家人的健康，安心零負擔、三餐沒煩惱!</td>
                                            <td>135個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle01">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題2</td>
                                            <td align='left'>生態平衡</td>
                                            <td>10個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle02">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題2 內文</td>
                                            <td align='left'>夢中的淨土，得天獨厚的生產環境。遠眺，依山傍海的自然環境；近觀，質樸純善的人文氣息。豐收滿溢，開創了一片美好的自然天地。如此的好山、好水、好空氣，一切的視覺感動，幸福無限，生生不息</td>
                                            <td>135個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle02">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題3</td>
                                            <td align='left'>達人堅持</td>
                                            <td>10個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle03">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹副標題3 內文</td>
                                            <td align='left'>樸拙的生命，健康心靈；靈活身手，堅毅自信。嚴選的優良品種，以回歸大地的自然方式，用心栽培。每項食材的背後，近乎苛求，經歷了無數的執著篩選與專業考驗。一片菜葉、一顆果實，讓您每一口，都能體會到達人的精神與味覺滿足。慢慢喚醒您對於自然的記憶，進而更加珍惜大地的賜與。從外觀的包裝設計、到精選的純淨食材，交付到您手中的百寶箱，是我們謙卑的驕傲。</td>
                                            <td>135個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_brand_subtitle03">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>品牌介紹圖片</td>
                                            <td align='left'>寬、高(px)</td>
                                            <td>640*427</td>
                                            <td>
                                                <ul>
                                                    <li>接受格式為png、jpg</li>
                                                    <li>無輪播</li>
                                                    <li>不可空白</li>
                                                </ul>
                                                <a type="button" data-toggle="modal" href="#tmp1_brand">觀看範例圖片</a>
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
                                        <p className="modal-title">品牌介紹 - 副標題1範例</p>
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
                                        <p className="modal-title">品牌介紹 - 副標題2範例</p>
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
                                        <p className="modal-title">品牌介紹 - 副標題3範例</p>
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

                    </div>
                </div>
           </div>
        )

    }


}
export default Session5;