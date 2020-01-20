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
            customizeEnable : ' ',
            customizeName : ' ',
            customizeTitle : ' ',
            customizeSubTitle : ' ',
            card1Title : ' ',
            card1Content : ' ',
            card1Img : ' ',
            card1ImgUpload : '',
            card2Title : ' ',
            card2Content : ' ',
            card2Img : ' ',
            card2ImgUpload : '',
            card3Title : ' ',
            card3Content : ' ',
            card3Img : ' ',
            card3ImgUpload : '',
            card4Title : ' ',
            card4Content : ' ',
            card4Img : ' ',
            card4ImgUpload : '',
        }

    }


    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;


        const submitObj={
            ono: cid,
            themeNum : event.target.themeNum6.value,
            customizeEnable:  event.target.customizeEnable.checked,
            customizeName:  event.target.customizeName.value,
            customizeTitle:  event.target.customizeTitle.value,
            customizeSubTitle:  event.target.customizeSubTitle.value,

            card1Title:  event.target.card1Title.value,
            card1Content:  event.target.card1Content.value,
            card1Img:  event.target.card1Img.value,
            card1ImgUpload : this.state.card1ImgUpload ? this.state.card1ImgUpload.value : null,

            card2Title:  event.target.card2Title.value,
            card2Content:  event.target.card2Content.value,
            card2Img:  event.target.card2Img.value,
            card2ImgUpload : this.state.card2ImgUpload ? this.state.card2ImgUpload.value : null,

            card3Title:  event.target.card3Title.value,
            card3Content:  event.target.card3Content.value,
            card3Img:  event.target.card3Img.value,
            card3ImgUpload : this.state.card3ImgUpload ? this.state.card3ImgUpload.value : null,

            card4Title:  event.target.card4Title.value,
            card4Content:  event.target.card4Content.value,
            card4Img:  event.target.card4Img.value,
            card4ImgUpload : this.state.card4ImgUpload ? this.state.card4ImgUpload.value : null,
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

        const sessionName=  "自訂標籤";
        let themeNum = 'tp01';
        let actionType = 'create';

        if(customizeData && customizeData.length > 0){
            actionType = 'modify';
            customizeData.forEach(element => {
                customizeEnable = customizeEnable !==" " ? customizeEnable : element.customizeEnable;
                customizeName = customizeName !==" " ? customizeName : element.customizeName;
                customizeTitle = customizeTitle !==" " ? customizeTitle : element.customizeTitle;
                customizeSubTitle = customizeSubTitle !==" " ? customizeSubTitle : element.customizeSubTitle;

                card1Title = card1Title !==" " ? card1Title : element.card1Title;
                card1Content = card1Content !==" " ? card1Content : element.card1Content;
                card1Img = card1Img !==" " ? card1Img : element.card1Img;

                card2Title = card2Title !==" " ? card2Title : element.card2Title;
                card2Content = card2Content !==" " ? card2Content : element.card2Content;
                card2Img = card2Img !==" " ? card2Img : element.card2Img;

                card3Title = card3Title !==" " ? card3Title : element.card3Title;
                card3Content = card3Content !==" " ? card3Content : element.card3Content;
                card3Img = card3Img !==" " ? card3Img : element.card3Img;

                card4Title = card4Title !==" " ? card4Title : element.card4Title;
                card4Content = card4Content !==" " ? card4Content : element.card4Content;
                card4Img = card4Img !==" " ? card4Img : element.card4Img;
            })
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
                <a href="#collapseCard6" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard6">
                <h6 className="m-0 font-weight-bold text-primary">設定區段-{sessionName}</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard6">
                <div className="card-body">
                    <form id='dataForm6' className={customizeIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                        <Msg type ='LOADING'  value = {customizeIsLoading} text='Processing ' /> 
                        <Msg type ='ERROR' value = {customizeErr} text= 'Opps! Error : ' />
                        <input type="hidden" id="themeNum6" value={themeNum} />
 
                        <InputSwitch sessionName={sessionName} inputName='customizeEnable' inputState={customizeEnable} stateObj={this} />

                        <div className="form-row">
                            <label> </label>
                        </div>
                        
                        <InputText title='自訂選單名稱' notice='(即為在主選單上顯示的名稱，字數限制為4個字以內)' inputName='customizeName' inputState={customizeName}
                                           stateObj={this} required={false} />
                        <InputText title='自訂區域主標題' notice='(字數限制為10個字以內)' inputName='customizeTitle' inputState={customizeTitle}
                                           stateObj={this} required={false} />
                        <InputTextArea title='自訂區域副標題' notice='(字數限制為40個字以內)' inputName='customizeSubTitle' inputState={customizeSubTitle}
                                           rows='3' stateObj={this} required={false} />

                        <div className="form-row">
                            <label> 卡片一 </label>
                        </div>

                        <div>
                            <div className="card">
                                <div className="card-header text-white bg-primary">卡片 1</div>
                                <div className="card-body">
                                    <InputText title='卡片1標題' notice='(字數限制為8個字以內)' inputName='card1Title' inputState={card1Title}
                                           stateObj={this} required={false} />
                                    <InputTextArea title='卡片1內文' notice='(字數限制為20個字以內)' inputName='card1Content' inputState={card1Content}
                                           rows='2' stateObj={this} required={false} />
                                    <ImgUpload title='卡片1圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card1Img'  imgUpload={card1ImgUpload} 
                                           imgFileName={card1Img} parentObj={this} imgW={350} imgH={350} required={false} /> 
                                </div>
                            </div>
                        </div>


                        <div className="form-row">
                            <label> 卡片二 </label>
                        </div>

                        <div>
                            <div className="card">
                                <div className="card-header text-white bg-primary">卡片 2</div>
                                <div className="card-body">
                                    <InputText title='卡片2標題' notice='(字數限制為8個字以內)' inputName='card2Title' inputState={card2Title}
                                           stateObj={this} required={false} />
                                    <InputTextArea title='卡片2內文' notice='(字數限制為20個字以內)' inputName='card2Content' inputState={card2Content}
                                           rows='2' stateObj={this} required={false} />
                                    <ImgUpload title='卡片2圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card2Img'  imgUpload={card2ImgUpload} 
                                           imgFileName={card2Img} parentObj={this} imgW={350} imgH={350} required={false} /> 
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label> 卡片三 </label>
                        </div>

                        <div>
                            <div className="card">
                                <div className="card-header text-white bg-primary">卡片 3</div>
                                <div className="card-body">
                                    <InputText title='卡片3標題' notice='(字數限制為8個字以內)' inputName='card3Title' inputState={card3Title}
                                           stateObj={this} required={false} />
                                    <InputTextArea title='卡片3內文' notice='(字數限制為20個字以內)' inputName='card3Content' inputState={card3Content}
                                           rows='2' stateObj={this} required={false} />
                                    <ImgUpload title='卡片3圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card3Img'  imgUpload={card3ImgUpload} 
                                           imgFileName={card3Img} parentObj={this} imgW={350} imgH={350} required={false} /> 
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <label> 卡片四 </label>
                        </div>

                        <div>
                            <div className="card">
                                <div className="card-header text-white bg-primary">卡片 4</div>
                                <div className="card-body">
                                    <InputText title='卡片4標題' notice='(字數限制為8個字以內)' inputName='card4Title' inputState={card4Title}
                                           stateObj={this} required={false} />
                                    <InputTextArea title='卡片4內文' notice='(字數限制為20個字以內)' inputName='card4Content' inputState={card4Content}
                                           rows='2' stateObj={this} required={false} />
                                    <ImgUpload title='卡片4圖片' notice='(圖檔尺寸大小為 350*350  ，接受格式為png、jpg)' objName='card4Img'  imgUpload={card4ImgUpload} 
                                           imgFileName={card4Img} parentObj={this} imgW={350} imgH={350} required={false} /> 
                                </div>
                            </div>
                        </div>

                        <hr />
                        <button type='submit' id='action6' value={actionType} className="btn btn-facebook btn-block" ><i className="fas fa-save"></i> 儲存設定</button>
                    </form>
                </div>
                </div>
           </div>
        )

    }

}
export default Session6;