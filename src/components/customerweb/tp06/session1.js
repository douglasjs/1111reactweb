import React from 'react';

function CompanyTitle() {

    return (
        
		<section className="vc_row pt-110 pb-60 bg-cover bg-center-top" data-row-bg="./image/tp06/slider-1.jpg">

			<span className="row-bg-loader"></span>

			<div className="container">
				<div className="row">

					<div
						className="lqd-column col-md-6 text-left"
						data-custom-animations="true"
						data-ca-options='{"triggerHandler":"inview","animationTarget":"all-childs","duration":"1200","delay":"120", "startDelay": 200,"easing":"easeOutQuint","direction":"forward","initValues":{"translateY":80,"opacity":0},"animations":{"translateY":0,"opacity":1}}'>

						<h2
							className="h1 pr-md-7 mb-30 text-white"
							data-split-text="true"
							data-split-options='{"type":"lines"}'
							data-fittext="true"
							data-fittext-options='{"compressor": 0.5, "maxFontSize": 54}'>
							安心宣言.生態平衡.達人堅持
						</h2>

						<p className="mb-40 font-size-18 lh-175 text-fade-white-06 pr-md-5">每個品牌都是永豐餘生物科技對人、對環境的永續經營。 </p>
					
					</div>

				</div>
			</div>
		</section>
    )

}

export default CompanyTitle;