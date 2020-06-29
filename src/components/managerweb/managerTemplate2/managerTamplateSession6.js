import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import InputSwitch from '../../sharecomponents/inputSwitch';
import Msg from '../msg';

class Session6 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            customizeEnable : '',
            customizeName : '',
            card1Title : '',
            card1Content : '',
            card1Img : ' ',
            card1ImgUpload : '',
            card2Title : '',
            card2Content : '',
            card2Img : ' ',
            card2ImgUpload : '',
            card3Title : '',
            card3Content : '',
            card3Img : ' ',
            card3ImgUpload : ''
        }

    }


    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj={
            ono : cid,
            themeNum : event.target.themeNum6.value,
            customizeEnable : event.target.customizeEnable.checked,
            customizeName : event.target.customizeName.value,
            customizeTitle : '',
            customizeSubTitle : '',

            card1Title : event.target.card1Title.value,
            card1Content : event.target.card1Content.value,
            card1Img : event.target.card1Img.value,
            card1ImgUpload : this.state.card1ImgUpload ? this.state.card1ImgUpload.value : null,

            card2Title : event.target.card2Title.value,
            card2Content : event.target.card2Content.value,
            card2Img : event.target.card2Img.value,
            card2ImgUpload : this.state.card2ImgUpload ? this.state.card2ImgUpload.value : null,

            card3Title : event.target.card3Title.value,
            card3Content : event.target.card3Content.value,
            card3Img : event.target.card3Img.value,
            card3ImgUpload : this.state.card3ImgUpload ? this.state.card3ImgUpload.value : null,

            card4Title : '',
            card4Content : '',
            card4Img : '',
            card4ImgUpload : null,

            card5Title : '',
            card5Content : '',
            card5Img : '',
            card5ImgUpload : null,

            card6Title : '',
            card6Content : '',
            card6Img : '',
            card6ImgUpload : null,

            card7Title : '',
            card7Content : '',
            card7Img : '',
            card7ImgUpload : null,

            card8Title : '',
            card8Content : '',
            card8Img : '',
            card8ImgUpload : null,
            
            customizeTag1 : '',
            customizeTag2 : '',
            customizeTag3 : '',
            customizeTag4 : '',
            customizeURL1 : '',
            customizeURL2 : '',
            customizeURL3 : '',
            customizeURL4 : ''
        }

        if(event.target.action6.value === 'create'){
            this.props.createcustomize(submitObj);
        }
        if(event.target.action6.value === 'modify'){
            this.props.updatecustomize(submitObj);
        }
    }

    render(){

        const cid = this.props.match.params.cid.trim();
        const { customizeData, customizeErr, customizeIsLoading} = this.props.customizeReducer;
       
        let customizeEnable = this.state.customizeEnable;
        let customizeName = this.state.customizeName;
        let card1Title = this.state.card1Title;
        let card1Content  = this.state.card1Content;
        let card1Img = this.state.card1Img;
        let card2Title = this.state.card2Title;
        let card2Content  = this.state.card2Content;
        let card2Img = this.state.card2Img;
        let card3Title = this.state.card3Title;
        let card3Content  = this.state.card3Content;
        let card3Img = this.state.card3Img;

        const sessionName=  "自定義";
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(customizeData && customizeData.length > 0){
            actionType = 'modify';
            customizeData.forEach(element => {
                customizeEnable = customizeEnable !== "" ? customizeEnable : element.customizeEnable;
                customizeName = customizeName !== "" ? customizeName : element.customizeName;

                card1Title = card1Title !== "" ? card1Title : element.card1Title;
                card1Content = card1Content !== "" ? card1Content : element.card1Content;
                card1Img = card1Img !== " " ? card1Img : element.card1Img;

                card2Title = card2Title !== "" ? card2Title : element.card2Title;
                card2Content = card2Content !== "" ? card2Content : element.card2Content;
                card2Img = card2Img !== " " ? card2Img : element.card2Img;

                card3Title = card3Title !== "" ? card3Title : element.card3Title;
                card3Content = card3Content !== "" ? card3Content : element.card3Content;
                card3Img = card3Img !== " " ? card3Img : element.card3Img;
            })
        }

        // enable
        customizeEnable = customizeEnable === "" ? false : customizeEnable;
        // image
        let card1ImgUpload = "";
        if(card1Img === " "){
            card1ImgUpload = "/image/logo-1111.png";
        }else{
            card1ImgUpload = this.state.card1Img !== ' ' ?  this.state.card1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card1Img}`;
        }

        let card2ImgUpload = "";
        if(card2Img === " "){
            card2ImgUpload = "/image/logo-1111.png";
        }else{
            card2ImgUpload = this.state.card2Img !== ' ' ?  this.state.card2ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card2Img}`;
        }

        let card3ImgUpload = "";
        if(card3Img === " "){
            card3ImgUpload = "/image/logo-1111.png";
        }else{
            card3ImgUpload = this.state.card3Img !== ' ' ?  this.state.card3ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card3Img}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard6" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6">
                <h6 className="m-0 font-weight-bold">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard6">
                <div className="card-body">
                    
                    <Msg type ='LOADING'  value = {customizeIsLoading} text='Processing ' /> 
                    <Msg type ='ERROR' value = {customizeErr} text= 'Opps! Error : ' />
                    <form id='dataForm6' className={customizeIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                        <input type="hidden" id="themeNum6" value={themeNum} />
 
                        <InputSwitch sessionName={sessionName} inputName='customizeEnable' inputState={customizeEnable} stateObj={this} />

                        <div className="form-row row-style-pt1">
                            <div className="col-md-6 mb-3">
                                <div className="form-row row-style-w95">
                                    <InputText title='自訂選單名稱' notice='(即為在主選單上顯示的名稱，字數限制為4個字以內)' inputName='customizeName' inputState={customizeName}
                                        stateObj={this} required={false} checkValue='4' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">                                    
                                <div className="height-sample"><img src="/image/sample_02/06.png" alt="Temp2_Customize" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp2_customize">
                                        觀看放大圖例
                                    </a>
                                </div>
                                <hr />
                                <div>
                                    <table border='1'>
                                        <thead>
                                        <tr>
                                            <th width="10%">項目</th>
                                            <th width="35%">內容範例</th>
                                            <th width="15%">規格</th>
                                            <th width="40%">備註</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>自訂選單名稱</td>
                                            <td align='left'>自訂抬頭</td>
                                            <td>4個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp2_customize_menu">觀看範例圖片</a>
                                            </td>
                                        </tr>                                        
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp2_customize">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/06.png" alt="tmp2_customize" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp2_customize_menu">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 自訂選單範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/06-0.png" alt="tmp2_customize_menu" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="card">
                                <a href="#collapseCard6-1" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-1">
                                    <div className="card-header text-white bg-primary">卡片 1</div>
                                </a>
                                <div className="card-body collapse show" id="collapseCard6-1">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片1標題' notice='(字數限制為10個字以內)' inputName='card1Title' inputState={card1Title}
                                                    stateObj={this} required={false} checkValue='10' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片1內文' notice='(字數限制為100個字以內)' inputName='card1Content' inputState={card1Content}
                                                    rows='2' stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片1圖片' notice='(圖檔尺寸大小為 510*300  ，接受格式為png、jpg)' objName='card1Img'  imgUpload={card1ImgUpload} 
                                                    imgFileName={card1Img} parentObj={this} imgW={510} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_02/06-1.png" alt="Temp2_Customize_1" width="100%"/></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp2_customize_1">
                                                    觀看放大圖例
                                                </a>
                                            </div>
                                            <hr />
                                            <div>
                                                <table border='1'>
                                                    <thead>
                                                    <tr>
                                                        <th width="10%">項目</th>
                                                        <th width="35%">內容範例</th>
                                                        <th width="15%">規格</th>
                                                        <th width="40%">備註</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>卡片1標題</td>
                                                        <td align='left'>規模</td>
                                                        <td>10個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1內文</td>
                                                        <td align='left'>深耕二十餘年，100%正職嚴選管家。居家防疫從清潔消毒開始！提供管家到府清潔服務，提供專業防疫工具，為客戶創造健康的生活環境。 全台唯一TTQS銀質獎，數十年的專業清潔經驗，防疫期間管家施作服務全程配載口罩讓您安心。 定期清潔。單次清潔。</td>
                                                        <td>100個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>510*300</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>接受格式為png、jpg</li>
                                                                <li>不可空白</li>
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
                        </div>
                        <div className="modal fade" id="tmp2_customize_1">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/06-1.png" alt="tmp2_customize_1" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="card">
                                <a href="#collapseCard6-2" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-2">
                                    <div className="card-header text-white bg-primary">卡片 2</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-2">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片2標題' notice='(字數限制為10個字以內)' inputName='card2Title' inputState={card2Title}
                                                    stateObj={this} required={false} checkValue='10' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片2內文' notice='(字數限制為20個字以內)' inputName='card2Content' inputState={card2Content}
                                                    rows='2' stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片2圖片' notice='(圖檔尺寸大小為 510*300  ，接受格式為png、jpg)' objName='card2Img'  imgUpload={card2ImgUpload} 
                                                    imgFileName={card2Img} parentObj={this} imgW={510} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_02/06-2.png" alt="Temp2_Customize_2" width="100%"/></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp2_customize_2">
                                                    觀看放大圖例
                                                </a>
                                            </div>
                                            <hr />
                                            <div>
                                                <table border='1'>
                                                    <thead>
                                                    <tr>
                                                        <th width="10%">項目</th>
                                                        <th width="35%">內容範例</th>
                                                        <th width="15%">規格</th>
                                                        <th width="40%">備註</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>卡片2標題</td>
                                                        <td align='left'>組織</td>
                                                        <td>10個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2內文</td>
                                                        <td align='left'>廣納業界菁英，建立專業經理人領導團隊。定期或鐘點，年終打掃，煮飯打掃，到府清潔，收納整理，居家陪伴，家事管理，鐘點管家，居家服務。家常烹飪，大掃除，居家清潔，辦公室清潔，裝潢後清潔，寵物陪伴，海外管家，替手保母。複合式服務，客製化服務。客服迅速，待客如親。</td>
                                                        <td>100個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>510*300</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>接受格式為png、jpg</li>
                                                                <li>不可空白</li>
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
                        </div>
                        <div className="modal fade" id="tmp2_customize_2">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/06-2.png" alt="tmp2_customize_2" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        <div>
                            <div className="card">
                                <a href="#collapseCard6-3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-3">
                                    <div className="card-header text-white bg-primary">卡片 3</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-3">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片3標題' notice='(字數限制為10個字以內)' inputName='card3Title' inputState={card3Title}
                                                    stateObj={this} required={false} checkValue='10' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片3內文' notice='(字數限制為100個字以內)' inputName='card3Content' inputState={card3Content}
                                                    rows='2' stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片3圖片' notice='(圖檔尺寸大小為 510*300  ，接受格式為png、jpg)' objName='card3Img'  imgUpload={card3ImgUpload} 
                                                    imgFileName={card3Img} parentObj={this} imgW={510} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_02/06-3.png" alt="Temp2_Customize_3" width="100%"/></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp2_customize_3">
                                                    觀看放大圖例
                                                </a>
                                            </div>
                                            <hr />
                                            <div>
                                                <table border='1'>
                                                    <thead>
                                                    <tr>
                                                        <th width="10%">項目</th>
                                                        <th width="35%">內容範例</th>
                                                        <th width="15%">規格</th>
                                                        <th width="40%">備註</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>卡片3標題</td>
                                                        <td align='left'>產品</td>
                                                        <td>10個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3內文</td>
                                                        <td align='left'>媽咪樂為全台規模最大的居家清潔服務公司，專精於家事清潔、居家打掃、家事管理等居家服務。數十年的專業經驗使媽咪樂榮獲全台唯一TTQS銀質獎，期望能提供更</td>
                                                        <td>100個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>510*300</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>接受格式為png、jpg</li>
                                                                <li>不可空白</li>
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
                        </div>
                        <div className="modal fade" id="tmp2_customize_3">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/06-3.png" alt="tmp2_customize_3" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div  align="center">
                            <button type='submit' id='action6' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button>
                        </div>
                    </form>
                </div>
                </div>
           </div>
        )

    }

}
export default Session6;