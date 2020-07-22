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
            customizeTitle : '',
            customizeSubTitle : '',
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
            card3ImgUpload : '',
            card4Title : '',
            card4Content : '',
            card4Img : ' ',
            card4ImgUpload : '',
            customizeTag1 : '',
            customizeTag2 : '',
            customizeTag3 : '',
            customizeTag4 : '',
            customizeURL1 : '',
            customizeURL2 : '',
            customizeURL3 : '',
            customizeURL4 : ''
        }

    }


    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj={
            ono: cid,
            themeNum : event.target.themeNum6.value,
            customizeEnable : event.target.customizeEnable.checked,
            customizeName : event.target.customizeName.value,
            customizeTitle : event.target.customizeTitle.value,
            customizeSubTitle : event.target.customizeSubTitle.value,

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

            card4Title : event.target.card4Title.value,
            card4Content : event.target.card4Content.value,
            card4Img : event.target.card4Img.value,
            card4ImgUpload : this.state.card4ImgUpload ? this.state.card4ImgUpload.value : null,

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
            
            customizeTag1 : event.target.customizeTag1.value,
            customizeTag2 : event.target.customizeTag2.value,
            customizeTag3 : event.target.customizeTag3.value,
            customizeTag4 : event.target.customizeTag4.value,
            customizeURL1 : event.target.customizeURL1.value,
            customizeURL2 : event.target.customizeURL2.value,
            customizeURL3 : event.target.customizeURL3.value,
            customizeURL4 : event.target.customizeURL4.value
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
        let customizeTitle = this.state.customizeTitle;
        let customizeSubTitle = this.state.customizeSubTitle;
        let card1Title = this.state.card1Title;
        let card1Content  = this.state.card1Content;
        let card1Img = this.state.card1Img;
        let card2Title = this.state.card2Title;
        let card2Content  = this.state.card2Content;
        let card2Img = this.state.card2Img;
        let card3Title = this.state.card3Title;
        let card3Content  = this.state.card3Content;
        let card3Img = this.state.card3Img;
        let card4Title = this.state.card4Title;
        let card4Content  = this.state.card4Content;
        let card4Img = this.state.card4Img;
        let customizeTag1 = this.state.customizeTag1;
        let customizeTag2 = this.state.customizeTag2;
        let customizeTag3 = this.state.customizeTag3;
        let customizeTag4 = this.state.customizeTag4;
        let customizeURL1 = this.state.customizeURL1;
        let customizeURL2 = this.state.customizeURL2;
        let customizeURL3 = this.state.customizeURL3;
        let customizeURL4 = this.state.customizeURL4;
        

        const sessionName=  "自定義";
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(customizeData && customizeData.length > 0){
            actionType = 'modify';
            customizeData.forEach(element => {
                customizeEnable = customizeEnable !=="" ? customizeEnable : element.customizeEnable;
                customizeName = customizeName !=="" ? customizeName : element.customizeName;
                customizeTitle = customizeTitle !=="" ? customizeTitle : element.customizeTitle;
                customizeSubTitle = customizeSubTitle !=="" ? customizeSubTitle : element.customizeSubTitle;

                card1Title = card1Title !=="" ? card1Title : element.card1Title;
                card1Content = card1Content !=="" ? card1Content : element.card1Content;
                card1Img = card1Img !==" " ? card1Img : element.card1Img;

                card2Title = card2Title !=="" ? card2Title : element.card2Title;
                card2Content = card2Content !=="" ? card2Content : element.card2Content;
                card2Img = card2Img !==" " ? card2Img : element.card2Img;

                card3Title = card3Title !=="" ? card3Title : element.card3Title;
                card3Content = card3Content !=="" ? card3Content : element.card3Content;
                card3Img = card3Img !==" " ? card3Img : element.card3Img;

                card4Title = card4Title !=="" ? card4Title : element.card4Title;
                card4Content = card4Content !=="" ? card4Content : element.card4Content;
                card4Img = card4Img !==" " ? card4Img : element.card4Img;

                customizeTag1 = customizeTag1 !=="" ? customizeTag1 : element.customizeTag1;
                customizeTag2 = customizeTag2 !=="" ? customizeTag2 : element.customizeTag2;
                customizeTag3 = customizeTag3 !=="" ? customizeTag3 : element.customizeTag3;
                customizeTag4 = customizeTag4 !=="" ? customizeTag4 : element.customizeTag4;
                customizeURL1 = customizeURL1 !=="" ? customizeURL1 : element.customizeURL1;
                customizeURL2 = customizeURL2 !=="" ? customizeURL2 : element.customizeURL2;
                customizeURL3 = customizeURL3 !=="" ? customizeURL3 : element.customizeURL3;
                customizeURL4 = customizeURL4 !=="" ? customizeURL4 : element.customizeURL4;
            })
        }

        if(actionType === 'create') {
            if(customizeURL1 === ''){
                customizeURL1 = `https://www.1111.com.tw/corp/${cid}/`;
            }
    
            if(customizeURL2 === ''){
                customizeURL2 = `https://www.1111.com.tw/corp/${cid}/`;
            }
    
            if(customizeURL3 === ''){
                customizeURL3 = `https://www.1111.com.tw/corp/${cid}/`;
            }
    
            if(customizeURL4 === ''){
                customizeURL4 = `https://www.1111.com.tw/corp/${cid}/`;
            }
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

        let card4ImgUpload = "";
        if(card4Img === " "){
            card4ImgUpload = "/image/logo-1111.png";
        }else{
            card4ImgUpload = this.state.card4Img !== ' ' ?  this.state.card4ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card4Img}`;
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
                                    <InputText title='自訂選單名稱' notice='(即為在主選單上顯示的名稱，限制字數為4個字以內)' inputName='customizeName' inputState={customizeName}
                                        stateObj={this} required={false} checkValue='4' />
                                </div>
                                <div className="form-row row-style-w95-pt1">
                                    <InputText title='自訂區域主標題' notice='(建議字數為10個字以內)' inputName='customizeTitle' inputState={customizeTitle}
                                        stateObj={this} required={false} checkValue='100' />
                                </div>
                                <div className="form-row row-style-w95-pt1">
                                    <InputTextArea title='自訂區域副標題' notice='(建議字數為50個字以內)' inputName='customizeSubTitle' inputState={customizeSubTitle}
                                        rows='3' stateObj={this} required={false} checkValue='200' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">                                    
                                <div><img src="/image/sample_05/06.png" alt="Temp5_Customize" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp5_customize">
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
                                            <td align='left'>綠能新訊</td>
                                            <td>4個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp5_customize_menu">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>自訂區域主標題</td>
                                            <td align='left'>綠能新訊</td>
                                            <td>建議10個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp5_customize_title">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>自訂區域副標題</td>
                                            <td align='left'>能看出以後的趨勢，您們還在等甚麼呢?</td>
                                            <td>建議50個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp5_customize_subtitle">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06.png" alt="tmp5_customize" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_menu">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 自訂選單 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-0.png" alt="tmp5_customize_menu" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-1.png" alt="tmp5_customize_title" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_subtitle">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 副標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-2.png" alt="tmp5_customize_subtitle" width="100%" />
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
                                                <InputText title='卡片1標題' notice='(建議字數為30個字以內)' inputName='card1Title' inputState={card1Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片1內文' notice='(建議字數為120個字以內)' inputName='card1Content' inputState={card1Content}
                                                    rows='2' stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片1標籤' notice='(建議字數為15個字以內)' inputName='customizeTag1' inputState={customizeTag1}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row">
                                                <InputText title='卡片1網址' notice='(請輸入網址)' inputName='customizeURL1' inputState={customizeURL1}
                                                    stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片1圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card1Img' imgUpload={card1ImgUpload} 
                                                    imgFileName={card1Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_05/06-3-1.png" alt="Temp5_Customize_card1" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp5_customize_card1">
                                                    觀看放大圖例
                                                </a>
                                            </div>
                                            <hr />
                                            <div>
                                                <table border='1'>
                                                    <thead>
                                                    <tr>
                                                        <th width="20%">項目</th>
                                                        <th width="35%">內容範例</th>
                                                        <th width="15%">規格</th>
                                                        <th width="30%">備註</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>卡片1標題</td>
                                                        <td align='left'>執政2年談能源 總統：綠電長期較核電經濟</td>
                                                        <td>建議30個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card1_title">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1內文</td>
                                                        <td align='left'>總統表示，2025年非核家園，屆時核一、核二以及核三廠都要退役，綠能要達到總發電量的20%，主要來源則是來自太陽能和風力。</td>
                                                        <td>建議120個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card1_content">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1標籤</td>
                                                        <td align='left'>新聞新知, 綠能新訊</td>
                                                        <td>建議15個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card1_tag">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1網址</td>
                                                        <td align='left'>了解更多</td>
                                                        <td>請輸入網址</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card1_url">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>400*300</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>接受格式為png、jpg</li>
                                                                <li>不可空白</li>
                                                                <li><a type="button" data-toggle="modal" href="#tmp5_customize_card1_pic">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp5_customize_card1">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-1.png" alt="tmp5_customize_card1" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card1_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-1-1.png" alt="tmp5_customize_card1_title" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card1_content">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-1-2.png" alt="tmp5_customize_card1_content" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card1_tag">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1標籤 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-1-3.png" alt="tmp5_customize_card1_tag" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card1_url">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1網址 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-1-4.png" alt="tmp5_customize_card1_url" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card1_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1圖片 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-1-5.png" alt="tmp5_customize_card1_pic" width="100%" />
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
                                                <InputText title='卡片2標題' notice='(建議字數為30個字以內)' inputName='card2Title' inputState={card2Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片2內文' notice='(建議字數為120個字以內)' inputName='card2Content' inputState={card2Content}
                                                    rows='2' stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片2標籤' notice='(建議字數為15個字以內)' inputName='customizeTag2' inputState={customizeTag2}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片2網址' notice='(請輸入網址)' inputName='customizeURL2' inputState={customizeURL2}
                                                    stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片2圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card2Img' imgUpload={card2ImgUpload} 
                                                    imgFileName={card2Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_05/06-3-2.png" alt="Temp5_Customize_card2" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp5_customize_card2">
                                                    觀看放大圖例
                                                </a>
                                            </div>
                                            <hr />
                                            <div>
                                                <table border='1'>
                                                    <thead>
                                                    <tr>
                                                        <th width="20%">項目</th>
                                                        <th width="35%">內容範例</th>
                                                        <th width="15%">規格</th>
                                                        <th width="30%">備註</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>卡片2標題</td>
                                                        <td align='left'>電費收入穩定，可作為另類收益來源-投資再生能源 買題材股不如買電廠</td>
                                                        <td>建議30個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card2_title">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2內文</td>
                                                        <td align='left'>對於追求收益與低波動的投資人來說，要參與綠電商機，近年出現了另一種思維下的全新投資工具——再生能源基礎建設證券，此種投資工具更適合長期布局。</td>
                                                        <td>建議120個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card2_content">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2標籤</td>
                                                        <td align='left'>新聞新知, 綠能新訊</td>
                                                        <td>建議15個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card2_tag">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2網址</td>
                                                        <td align='left'>了解更多</td>
                                                        <td>請輸入網址</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card2_url">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>400*300</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>接受格式為png、jpg</li>
                                                                <li>不可空白</li>
                                                                <li><a type="button" data-toggle="modal" href="#tmp5_customize_card2_pic">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp5_customize_card2">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-2.png" alt="tmp5_customize_card2" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card2_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-2-1.png" alt="tmp5_customize_card2_title" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card2_content">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-2-2.png" alt="tmp5_customize_card2_content" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card2_tag">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2標籤 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-2-3.png" alt="tmp5_customize_card2_tag" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card2_url">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2網址 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-2-4.png" alt="tmp5_customize_card2_url" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card2_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2圖片 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-2-5.png" alt="tmp5_customize_card2_pic" width="100%" />
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
                                                <InputText title='卡片3標題' notice='(建議字數為30個字以內)' inputName='card3Title' inputState={card3Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片3內文' notice='(建議字數為120個字以內)' inputName='card3Content' inputState={card3Content}
                                                    rows='2' stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片3標籤' notice='(建議字數為15個字以內)' inputName='customizeTag3' inputState={customizeTag3}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片3網址' notice='(請輸入網址)' inputName='customizeURL3' inputState={customizeURL3}
                                                    stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片3圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card3Img' imgUpload={card3ImgUpload} 
                                                    imgFileName={card3Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_05/06-3-3.png" alt="Temp5_Customize_card3" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp5_customize_card3">
                                                    觀看放大圖例
                                                </a>
                                            </div>
                                            <hr />
                                            <div>
                                                <table border='1'>
                                                    <thead>
                                                    <tr>
                                                        <th width="20%">項目</th>
                                                        <th width="35%">內容範例</th>
                                                        <th width="15%">規格</th>
                                                        <th width="30%">備註</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>卡片3標題</td>
                                                        <td align='left'>收益穩定 公民電廠上網就能買</td>
                                                        <td>建議30個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card3_title">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3內文</td>
                                                        <td align='left'>國外綠能合作社已有二十多年歷史，台灣也有環保志願者仿效此模式，讓民眾可透過認購單片太陽能板的方式，成為大型電廠的合夥人。</td>
                                                        <td>建議120個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card3_content">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3標籤</td>
                                                        <td align='left'>新聞新知, 綠能新訊</td>
                                                        <td>建議15個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card3_tag">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3網址</td>
                                                        <td align='left'>了解更多</td>
                                                        <td>請輸入網址</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card3_url">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>400*300</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>接受格式為png、jpg</li>
                                                                <li>不可空白</li>
                                                                <li><a type="button" data-toggle="modal" href="#tmp5_customize_card3_pic">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp5_customize_card3">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-3.png" alt="tmp5_customize_card3" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card3_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-3-1.png" alt="tmp5_customize_card3_title" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card3_content">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-3-2.png" alt="tmp5_customize_card3_content" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card3_tag">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3標籤 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-3-3.png" alt="tmp5_customize_card3_tag" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card3_url">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3網址 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-3-4.png" alt="tmp5_customize_card3_url" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card3_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3圖片 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-3-5.png" alt="tmp5_customize_card3_pic" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="card">
                                <a href="#collapseCard6-4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-4">
                                    <div className="card-header text-white bg-primary">卡片 4</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-4">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                        <div className="form-row row-style-w95">
                                                <InputText title='卡片4標題' notice='(建議字數為30個字以內)' inputName='card4Title' inputState={card4Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片4內文' notice='(建議字數為120個字以內)' inputName='card4Content' inputState={card4Content}
                                                    rows='2' stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片4標籤' notice='(建議字數為15個字以內)' inputName='customizeTag4' inputState={customizeTag4}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片4網址' notice='(請輸入網址)' inputName='customizeURL4' inputState={customizeURL4}
                                                    stateObj={this} required={false} checkValue='500' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片4圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card4Img' imgUpload={card4ImgUpload} 
                                                    imgFileName={card4Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_05/06-3-4.png" alt="Temp5_Customize_card4" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp5_customize_card4">
                                                    觀看放大圖例
                                                </a>
                                            </div>
                                            <hr />
                                            <div>
                                                <table border='1'>
                                                    <thead>
                                                    <tr>
                                                        <th width="20%">項目</th>
                                                        <th width="35%">內容範例</th>
                                                        <th width="15%">規格</th>
                                                        <th width="30%">備註</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>卡片4標題</td>
                                                        <td align='left'>推廣全民種電 電力燃氣供應家數增</td>
                                                        <td>建議30個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card4_title">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片4內文</td>
                                                        <td align='left'>政府推綠能，號召全民一起種電，據主計總處最新發布的工商普查，2016 年底電力及燃氣供應業家數較五年前增加 279%，主計總處說明，民間業者陸續投入綠能發電是關鍵。</td>
                                                        <td>建議120個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card4_content">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片4標籤</td>
                                                        <td align='left'>新聞新知</td>
                                                        <td>建議15個字以內</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card4_tag">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片4網址</td>
                                                        <td align='left'>了解更多</td>
                                                        <td>請輸入網址</td>
                                                        <td>
                                                            不可空白<br />
                                                            <a type="button" data-toggle="modal" href="#tmp5_customize_card4_url">觀看範例圖片</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片4圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>400*300</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>接受格式為png、jpg</li>
                                                                <li>不可空白</li>
                                                                <li><a type="button" data-toggle="modal" href="#tmp5_customize_card4_pic">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp5_customize_card4">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-4.png" alt="tmp5_customize_card4" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card4_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-4-1.png" alt="tmp5_customize_card4_title" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card4_content">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4內文 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-4-2.png" alt="tmp5_customize_card4_content" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card4_tag">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4標籤 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-4-3.png" alt="tmp5_customize_card4_tag" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card4_url">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4網址 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-4-4.png" alt="tmp5_customize_card4_url" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp5_customize_card4_pic">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4圖片 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_05/06-3-4-5.png" alt="tmp5_customize_card4_pic" width="100%" />
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