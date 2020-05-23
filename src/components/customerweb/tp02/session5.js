import React from 'react';

class CompanyBrand extends React.Component {

    constructor(props){
        super(props);
        this.state={};
    }

    componentDidMount(){
        const cid = this.props.match.params.cid;
        this.props.getbrandList(cid, this.props.themeNum);
    }

    render(){
        const { brandData } = this.props.brandReducer;
        const { data } = this.props.datatableReducer;
    
		let brandTitleSub1;
		let brandTitleSub1Content;
		let brandTitleSub2;
        let brandTitleSub2Content;
        let brandTitleSub3;
		let brandTitleSub3Content;
		let brandURL1;
        let brandURL2;
        let brandURL3;
        let styleType;

        if(brandData && brandData.length > 0){
            brandData.forEach(element => {
				brandTitleSub1 = element.brandTitleSub1;
				brandTitleSub1Content = element.brandTitleSub1Content;
				brandTitleSub2 = element.brandTitleSub2;
                brandTitleSub2Content = element.brandTitleSub2Content;
                brandTitleSub3 = element.brandTitleSub3;
				brandTitleSub3Content = element.brandTitleSub3Content;
				brandURL1 = element.brandURL1;
                brandURL2 = element.brandURL2;
                brandURL3 = element.brandURL3;
            })
        }

        if(data && data.length > 0){
            styleType = data[0].styleType;
        }

        let imgURL1 = "image/tp02/icons/icon-1_"+ styleType + ".png";
        let imgURL2 = "image/tp02/icons/icon-2_"+ styleType + ".png";
        let imgURL3 = "image/tp02/icons/icon-3_"+ styleType + ".png";

        return (
            <section id="brand" className="feature-section centred">
                
                {brandData && brandData.length > 0 &&

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 feature-block">
                            <div className="feature-block-one">
                                <div className="inner-box">
                                    <figure className="icon-box"><img src={imgURL1} alt="1111人力銀行-品牌介紹" /></figure>
                                    <h2><a href={brandURL1}>{brandTitleSub1}</a></h2>
                                    <div className="text">{brandTitleSub1Content}</div>
                                </div>
                            </div>
                            <div className="btn-box"><a className="btn-style-three" target="_blank" rel="noopener noreferrer" href={brandURL1}>了解更多</a></div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 feature-block">
                            <div className="feature-block-one">
                                <div className="inner-box">
                                    <figure className="icon-box"><img src={imgURL2} alt="1111人力銀行-品牌介紹" /></figure>
                                    <h2><a href={brandURL2}>{brandTitleSub2}</a></h2>
                                    <div className="text">{brandTitleSub2Content}</div>
                                </div>
                            </div>
                            <div className="btn-box"><a className="btn-style-three" target="_blank" rel="noopener noreferrer" href={brandURL2}>了解更多</a></div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 feature-block">
                            <div className="feature-block-one">
                                <div className="inner-box">
                                    <figure className="icon-box"><img src={imgURL3} alt="1111人力銀行-品牌介紹" /></figure>
                                    <h2><a href={brandURL3}>{brandTitleSub3}</a></h2>
                                    <div className="text">{brandTitleSub3Content}</div>
                                </div>
                            </div>
                            <div className="btn-box"><a className="btn-style-three" target="_blank" rel="noopener noreferrer" href={brandURL3}>了解更多</a></div>
                        </div>
                    </div>
                </div>
                
                }
                
            </section>
        )

    }
}

export default CompanyBrand;