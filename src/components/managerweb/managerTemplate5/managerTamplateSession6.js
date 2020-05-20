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
        customizeEnable = customizeEnable ===" " ? false : customizeEnable;
        // image
        let card1ImgUpload ="";
        if(card1Img === " "){
            card1ImgUpload = "/image/logo-1111.png";
        }else{
            card1ImgUpload = this.state.card1Img !==' ' ?  this.state.card1ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card1Img}`;
        }

        let card2ImgUpload ="";
        if(card2Img === " "){
            card2ImgUpload = "/image/logo-1111.png";
        }else{
            card2ImgUpload = this.state.card2Img !==' ' ?  this.state.card2ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card2Img}`;
        }

        let card3ImgUpload ="";
        if(card3Img === " "){
            card3ImgUpload = "/image/logo-1111.png";
        }else{
            card3ImgUpload = this.state.card3Img !==' ' ?  this.state.card3ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card3Img}`;
        }

        let card4ImgUpload ="";
        if(card4Img === " "){
            card4ImgUpload = "/image/logo-1111.png";
        }else{
            card4ImgUpload = this.state.card4Img !==' ' ?  this.state.card4ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card4Img}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard6" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6">
                <h6 className="m-0 font-weight-bold">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard6">
                <div className="card-body">
                    <form id='dataForm6' className={customizeIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                        <Msg type ='LOADING'  value = {customizeIsLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {customizeErr} text= 'Opps! Error : ' />
                        <input type="hidden" id="themeNum6" value={themeNum} />
 
                        <InputSwitch sessionName={sessionName} inputName='customizeEnable' inputState={customizeEnable} stateObj={this} />

                        <div className="form-row row-style-pt1">
                            <div className="col-md-6 mb-3">
                                <div className="form-row row-style-w95">
                                    <InputText title='自訂選單名稱' notice='(即為在主選單上顯示的名稱，字數限制為4個字以內)' inputName='customizeName' inputState={customizeName}
                                        stateObj={this} required={false} checkValue='4' />
                                </div>
                                <div className="form-row row-style-w95-pt1">
                                    <InputText title='自訂區域主標題' notice='(字數限制為10個字以內)' inputName='customizeTitle' inputState={customizeTitle}
                                        stateObj={this} required={false} checkValue='10' />
                                </div>
                                <div className="form-row row-style-w95-pt1">
                                    <InputTextArea title='自訂區域副標題' notice='(字數限制為50個字以內)' inputName='customizeSubTitle' inputState={customizeSubTitle}
                                        rows='3' stateObj={this} required={false} checkValue='50' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">                                    
                                <div><img src="/image/sample_01/06.png" alt="Temp1_Customize" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                            <td align='left'>有機食材</td>
                                            <td>4個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_customize_menu">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>自訂區域主標題</td>
                                            <td align='left'>有機食材宅配服務</td>
                                            <td>10個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_customize_title">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>自訂區域副標題</td>
                                            <td align='left'>GREEN 及 SAFE百寶箱組合週週送，各式生鮮、冷藏、冷凍有機食材宅配服務</td>
                                            <td>40個字以內</td>
                                            <td>
                                                不可空白<br />
                                                <a type="button" data-toggle="modal" href="#tmp1_customize_title">觀看範例圖片</a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp1_customize">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/06.png" alt="tmp1_customize" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp1_customize_menu">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 自訂選單範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/06-0.png" alt="tmp1_customize_menu" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp1_customize_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 標題範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_01/06-1.png" alt="tmp1_customize_title" width="100%" />
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
                                                <InputTextArea title='卡片1內文' notice='(字數限制為120個字以內)' inputName='card1Content' inputState={card1Content}
                                                    rows='2' stateObj={this} required={false} checkValue='120' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片1標籤' notice='(字數限制為15個字以內)' inputName='customizeTag1' inputState={customizeTag1}
                                                    stateObj={this} required={false} checkValue='15' />
                                            </div>
                                            <div className="form-row">
                                                <InputText title='卡片1網址' notice='(請輸入網址)' inputName='customizeURL1' inputState={customizeURL1}
                                                    stateObj={this} required={false} checkValue='200' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片1圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card1Img' imgUpload={card1ImgUpload} 
                                                    imgFileName={card1Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-2.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td align='left'>海水生態蝦仁</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>定期檢驗重金屬合格。</li>
                                                                <li>定期檢驗無動物用藥殘留。</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片1圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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
                                                <InputTextArea title='卡片2內文' notice='(字數限制為120個字以內)' inputName='card2Content' inputState={card2Content}
                                                    rows='2' stateObj={this} required={false} checkValue='120' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片2標籤' notice='(字數限制為15個字以內)' inputName='customizeTag2' inputState={customizeTag2}
                                                    stateObj={this} required={false} checkValue='15' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片2網址' notice='(請輸入網址)' inputName='customizeURL2' inputState={customizeURL2}
                                                    stateObj={this} required={false} checkValue='200' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片2圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card2Img' imgUpload={card2ImgUpload} 
                                                    imgFileName={card2Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                       </div>
                                       <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-3.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td align='left'>安心鱸魚排</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>定期檢驗無動物用藥殘留</li>
                                                                <li>定期檢驗鮮度(VBN)合格</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片2圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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
                                                <InputTextArea title='卡片3內文' notice='(字數限制為120個字以內)' inputName='card3Content' inputState={card3Content}
                                                    rows='2' stateObj={this} required={false} checkValue='120' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片3標籤' notice='(字數限制為15個字以內)' inputName='customizeTag3' inputState={customizeTag3}
                                                    stateObj={this} required={false} checkValue='15' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片3網址' notice='(請輸入網址)' inputName='customizeURL3' inputState={customizeURL3}
                                                    stateObj={this} required={false} checkValue='200' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片3圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card3Img' imgUpload={card3ImgUpload} 
                                                    imgFileName={card3Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-4.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td align='left'>蒲燒鯛魚腹排</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>無添加防腐劑</li>
                                                                <li>無添加任何人工甘味劑</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片3圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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



                        <div>
                            <div className="card">
                                <a href="#collapseCard6-4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-4">
                                    <div className="card-header text-white bg-primary">卡片 4</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-4">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                        <div className="form-row row-style-w95">
                                                <InputText title='卡片4標題' notice='(字數限制為10個字以內)' inputName='card4Title' inputState={card4Title}
                                                    stateObj={this} required={false} checkValue='10' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片4內文' notice='(字數限制為120個字以內)' inputName='card4Content' inputState={card4Content}
                                                    rows='2' stateObj={this} required={false} checkValue='120' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片4標籤' notice='(字數限制為15個字以內)' inputName='customizeTag4' inputState={customizeTag4}
                                                    stateObj={this} required={false} checkValue='15' />
                                            </div>
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片4網址' notice='(請輸入網址)' inputName='customizeURL4' inputState={customizeURL4}
                                                    stateObj={this} required={false} checkValue='200' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片4圖片' notice='(圖檔尺寸大小為 400*300，接受格式為png、jpg)' objName='card4Img' imgUpload={card4ImgUpload} 
                                                    imgFileName={card4Img} parentObj={this} imgW={400} imgH={300} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-5.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td>卡片4標題</td>
                                                        <td align='left'>一品鮑魚糙米粥</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片4內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>無添加防腐劑</li>
                                                                <li>正黑豬及放山雞作為基底</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片4圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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



                        {/*}
                        <div>
                            <div className="card">
                                <a href="#collapseCard6-5" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-5">
                                    <div className="card-header text-white bg-primary">卡片 5</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-5">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片5標題' notice='(字數限制為8個字以內)' inputName='card5Title' inputState={card5Title}
                                                    stateObj={this} required={false} checkValue='8' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片5內文' notice='(字數限制為20個字以內)' inputName='card5Content' inputState={card5Content}
                                                    rows='2' stateObj={this} required={false} checkValue='20' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片5圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card5Img'  imgUpload={card5ImgUpload} 
                                                    imgFileName={card5Img} parentObj={this} imgW={350} imgH={350} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-4.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td>卡片5標題</td>
                                                        <td align='left'>一品鮑魚糙米粥</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片5內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>無添加防腐劑</li>
                                                                <li>正黑豬及放山雞作為基底</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片5圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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



                        <div>
                            <div className="card">
                                <a href="#collapseCard6-6" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-6">
                                    <div className="card-header text-white bg-primary">卡片 6</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-6">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片6標題' notice='(字數限制為8個字以內)' inputName='card6Title' inputState={card6Title}
                                                    stateObj={this} required={false} checkValue='8' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片6內文' notice='(字數限制為20個字以內)' inputName='card6Content' inputState={card6Content}
                                                    rows='2' stateObj={this} required={false} checkValue='20' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片6圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card6Img'  imgUpload={card6ImgUpload} 
                                                    imgFileName={card6Img} parentObj={this} imgW={350} imgH={350} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-4.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td>卡片6標題</td>
                                                        <td align='left'>一品鮑魚糙米粥</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片6內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>無添加防腐劑</li>
                                                                <li>正黑豬及放山雞作為基底</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片6圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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



                        <div>
                            <div className="card">
                                <a href="#collapseCard6-7" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-7">
                                    <div className="card-header text-white bg-primary">卡片 7</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-7">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片7標題' notice='(字數限制為8個字以內)' inputName='card7Title' inputState={card7Title}
                                                    stateObj={this} required={false} checkValue='8' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片7內文' notice='(字數限制為20個字以內)' inputName='card7Content' inputState={card7Content}
                                                    rows='2' stateObj={this} required={false} checkValue='20' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片7圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card7Img'  imgUpload={card7ImgUpload} 
                                                    imgFileName={card7Img} parentObj={this} imgW={350} imgH={350} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-4.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td>卡片7標題</td>
                                                        <td align='left'>一品鮑魚糙米粥</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片7內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>無添加防腐劑</li>
                                                                <li>正黑豬及放山雞作為基底</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片7圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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



                        <div>
                            <div className="card">
                                <a href="#collapseCard6-8" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-8">
                                    <div className="card-header text-white bg-primary">卡片 8</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-8">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片8標題' notice='(字數限制為8個字以內)' inputName='card8Title' inputState={card8Title}
                                                    stateObj={this} required={false} checkValue='8' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <InputTextArea title='卡片8內文' notice='(字數限制為20個字以內)' inputName='card8Content' inputState={card8Content}
                                                    rows='2' stateObj={this} required={false} checkValue='20' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片8圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card8Img'  imgUpload={card8ImgUpload} 
                                                    imgFileName={card8Img} parentObj={this} imgW={350} imgH={350} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_01/06-4.png" alt="Temp1_Customize" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp1_customize">
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
                                                        <td>卡片8標題</td>
                                                        <td align='left'>一品鮑魚糙米粥</td>
                                                        <td>8個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片8內文</td>
                                                        <td align='left'>
                                                            <ul>
                                                                <li>無添加防腐劑</li>
                                                                <li>正黑豬及放山雞作為基底</li>
                                                            </ul>
                                                        </td>
                                                        <td>20個字以內</td>
                                                        <td>不可空白</td>
                                                    </tr>
                                                    <tr>
                                                        <td>卡片8圖片</td>
                                                        <td align='left'>寬、高(px)</td>
                                                        <td>350*350</td>
                                                        <td>
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
                        {*/}

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