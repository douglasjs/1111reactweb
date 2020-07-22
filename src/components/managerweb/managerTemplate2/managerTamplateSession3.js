import React from 'react';
import InputText from '../../sharecomponents/inputText';
import InputTextArea from '../../sharecomponents/inputTextArea';
import ImgUpload from '../../sharecomponents/imgUpload';
import envConfig from '../../../config/env';
import Msg from '../msg';


class Session3 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            benefitImg : ' ',
            benefitImgUpload : '',
            benefitSubTitle1 : '',
            benefitSubTitle2 : '',
            benefitSubTitle3 : '',
            benefitSubContent1 : '',
            benefitSubContent2 : '',
            benefitSubContent3 : ''
        }

    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const benObj={
            ono : cid,
            themeNum : event.target.themeNum3.value,
            benefitContent : '',
            benefitImg : event.target.benefitImg.value,
            benefitImg2 : '',
            benefitImgUpload : this.state.benefitImgUpload ? this.state.benefitImgUpload.value : null,
            benefitImg2Upload : null,
            benefitSubTitle1 : event.target.benefitSubTitle1.value,
            benefitSubTitle2 : event.target.benefitSubTitle2.value,
            benefitSubTitle3 : event.target.benefitSubTitle3.value,
            benefitSubTitle4 : '',
            benefitSubTitle5 : '',
            benefitSubTitle6 : '',
            benefitSubContent1 : event.target.benefitSubContent1.value,
            benefitSubContent2 : event.target.benefitSubContent2.value,
            benefitSubContent3 : event.target.benefitSubContent3.value,
            benefitSubContent4 : '',
            benefitSubContent5 : '',
            benefitSubContent6 :'',
            benefitSubImg1 : '',
            benefitSubImg2 : '',
            benefitSubImg3 : '',
            benefitSubImg4 : '',
            benefitSubImg5 : '',
            benefitSubImg6 : '',
            benefitSubImg1Upload : null,
            benefitSubImg2Upload : null,
            benefitSubImg3Upload : null,
            benefitSubImg4Upload : null,
            benefitSubImg5Upload : null,
            benefitSubImg6Upload : null
        }
        
        if(event.target.action3.value === 'create'){
            this.props.createbenefit(benObj);
        }
        if(event.target.action3.value === 'modify'){
            this.props.updatebenefit(benObj);
        }
    }

    handleChange = (event, data) => {
        this.setState({ ...this.state, benefitContent : data});
    };

    render(){
        const { benefitData, benefitErr, benefitIsLoading} = this.props.benefitReducer;
        const cid = this.props.match.params.cid.trim();

        let benefitSubTitle1 = this.state.benefitSubTitle1;
        let benefitSubTitle2 = this.state.benefitSubTitle2;
        let benefitSubTitle3 = this.state.benefitSubTitle3;
        let benefitSubContent1 = this.state.benefitSubContent1;
        let benefitSubContent2 = this.state.benefitSubContent2;
        let benefitSubContent3 = this.state.benefitSubContent3;
        let benefitImg = this.state.benefitImg;

        let themeNum = this.props.themeNum;
        let actionType = 'create';

        if(benefitData && benefitData.length > 0){
            actionType = 'modify';
            benefitData.forEach(element => {
                benefitSubTitle1 = benefitSubTitle1 !== "" ? benefitSubTitle1 : element.benefitSubTitle1;
                benefitSubTitle2 = benefitSubTitle2 !== "" ? benefitSubTitle2 : element.benefitSubTitle2;
                benefitSubTitle3 = benefitSubTitle3 !== "" ? benefitSubTitle3 : element.benefitSubTitle3;
                benefitSubContent1 = benefitSubContent1 !== "" ? benefitSubContent1 : element.benefitSubContent1;
                benefitSubContent2 = benefitSubContent2 !== "" ? benefitSubContent2 : element.benefitSubContent2;
                benefitSubContent3 = benefitSubContent3 !== "" ? benefitSubContent3 : element.benefitSubContent3;
                benefitImg = benefitImg !== " " ? benefitImg : element.benefitImg;
            })
        }

        // image
        let benefitImgUpload = "";
        if(benefitImg === " "){
            benefitImgUpload = "/image/logo-1111.png";
        }else{
            benefitImgUpload = this.state.benefitImg !== ' ' ?  this.state.benefitImgUpload.file : `${envConfig.WebAPI}/image/${cid}?fileName=${benefitImg}`;
        }

        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard3" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard3">
                <h6 className="m-0 font-weight-bold">設定區段-員工福利</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard3">
                    <div className="card-body">
                        <Msg type ='LOADING'  value = {benefitIsLoading} text='Processing ' /> 
                         <Msg type ='ERROR' value = {benefitErr} text= 'Opps! Error : ' />
                         <div className={benefitIsLoading ? 'd-none' : 'form-row'}>
                            <div className="col-md-6 mb-3">
                                <form id='dataForm3' className={benefitIsLoading ? 'd-none' : ''}  onSubmit={this.handleSubmit}>

                                    <input type="hidden" id="themeNum3" value={themeNum} />
                                    <div align="left"><label><span className='text-danger'>*</span><em className='text-primary'>為必填欄位</em> </label></div>
                                    <div className="form-row">
                                        <InputText title='小標題1' notice='(建議字數為10個字以內)' inputName='benefitSubTitle1' inputState={benefitSubTitle1}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='小標題1內容' notice='(建議字數為18個字以內)' inputName='benefitSubContent1' inputState={benefitSubContent1}
                                            rows='3' stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row">
                                        <InputText title='小標題2' notice='(建議字數為10個字以內)' inputName='benefitSubTitle2' inputState={benefitSubTitle2}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='小標題2內容' notice='(建議字數為18個字以內)' inputName='benefitSubContent2' inputState={benefitSubContent2}
                                            rows='3' stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row">
                                        <InputText title='小標題3' notice='(建議字數為10個字以內)' inputName='benefitSubTitle3' inputState={benefitSubTitle3}
                                            stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <InputTextArea title='小標題3內容' notice='(建議字數為18個字以內)' inputName='benefitSubContent3' inputState={benefitSubContent3}
                                            rows='3' stateObj={this} required={true} checkValue='100' />
                                    </div>
                                    <div className="form-row row-style-w95-pt1">
                                        <ImgUpload title='員工福利圖片' notice='(圖檔尺寸大小為 665*630 ，接受格式為png、jpg)' objName='benefitImg'  imgUpload={benefitImgUpload} imgFileName={benefitImg} 
                                            parentObj={this}  imgW={665} imgH={630} required={true}/> 
                                    </div>

                                    <hr />
                                    <div align="center"><button type='submit' id='action3' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                    
                                </form>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div><img src="/image/sample_02/03.png" alt="Temp2_Benefit" width="100%"/></div>
                                <div>
                                    <a type="button" data-toggle="modal" href="#tmp2_benefit">
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
                                                <td>員工福利圖片</td>
                                                <td align='left'>寬、高(px)</td>
                                                <td>665*630</td>
                                                <td align='left'>
                                                    <ul>
                                                        <li>接受格式為png、jpg</li>
                                                        <li>無輪播</li>
                                                        <li>不可空白</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題1</td>
                                                <td align='left'>獎 金 類</td>
                                                <td>建議10個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題1內容</td>
                                                <td align='left'>全勤獎金、年節獎金、激勵獎金、績效獎金</td>
                                                <td>建議18個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題2</td>
                                                <td align='left'>餐 飲 類</td>
                                                <td>建議10個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題2內容</td>
                                                <td align='left'>伙食津貼</td>
                                                <td>建議18個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題3</td>
                                                <td align='left'>娛 樂 類</td>
                                                <td>建議10個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                            <tr>
                                                <td>員工福利小標題3內容</td>
                                                <td align='left'>國內旅遊、員工定期聚餐、春酒、家庭日</td>
                                                <td>建議18個字以內</td>
                                                <td>不可空白</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="tmp2_benefit">
                            <div className="modal-dialog sample-img-width">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <p className="modal-title">員工福利範例</p>
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body text-center">
                                        <img src="/image/sample_02/03.png" alt="tmp2_benefit" width="100%" />
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
export default Session3;