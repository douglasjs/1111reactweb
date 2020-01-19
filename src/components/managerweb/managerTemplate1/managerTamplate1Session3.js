import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';


class Session3 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            benefitContent: ' ',
            benefitImg : ' ',
            benefitImgUpload : ''
        }

    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;
        
        if(event.target.action3.value === 'create'){
            this.props.createbenefit({
                ono: cid,
                themeNum : event.target.themeNum3.value,
                benefitContent:  this.state.benefitContent,
                benefitImg: event.target.benefitImg.value,
                benefitImgUpload: this.state.benefitImgUpload ? this.state.benefitImgUpload.value : null
            });
        }
        if(event.target.action3.value === 'modify'){
            this.props.updatebenefit({
                ono: cid,
                themeNum : event.target.themeNum3.value,
                benefitContent: this.state.benefitContent,
                benefitImg: event.target.benefitImg.value,
                benefitImgUpload: this.state.benefitImgUpload ? this.state.benefitImgUpload.value : null
            });
        }
    }

    handleChange = (event, data) => {
        /*
        ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
        } 
        */
        //let newValue = event.target.data;
        this.setState({ ...this.state, benefitContent : data});
    };

    render(){
        const { benefitData, benefitErr, benefitIsLoading} = this.props.benefitReducer;
        const cid = this.props.match.params.cid.trim();

        let benefitContent = this.state.benefitContent;
        let benefitImg = this.state.benefitImg;

        let themeNum = 'tp01';
        let actionType = 'create';

        if(benefitData && benefitData.length > 0){
            actionType = 'modify';
            benefitData.forEach(element => {
                benefitContent = benefitContent !==" " ? benefitContent : element.benefitContent;
                benefitImg = benefitImg !==" " ? benefitImg : element.benefitImg;
            })
        }

        // image
        let benefitImgUpload ="";
        if(benefitImg === " "){
            benefitImgUpload = "/image/logo-1111.png";
        }else{
            benefitImgUpload = this.state.benefitImg !==' ' ?  this.state.benefitImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard3" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3">
                <h6 className="m-0 font-weight-bold text-primary">設定區段-員工福利</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard3">
                    <div className="card-body">
                        <form id='dataForm3' className={benefitIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>
                            <Msg type ='LOADING'  value = {benefitIsLoading} text='Processing ' /> 
                            <Msg type ='ERROR' value = {benefitErr} text= 'Opps! Error : ' />
                            <input type="hidden" id="themeNum3" value={themeNum} />
                            <ImgUpload title='員工福利圖片' notice='(圖檔尺寸大小為 500*354 ，接受格式為png、jpg)' objName='benefitImg'  imgUpload={benefitImgUpload} imgFileName={benefitImg} 
                                            parentObj={this}  imgW={500} imgH={354} required={false}/> 
                            <div className="form-row">
                                <label><span className='text-danger'>*</span>員工福利內容 <em className='text-primary'>( 字數限制為350個字以內 )</em> </label>
                            </div>
                            <div>
                                <CKEditor
                                    id='benefitContent'
                                    className='form-control'
                                    editor={ ClassicEditor }
                                    data={benefitContent}
                                    onInit={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={( event, editor ) => {
                                        this.handleChange(event, editor.getData());
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                            </div>
                            <hr />
                            <button type='submit' id='action3' value={actionType} className="btn btn-facebook btn-block" ><i className="fas fa-save"></i> 儲存設定</button>
                        </form>
                  
                    </div>
                </div>
           </div>
        )

    }
   

}
export default Session3;