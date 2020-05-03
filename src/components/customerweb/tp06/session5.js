import React from 'react';

function CompanyBrand() {

	let vedioURL = "https://www.youtube.com/embed/2_3RMh4j6dA";

    return (
        
        <section id="brand" className="vc_row pt-30">
				<div className="container">
					<div className="row">

						<div className="lqd-column col-md-6 pl-md-6 pr-md-7 text-left">

							<header className="fancy-title mb-15">
								<h3 className="mt-0 mb-2 pr-md-5">每個品牌都是永豐餘生物科技對人、對環境的永續經營。</h3>
								<p className="text-justify">全方位的食材供應，從生產處理保存運送至宅配到府，層層把關，全程安心無污染，產品定期專業檢測。提昇您對於味覺的層次，講求食材的等級，與傳遞純淨飲食的生活態度。每週變化的菜單，提供搭配的烹調食譜，信手拈來，就是一桌美味盛宴。讓家人的健康，安心零負擔、三餐沒煩惱! </p>
							</header>

							<a href="https://www.1111.com.tw/corp/50750609/" target='_blank' rel='noopener noreferrer' className="btn btn-sm semi-round btn-bordered border-thin px-2 font-size-17 btn-solid">
								<span>
									<span className="btn-txt">了解更多</span>
								</span>
							</a>

							<a href="https://www.1111.com.tw/corp/50750609/" target='_blank' rel='noopener noreferrer' className="btn btn-sm semi-round btn-bordered border-thin px-2 font-size-17 btn-default btn-light margin-bottom_25px">
								<span>
									<span className="btn-txt">應徵</span>
								</span>
							</a>

						</div>
						
						<div className="lqd-column col-md-6">
							
							
							<iframe
								title="1111人力銀行影片"
								style={{width:'100%', height:'315', overflow:'visible'}}
								src={vedioURL}
								width="100%"
								height="315px"
								scrolling="no"
								frameBorder="0"
							/>

						</div>
					</div>
				</div>

			</section>

    )

}

export default CompanyBrand;