import React from 'react';
import InputText from '../../sharecomponents/inputText';
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
            card1Img : ' ',
            card1ImgUpload : '',
            card2Title : '',
            card2Img : ' ',
            card2ImgUpload : '',
            card3Title : '',
            card3Img : ' ',
            card3ImgUpload : '',
            card4Title : '',
            card4Img : ' ',
            card4ImgUpload : '',
            card5Title : '',
            card5Img : ' ',
            card5ImgUpload : '',
            card6Title : '',
            card6Img : ' ',
            card6ImgUpload : ''
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
            customizeTitle : event.target.customizeTitle.value,
            customizeSubTitle : event.target.customizeSubTitle.value,

            card1Title : event.target.card1Title.value,
            card1Content : '',
            card1Img : event.target.card1Img.value,
            card1ImgUpload : this.state.card1ImgUpload ? this.state.card1ImgUpload.value : null,

            card2Title : event.target.card2Title.value,
            card2Content : '',
            card2Img : event.target.card2Img.value,
            card2ImgUpload : this.state.card2ImgUpload ? this.state.card2ImgUpload.value : null,

            card3Title : event.target.card3Title.value,
            card3Content : '',
            card3Img : event.target.card3Img.value,
            card3ImgUpload : this.state.card3ImgUpload ? this.state.card3ImgUpload.value : null,

            card4Title : event.target.card4Title.value,
            card4Content : '',
            card4Img : event.target.card4Img.value,
            card4ImgUpload : this.state.card4ImgUpload ? this.state.card4ImgUpload.value : null,

            card5Title : event.target.card5Title.value,
            card5Content : '',
            card5Img : event.target.card5Img.value,
            card5ImgUpload : this.state.card5ImgUpload ? this.state.card5ImgUpload.value : null,

            card6Title : event.target.card6Title.value,
            card6Content : '',
            card6Img : event.target.card6Img.value,
            card6ImgUpload : this.state.card6ImgUpload ? this.state.card6ImgUpload.value : null,

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
        let customizeTitle = this.state.customizeTitle;
        let customizeSubTitle = this.state.customizeSubTitle;
        let card1Title = this.state.card1Title;
        let card1Img = this.state.card1Img;
        let card2Title = this.state.card2Title;
        let card2Img = this.state.card2Img;
        let card3Title = this.state.card3Title;
        let card3Img = this.state.card3Img;
        let card4Title = this.state.card4Title;
        let card4Img = this.state.card4Img;
        let card5Title = this.state.card5Title;
        let card5Img = this.state.card5Img;
        let card6Title = this.state.card6Title;
        let card6Img = this.state.card6Img;

        const sessionName=  "自定義";
        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(customizeData && customizeData.length > 0){
            actionType = 'modify';
            customizeData.forEach(element => {
                customizeEnable = customizeEnable !== "" ? customizeEnable : element.customizeEnable;
                customizeName = customizeName !== "" ? customizeName : element.customizeName;
                customizeTitle = customizeTitle !== "" ? customizeTitle : element.customizeTitle;
                customizeSubTitle = customizeSubTitle !== "" ? customizeSubTitle : element.customizeSubTitle;

                card1Title = card1Title !== "" ? card1Title : element.card1Title;
                card1Img = card1Img !== " " ? card1Img : element.card1Img;

                card2Title = card2Title !== "" ? card2Title : element.card2Title;
                card2Img = card2Img !== " " ? card2Img : element.card2Img;

                card3Title = card3Title !== "" ? card3Title : element.card3Title;
                card3Img = card3Img !== " " ? card3Img : element.card3Img;

                card4Title = card4Title !== "" ? card4Title : element.card4Title;
                card4Img = card4Img !== " " ? card4Img : element.card4Img;
                
                card5Title = card5Title !== "" ? card5Title : element.card5Title;
                card5Img = card5Img !== " " ? card5Img : element.card5Img;

                card6Title = card6Title !== "" ? card6Title : element.card6Title;
                card6Img = card6Img !== " " ? card6Img : element.card6Img;
            })
        }

        // enable
        customizeEnable = customizeEnable === "" ? false : customizeEnable;
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

        let card5ImgUpload ="";
        if(card5Img === " "){
            card5ImgUpload = "/image/logo-1111.png";
        }else{
            card5ImgUpload = this.state.card5Img !==' ' ?  this.state.card5ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card5Img}`;
        } 

        let card6ImgUpload ="";
        if(card6Img === " "){
            card6ImgUpload = "/image/logo-1111.png";
        }else{
            card6ImgUpload = this.state.card6Img !==' ' ?  this.state.card6ImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${card6Img}`;
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
                                <div className="form-row row-style-w95-pt1">
                                    <InputText title='自訂區域主標題' notice='(建議字數為6個字以內)' inputName='customizeTitle' inputState={customizeTitle}
                                        stateObj={this} required={false} checkValue='100' />
                                </div>
                                <div className="form-row row-style-w95-pt1">
                                    <InputText title='自訂區域副標題' notice='(建議字數為11個字以內)' inputName='customizeSubTitle' inputState={customizeSubTitle}
                                        stateObj={this} required={false} checkValue='100' />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">                                    
                                <div><img src="/image/sample_04/06.png" alt="Temp4_Customize" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp4_customize">
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
                                                <th width="20%">備註</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>自訂選單名稱</td>
                                                <td align='left'>工作環境</td>
                                                <td>4個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_customize_menu">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>自訂區域主標題</td>
                                                <td align='left'>工作環境</td>
                                                <td>建議6個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_customize_title">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>自訂區域副標題</td>
                                                <td align='left'>Environment</td>
                                                <td>建議11個字以內</td>
                                                <td>
                                                    不可空白<br />
                                                    <a type="button" data-toggle="modal" href="#tmp4_customize_title">觀看範例圖片</a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06.png" alt="tmp4_customize" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_menu">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 自訂選單範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-0.png" alt="tmp4_customize_menu" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_title">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 標題範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-1.png" alt="tmp4_customize_title" width="100%" />
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
                                                <InputText title='卡片1標題' notice='(建議字數為12個字以內)' inputName='card1Title' inputState={card1Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片1圖片' notice='(圖檔尺寸大小為 350*250  ，接受格式為png、jpg)' objName='card1Img'  imgUpload={card1ImgUpload} 
                                                    imgFileName={card1Img} parentObj={this} imgW={350} imgH={250} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_04/06-1-1.png" alt="Temp4_Customize" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp4_customize01">
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
                                                            <th width="20%">備註</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>卡片1標題</td>
                                                            <td align='left'>優惠的餐飲津貼</td>
                                                            <td>建議12個字以內</td>
                                                            <td>
                                                                不可空白
                                                                <a type="button" data-toggle="modal" href="#tmp4_customize_title01">觀看範例圖片</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>卡片1圖片</td>
                                                            <td align='left'>寬、高(px)</td>
                                                            <td>350*250</td>
                                                            <td align='left'>
                                                                <ul>
                                                                    <li>接受格式為png、jpg</li>
                                                                    <li>不可空白</li>
                                                                    <li><a type="button" data-toggle="modal" href="#tmp4_customize01">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp4_customize01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-1-1.png" alt="tmp4_customize01" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_title01">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片1標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-1-2.png" alt="tmp4_customize_title01" width="100%" />
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
                                                <InputText title='卡片2標題' notice='(建議字數為12個字以內)' inputName='card2Title' inputState={card2Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片2圖片' notice='(圖檔尺寸大小為 350*530  ，接受格式為png、jpg)' objName='card2Img'  imgUpload={card2ImgUpload} 
                                                    imgFileName={card2Img} parentObj={this} imgW={350} imgH={530} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_04/06-2-1.png" alt="Temp4_Customize" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp4_customize02">
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
                                                            <th width="20%">備註</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>卡片2標題</td>
                                                            <td align='left'>暢通的升遷管道</td>
                                                            <td>建議12個字以內</td>
                                                            <td>
                                                                不可空白
                                                                <a type="button" data-toggle="modal" href="#tmp4_customize_title02">觀看範例圖片</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>卡片2圖片</td>
                                                            <td align='left'>寬、高(px)</td>
                                                            <td>350*530</td>
                                                            <td align='left'>
                                                                <ul>
                                                                    <li>接受格式為png、jpg</li>
                                                                    <li>不可空白</li>
                                                                    <li><a type="button" data-toggle="modal" href="#tmp4_customize02">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp4_customize02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-2-1.png" alt="tmp4_customize02" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_title02">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片2標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-2-2.png" alt="tmp4_customize_title02" width="100%" />
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
                                                <InputText title='卡片3標題' notice='(建議字數為12個字以內)' inputName='card3Title' inputState={card3Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片3圖片' notice='(圖檔尺寸大小為 350*250  ，接受格式為png、jpg)' objName='card3Img'  imgUpload={card3ImgUpload} 
                                                    imgFileName={card3Img} parentObj={this} imgW={350} imgH={250} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_04/06-3-1.png" alt="Temp4_Customize3" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp4_customize03">
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
                                                            <th width="20%">備註</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>卡片3標題</td>
                                                            <td align='left'>享有員工專屬折扣</td>
                                                            <td>建議12個字以內</td>
                                                            <td>
                                                                不可空白
                                                                <a type="button" data-toggle="modal" href="#tmp4_customize_title03">觀看範例圖片</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>卡片3圖片</td>
                                                            <td align='left'>寬、高(px)</td>
                                                            <td>350*250</td>
                                                            <td align='left'>
                                                                <ul>
                                                                    <li>接受格式為png、jpg</li>
                                                                    <li>不可空白</li>
                                                                    <li><a type="button" data-toggle="modal" href="#tmp4_customize03">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp4_customize03">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-3-1.png" alt="tmp4_customize03" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_title03">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片3標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-3-2.png" alt="tmp4_customize_title03" width="100%" />
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
                                                <InputText title='卡片4標題' notice='(建議字數為12個字以內)' inputName='card4Title' inputState={card4Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片4圖片' notice='(圖檔尺寸大小為 350*250  ，接受格式為png、jpg)' objName='card4Img'  imgUpload={card4ImgUpload} 
                                                    imgFileName={card4Img} parentObj={this} imgW={350} imgH={250} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_04/06-4-1.png" alt="Temp4_Customize4" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp4_customize04">
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
                                                            <th width="20%">備註</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>卡片4標題</td>
                                                            <td align='left'>每年的健康檢查</td>
                                                            <td>建議12個字以內</td>
                                                            <td>
                                                                不可空白
                                                                <a type="button" data-toggle="modal" href="#tmp4_customize_title04">觀看範例圖片</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>卡片4圖片</td>
                                                            <td align='left'>寬、高(px)</td>
                                                            <td>350*250</td>
                                                            <td align='left'>
                                                                <ul>
                                                                    <li>接受格式為png、jpg</li>
                                                                    <li>不可空白</li>
                                                                    <li><a type="button" data-toggle="modal" href="#tmp4_customize04">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp4_customize04">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-4-1.png" alt="tmp4_customize04" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_title04">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片4標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-4-2.png" alt="tmp4_customize_title04" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="card">
                                <a href="#collapseCard6-5" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6-5">
                                    <div className="card-header text-white bg-primary">卡片 5</div>
                                </a>
                                <div className="card-body collapse collapsed" id="collapseCard6-5">
                                    <div className="form-row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-row row-style-w95">
                                                <InputText title='卡片5標題' notice='(建議字數為12個字以內)' inputName='card5Title' inputState={card5Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片5圖片' notice='(圖檔尺寸大小為 350*250  ，接受格式為png、jpg)' objName='card5Img'  imgUpload={card5ImgUpload} 
                                                    imgFileName={card5Img} parentObj={this} imgW={350} imgH={250} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_04/06-5-1.png" alt="Temp4_Customize5" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp4_customize05">
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
                                                            <th width="20%">備註</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>卡片5標題</td>
                                                            <td align='left'>多元的訓練方式</td>
                                                            <td>建議12個字以內</td>
                                                            <td>
                                                                不可空白
                                                                <a type="button" data-toggle="modal" href="#tmp4_customize_title05">觀看範例圖片</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>卡片5圖片</td>
                                                            <td align='left'>寬、高(px)</td>
                                                            <td>350*250</td>
                                                            <td align='left'>
                                                                <ul>
                                                                    <li>接受格式為png、jpg</li>
                                                                    <li>不可空白</li>
                                                                    <li><a type="button" data-toggle="modal" href="#tmp4_customize05">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp4_customize05">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片5 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-5-1.png" alt="tmp4_customize05" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_title05">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片5標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-5-2.png" alt="tmp4_customize_title05" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
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
                                                <InputText title='卡片6標題' notice='(建議字數為12個字以內)' inputName='card6Title' inputState={card6Title}
                                                    stateObj={this} required={false} checkValue='100' />
                                            </div>
                                            <div className="form-row row-style-w95-pt1">
                                                <ImgUpload title='卡片6圖片' notice='(圖檔尺寸大小為 350*250  ，接受格式為png、jpg)' objName='card6Img'  imgUpload={card6ImgUpload} 
                                                    imgFileName={card6Img} parentObj={this} imgW={350} imgH={250} required={false} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">                                    
                                            <div><img src="/image/sample_04/06-6-1.png" alt="Temp4_Customize6" width="100%" /></div>
                                            <div>
                                                <a type="button" data-toggle="modal" href="#tmp4_customize06">
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
                                                            <th width="20%">備註</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>卡片6標題</td>
                                                            <td align='left'>公平的獎金制度</td>
                                                            <td>建議12個字以內</td>
                                                            <td>
                                                                不可空白
                                                                <a type="button" data-toggle="modal" href="#tmp4_customize_title06">觀看範例圖片</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>卡片6圖片</td>
                                                            <td align='left'>寬、高(px)</td>
                                                            <td>350*250</td>
                                                            <td align='left'>
                                                                <ul>
                                                                    <li>接受格式為png、jpg</li>
                                                                    <li>不可空白</li>
                                                                    <li><a type="button" data-toggle="modal" href="#tmp4_customize06">觀看範例圖片</a></li>
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
                        <div className="modal fade" id="tmp4_customize06">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片6 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-6-1.png" alt="tmp4_customize06" width="100%" />
                                    </div>
                                    <div className="modal-footer">
                                        <p className="small">範例僅供參考</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp4_customize_title06">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">自定區域 - 卡片6標題 範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_04/06-6-2.png" alt="tmp4_customize_title06" width="100%" />
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