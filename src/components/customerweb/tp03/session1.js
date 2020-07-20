import React from 'react';
import envConfig from '../../../config/env';

class CompanyTitle extends React.Component{

    constructor(props){
        super(props);
        this.state={};
    }

   componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getCompanyList(cid, this.props.themeNum? this.props.themeNum: 'tp05');
    }

    render(){
        const cid = this.props.match.params.cid;
        const { companyData } = this.props.companyReducer;

        let title;
        let title2;
        let title3;
        let companySubTitle1;
        let companySubTitle2;
        let companySubTitle3;
        let companyBackgroundImg1;
        let companyBackgroundImg2;
        let companyBackgroundImg3;
        let companyurl = "https://www.1111.com.tw/corp/" + cid + "/#c4";

        if(companyData && companyData.length > 0){
            companyData.forEach(element => {
                title = element.title;
                title2 = element.title2;
                title3 = element.title3;
                companySubTitle1 = element.companySubTitle1;
                companySubTitle2 = element.companySubTitle2;
                companySubTitle3 = element.companySubTitle3;
                companyBackgroundImg1 = element.companyBackgroundImg1;
                companyBackgroundImg2 = element.companyBackgroundImg2;
                companyBackgroundImg3 = element.companyBackgroundImg3;
            })
        }

        // image
        companyBackgroundImg1 = !companyBackgroundImg1 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg1}`;
        companyBackgroundImg2 = !companyBackgroundImg2 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg2}`;
        companyBackgroundImg3 = !companyBackgroundImg3 ? "/image/logo-1111.png" : `${envConfig.WebAPI}/image/${cid}?fileName=${companyBackgroundImg3}`;

        return (
            
            <div className="hero-slider-area">

                {companyData && companyData.length > 0 &&

                <div id="rev_slider_14_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="classic-shop" data-source="gallery">
                    
                    <div id="rev_slider_14_1" className="rev_slider fullwidthabanner" data-version="5.4.7">
                        <ul>
                            
                            <li data-index="rs-36" data-transition="3dcurtain-horizontal,3dcurtain-vertical,cube-horizontal,turnoff,parallaxtoright,parallaxtotop,parallaxhorizontal,slotfade-horizontal,slidingoverlayleft" data-slotamount="default,default,default,default,default,default,default,default,default,default" data-hideafterloop="0" data-hideslideonmobile="off" data-randomtransition="on" data-easein="default,default,default,default,default,default,default,default,default,default" data-easeout="default,default,default,default,default,default,default,default,default,default" data-masterspeed="default,default,default,default,default,default,default,default,default,default" data-thumb="assets/100x50_slideshop-1.jpg" data-rotate="0,0,0,0,0,0,0,0,0,0" data-saveperformance="off" data-title="Slide">
                                
                                <img src={companyBackgroundImg1} alt="1111人力銀行" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="15" className="rev-slidebg" data-no-retina />
                                
                                <div className="tp-caption" id="slide-36-layer-9" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','middle','top','top']" data-voffset="['246','2','253','293']" data-fontsize="['120','100','90','60']" data-lineheight="['130','90','90','60']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":10,"speed":2000,"sfxcolor":"#b1a276   z","sfx_effect":"blockfromtop","frame":"0","from":"z:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                    <h1 className="text-white font-weight-bold mt-1">{title}</h1>
                                </div>
                                
                                <div className="tp-caption tp-resizeme" id="slide-36-layer-17" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['206','206','206','206']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":10,"speed":660,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                    <h4 className="text-brand font-weight-bold">{companySubTitle1}</h4>
                                </div>
                                
                                <div className="tp-caption Button-Solid-Secondary rev-btn btn-brand" id="slide-37-layer-19" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['412','412','412','402']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":540,"speed":670,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bg:rgb(24,33,65);bc:rgb(24,33,65);"}]' data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[30,30,30,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[30,30,30,30]">
                                    <a target="_blank" href={companyurl} rel="noopener noreferrer" className="text-white">我要應徵</a>
                                </div>
                            </li>
                            
                            <li data-index="rs-37" data-transition="3dcurtain-horizontal,3dcurtain-vertical,cube-horizontal,turnoff,parallaxtoright,parallaxtotop,parallaxhorizontal,slotfade-horizontal,slidingoverlayleft" data-slotamount="default,default,default,default,default,default,default,default,default,default" data-hideafterloop="0" data-hideslideonmobile="off" data-randomtransition="on" data-easein="default,default,default,default,default,default,default,default,default,default" data-easeout="default,default,default,default,default,default,default,default,default,default" data-masterspeed="default,default,default,default,default,default,default,default,default,default" data-thumb="assets/100x50_slideshop-2.jpg" data-rotate="0,0,0,0,0,0,0,0,0,0" data-saveperformance="off" data-title="Slide">
                                
                                <img src={companyBackgroundImg2} alt="1111人力銀行" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="15" className="rev-slidebg" data-no-retina />
                                
                                <div className="tp-caption text-black" id="slide-37-layer-9" data-x="['center','center','center','center']" data-hoffset="['0','0','-1','0']" data-y="['top','top','top','top']" data-voffset="['282','289','283','293']" data-fontsize="['120','100','90','60']" data-lineheight="['80','90','90','60']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                    <h1 className="text-white font-weight-bold mt-1">{title2}</h1>
                                </div>

                                <div className="tp-caption tp-resizeme" id="slide-37-layer-17" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['236','236','226','246']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":10,"speed":660,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                    <h4 className="text-brand font-weight-bold">{companySubTitle2}</h4>
                                </div>

                                <div className="tp-caption Button-Solid-Secondary rev-btn btn-brand" id="slide-37-layer-19" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['412','412','412','402']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":540,"speed":670,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bg:rgb(24,33,65);bc:rgb(24,33,65);"}]' data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[30,30,30,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[30,30,30,30]">
                                    <a target="_blank" href={companyurl} rel="noopener noreferrer" className="text-white">我要應徵</a>
                                </div>
                            </li>
                            
                            <li data-index="rs-38" data-transition="3dcurtain-horizontal,3dcurtain-vertical,cube-horizontal,turnoff,parallaxtoright,parallaxtotop,parallaxhorizontal,slotfade-horizontal,slidingoverlayleft" data-slotamount="default,default,default,default,default,default,default,default,default,default" data-hideafterloop="0" data-hideslideonmobile="off" data-randomtransition="on" data-easein="default,default,default,default,default,default,default,default,default,default" data-easeout="default,default,default,default,default,default,default,default,default,default" data-masterspeed="default,default,default,default,default,default,default,default,default,default" data-thumb="assets/100x50_slideshop-3.jpg" data-rotate="0,0,0,0,0,0,0,0,0,0" data-saveperformance="off" data-title="Slide">
                                
                                <img src={companyBackgroundImg3} alt="1111人力銀行" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="15" className="rev-slidebg" data-no-retina />
                                
                                <div className="tp-caption primary-color-important text-white" id="slide-38-layer-9" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['242','254','263','297']" data-fontsize="['100','100','90','60']" data-lineheight="['90','90','90','60']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":10,"speed":2000,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                    <h1 className="text-white font-weight-bold mt-1">{title3}</h1>
                                </div>

                                <div className="tp-caption tp-resizeme" id="slide-38-layer-17" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['196','206','216','246']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames='[{"delay":10,"speed":660,"frame":"0","from":"y:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]' data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
                                    <h4 className="text-brand font-weight-bold">{companySubTitle3}</h4>
                                </div>

                                <div className="tp-caption Button-Solid-Secondary rev-btn btn-brand" id="slide-38-layer-19" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['372','382','382','402']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames='[{"delay":0,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bg:rgb(24,33,65);bc:rgb(24,33,65);"}]' data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[30,30,30,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[30,30,30,30]">
                                    <a target="_blank" href={companyurl} rel="noopener noreferrer" className="text-white">我要應徵</a>
                                </div>
                            </li>
                        </ul>
                        <div className="tp-bannertimer tp-bottom"></div>
                    </div>
                </div>
                
                }

            </div> 
        )

    }
}

export default CompanyTitle;