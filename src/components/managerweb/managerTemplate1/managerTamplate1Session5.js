import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';

class Session5 extends React.Component{


    constructor(props){
        super(props);
        this.state={
            brandTitle: ' ',
            brandTitleSub1: ' ',
            brandTitleSub1Content: ' ',
            brandTitleSub2: ' ',
            brandTitleSub2Content: ' ',
            brandTitleSub3: ' ',
            brandTitleSub3Content: ' ',
            brandImg : ' ',
            brandImgUpload : ''
        }

    }

    render(){

        const cid = this.props.match.params.cid.trim();

        let brandTitle = this.state.brandTitle;
        let brandTitleSub1 = this.state.brandTitleSub1;
        let brandTitleSub1Content = this.state.brandTitleSub1Content;
        let brandTitleSub2 = this.state.brandTitleSub2;
        let brandTitleSub2Content = this.state.brandTitleSub2Content;
        let brandTitleSub3 = this.state.brandTitleSub3;
        let brandTitleSub3Content = this.state.brandTitleSub3Content;
        let brandImg = this.state.brandImg;
        let actionType = 'create';

        // image
        let brandImgUpload ="";
        if(brandImg === " "){
            brandImgUpload = "/image/logo-1111.png";
        }else{
            brandImgUpload = this.state.brandImg !==' ' ?  this.state.brandImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${brandImg}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard5" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard5">
                <h6 className="m-0 font-weight-bold text-primary">設定區段-品牌介紹</h6>
                </a>
                <div className="collapse show" id="collapseCard5">
                <div className="card-body">
                        <form id='dataForm5'>
                            <InputText title='品牌介紹主標題' notice='(字數限制為13個字以內)' inputName='brandTitle' inputState={brandTitle}
                                           stateObj={this} required={true} />
                            <InputText title='品牌介紹副標題1' notice='(字數限制為10個字以內)' inputName='brandTitleSub1' inputState={brandTitleSub1}
                                           stateObj={this} required={true} />
                            <InputTextArea title='品牌介紹副標題1內文 ' notice='(字數限制為135個字以內)' inputName='brandTitleSub1Content' inputState={brandTitleSub1Content}
                                           rows='3' stateObj={this} required={true} />
                            <InputText title='品牌介紹副標題2' notice='(字數限制為10個字以內)' inputName='brandTitleSub2' inputState={brandTitleSub2}
                                           stateObj={this} required={true} />
                            <InputTextArea title='品牌介紹副標題2內文 ' notice='(字數限制為135個字以內)' inputName='brandTitleSub2Content' inputState={brandTitleSub2Content}
                                           rows='3' stateObj={this} required={true} />
                            <InputText title='品牌介紹副標題3' notice='(字數限制為10個字以內)' inputName='brandTitleSub3' inputState={brandTitleSub3}
                                           stateObj={this} required={true} />
                            <InputTextArea title='品牌介紹副標題3內文 ' notice='(字數限制為135個字以內)' inputName='brandTitleSub3Content' inputState={brandTitleSub3Content}
                                           rows='3' stateObj={this} required={true} />
                            <ImgUpload title='品牌介紹圖片' notice='(圖檔尺寸大小為 640*427 ，接受格式為png、jpg)' objName='brandImg'  imgUpload={brandImgUpload} 
                                           imgFileName={brandImg} parentObj={this} imgW={640} imgH={427} required={true} /> 
                            <hr />
                            <button type='submit' id='action5' value={actionType} className="btn btn-facebook btn-block" ><i className="fas fa-save"></i> 儲存設定</button>
                            
                        </form>
                </div>
                </div>
           </div>
        )

    }


}
export default Session5;