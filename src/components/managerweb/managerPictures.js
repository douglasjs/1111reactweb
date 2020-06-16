import React from 'react';

function ManagerPictures(){
    return(
        <div className="container-fluid pictures_pb">

            <a href="#collapseCard1" className="d-block card-header py-3 text-white bg-primary" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard1">
                <h1 className="m-0 font-weight-bold">參考圖庫</h1>
            </a>

            <div className="form-row pictures_pt">
                <h3 className="font-weight-bold">以下圖片僅授權使用於1111人力銀行模板中繼頁系統</h3>
            </div>

            <div className="form-row">
                <div className="col-12 pictures_pt">
                    <h1 className="font-weight-bold text-black">1920 * 1000</h1>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/01.png" alt="pictures_01" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_01">觀看放大圖例</a><br />
                    <a download href="/image/pictures/01.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/02.png" alt="pictures_02" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_02">觀看放大圖例</a><br />
                    <a download href="/image/pictures/02.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/03.png" alt="pictures_03" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_03">觀看放大圖例</a><br />
                    <a download href="/image/pictures/03.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/04.png" alt="pictures_04" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_04">觀看放大圖例</a><br />
                    <a download href="/image/pictures/04.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/05.png" alt="pictures_05" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_05">觀看放大圖例</a><br />
                    <a download href="/image/pictures/05.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/06.png" alt="pictures_06" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_06">觀看放大圖例</a><br />
                    <a download href="/image/pictures/06.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_01">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片01</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/01.png">下載圖片</a>
                            <img src="/image/pictures/01.png" alt="pictures_01" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_02">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片02</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/02.png">下載圖片</a>
                            <img src="/image/pictures/02.png" alt="pictures_02" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_03">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片03</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/03.png">下載圖片</a>
                            <img src="/image/pictures/03.png" alt="pictures_03" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_04">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片04</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/04.png">下載圖片</a>
                            <img src="/image/pictures/04.png" alt="pictures_04" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_05">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片05</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/05.png">下載圖片</a>
                            <img src="/image/pictures/05.png" alt="pictures_05" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_06">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片06</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/06.png">下載圖片</a>
                            <img src="/image/pictures/06.png" alt="pictures_06" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/07.png" alt="pictures_07" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_07">觀看放大圖例</a><br />
                    <a download href="/image/pictures/07.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/08.png" alt="pictures_08" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_08">觀看放大圖例</a><br />
                    <a download href="/image/pictures/08.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/09.png" alt="pictures_09" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_09">觀看放大圖例</a><br />
                    <a download href="/image/pictures/09.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/10.png" alt="pictures_10" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_10">觀看放大圖例</a><br />
                    <a download href="/image/pictures/10.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/11.png" alt="pictures_11" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_11">觀看放大圖例</a><br />
                    <a download href="/image/pictures/11.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/12.png" alt="pictures_12" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_12">觀看放大圖例</a><br />
                    <a download href="/image/pictures/12.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_07">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片07</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/07.png">下載圖片</a>
                            <img src="/image/pictures/07.png" alt="pictures_07" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_08">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片08</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/08.png">下載圖片</a>
                            <img src="/image/pictures/08.png" alt="pictures_08" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_09">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片09</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/09.png">下載圖片</a>
                            <img src="/image/pictures/09.png" alt="pictures_09" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_10">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片10</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/10.png">下載圖片</a>
                            <img src="/image/pictures/10.png" alt="pictures_10" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_11">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片11</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/11.png">下載圖片</a>
                            <img src="/image/pictures/11.png" alt="pictures_11" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_12">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片12</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/12.png">下載圖片</a>
                            <img src="/image/pictures/12.png" alt="pictures_12" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/13.png" alt="pictures_13" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_13">觀看放大圖例</a><br />
                    <a download href="/image/pictures/13.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/14.png" alt="pictures_14" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_14">觀看放大圖例</a><br />
                    <a download href="/image/pictures/14.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/15.png" alt="pictures_15" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_15">觀看放大圖例</a><br />
                    <a download href="/image/pictures/15.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/16.png" alt="pictures_16" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_16">觀看放大圖例</a><br />
                    <a download href="/image/pictures/16.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/17.png" alt="pictures_17" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_17">觀看放大圖例</a><br />
                    <a download href="/image/pictures/17.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/18.png" alt="pictures_18" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_18">觀看放大圖例</a><br />
                    <a download href="/image/pictures/18.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_13">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片13</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/13.png">下載圖片</a>
                            <img src="/image/pictures/13.png" alt="pictures_13" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_14">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片14</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/14.png">下載圖片</a>
                            <img src="/image/pictures/14.png" alt="pictures_14" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_15">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片15</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/15.png">下載圖片</a>
                            <img src="/image/pictures/15.png" alt="pictures_15" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_16">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片16</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/16.png">下載圖片</a>
                            <img src="/image/pictures/16.png" alt="pictures_16" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_17">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片17</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/17.png">下載圖片</a>
                            <img src="/image/pictures/17.png" alt="pictures_17" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_18">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片18</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/18.png">下載圖片</a>
                            <img src="/image/pictures/18.png" alt="pictures_18" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/19.png" alt="pictures_19" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_19">觀看放大圖例</a><br />
                    <a download href="/image/pictures/19.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/20.png" alt="pictures_20" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_20">觀看放大圖例</a><br />
                    <a download href="/image/pictures/20.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/21.png" alt="pictures_21" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_21">觀看放大圖例</a><br />
                    <a download href="/image/pictures/21.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/22.png" alt="pictures_22" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_22">觀看放大圖例</a><br />
                    <a download href="/image/pictures/22.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/23.png" alt="pictures_23" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_23">觀看放大圖例</a><br />
                    <a download href="/image/pictures/23.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/24.png" alt="pictures_24" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_24">觀看放大圖例</a><br />
                    <a download href="/image/pictures/24.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_19">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片19</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/19.png">下載圖片</a>
                            <img src="/image/pictures/19.png" alt="pictures_19" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_20">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片20</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/20.png">下載圖片</a>
                            <img src="/image/pictures/20.png" alt="pictures_20" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_21">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片21</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/21.png">下載圖片</a>
                            <img src="/image/pictures/21.png" alt="pictures_21" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_22">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片22</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/22.png">下載圖片</a>
                            <img src="/image/pictures/22.png" alt="pictures_22" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_23">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片23</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/23.png">下載圖片</a>
                            <img src="/image/pictures/23.png" alt="pictures_23" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_24">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片24</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/24.png">下載圖片</a>
                            <img src="/image/pictures/24.png" alt="pictures_24" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/25.png" alt="pictures_25" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_25">觀看放大圖例</a><br />
                    <a download href="/image/pictures/25.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/26.png" alt="pictures_26" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_26">觀看放大圖例</a><br />
                    <a download href="/image/pictures/26.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/27.png" alt="pictures_27" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_27">觀看放大圖例</a><br />
                    <a download href="/image/pictures/27.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/28.png" alt="pictures_28" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_28">觀看放大圖例</a><br />
                    <a download href="/image/pictures/28.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/29.png" alt="pictures_29" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_29">觀看放大圖例</a><br />
                    <a download href="/image/pictures/29.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/30.png" alt="pictures_30" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_30">觀看放大圖例</a><br />
                    <a download href="/image/pictures/30.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_25">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片25</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/25.png">下載圖片</a>
                            <img src="/image/pictures/25.png" alt="pictures_25" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_26">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片26</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/26.png">下載圖片</a>
                            <img src="/image/pictures/26.png" alt="pictures_26" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_27">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片27</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/27.png">下載圖片</a>
                            <img src="/image/pictures/27.png" alt="pictures_27" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_28">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片28</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/28.png">下載圖片</a>
                            <img src="/image/pictures/28.png" alt="pictures_28" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_29">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片29</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/29.png">下載圖片</a>
                            <img src="/image/pictures/29.png" alt="pictures_29" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_30">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片30</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/30.png">下載圖片</a>
                            <img src="/image/pictures/30.png" alt="pictures_30" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/31.png" alt="pictures_31" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_31">觀看放大圖例</a><br />
                    <a download href="/image/pictures/31.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/32.png" alt="pictures_32" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_32">觀看放大圖例</a><br />
                    <a download href="/image/pictures/32.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/33.png" alt="pictures_33" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_33">觀看放大圖例</a><br />
                    <a download href="/image/pictures/33.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/34.png" alt="pictures_34" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_34">觀看放大圖例</a><br />
                    <a download href="/image/pictures/34.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/35.png" alt="pictures_35" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_35">觀看放大圖例</a><br />
                    <a download href="/image/pictures/35.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/36.png" alt="pictures_36" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_36">觀看放大圖例</a><br />
                    <a download href="/image/pictures/36.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_31">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片31</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/31.png">下載圖片</a>
                            <img src="/image/pictures/31.png" alt="pictures_31" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_32">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片32</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/32.png">下載圖片</a>
                            <img src="/image/pictures/32.png" alt="pictures_32" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_33">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片33</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/33.png">下載圖片</a>
                            <img src="/image/pictures/33.png" alt="pictures_33" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_34">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片34</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/34.png">下載圖片</a>
                            <img src="/image/pictures/34.png" alt="pictures_34" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_35">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片35</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/35.png">下載圖片</a>
                            <img src="/image/pictures/35.png" alt="pictures_35" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_36">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片36</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/36.png">下載圖片</a>
                            <img src="/image/pictures/36.png" alt="pictures_36" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/37.png" alt="pictures_37" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_37">觀看放大圖例</a><br />
                    <a download href="/image/pictures/37.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/38.png" alt="pictures_38" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_38">觀看放大圖例</a><br />
                    <a download href="/image/pictures/38.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/39.png" alt="pictures_39" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_39">觀看放大圖例</a><br />
                    <a download href="/image/pictures/39.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/40.png" alt="pictures_40" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_40">觀看放大圖例</a><br />
                    <a download href="/image/pictures/40.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/41.png" alt="pictures_41" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_41">觀看放大圖例</a><br />
                    <a download href="/image/pictures/41.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/42.png" alt="pictures_42" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_42">觀看放大圖例</a><br />
                    <a download href="/image/pictures/42.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_37">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片37</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/37.png">下載圖片</a>
                            <img src="/image/pictures/37.png" alt="pictures_37" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_38">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片38</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/38.png">下載圖片</a>
                            <img src="/image/pictures/38.png" alt="pictures_38" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_39">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片39</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/39.png">下載圖片</a>
                            <img src="/image/pictures/39.png" alt="pictures_39" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_40">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片40</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/40.png">下載圖片</a>
                            <img src="/image/pictures/40.png" alt="pictures_40" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_41">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片41</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/41.png">下載圖片</a>
                            <img src="/image/pictures/41.png" alt="pictures_41" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_42">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片42</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/42.png">下載圖片</a>
                            <img src="/image/pictures/42.png" alt="pictures_42" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/43.png" alt="pictures_43" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_43">觀看放大圖例</a><br />
                    <a download href="/image/pictures/43.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/44.png" alt="pictures_44" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_44">觀看放大圖例</a><br />
                    <a download href="/image/pictures/44.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_43">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片43</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/43.png">下載圖片</a>
                            <img src="/image/pictures/43.png" alt="pictures_43" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_44">
                <div className="modal-dialog sample-img-width">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片44</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/44.png">下載圖片</a>
                            <img src="/image/pictures/44.png" alt="pictures_44" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row">
                <div className="col-12 pictures_pt">
                    <h1 className="font-weight-bold text-black">850 * 590</h1>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/850X590_01.png" alt="pictures_850X590_01" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_850X590_01">觀看放大圖例</a><br />
                    <a download href="/image/pictures/850X590_01.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/850X590_02.png" alt="pictures_850X590_02" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_850X590_02">觀看放大圖例</a><br />
                    <a download href="/image/pictures/850X590_02.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/850X590_03.png" alt="pictures_850X590_03" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_850X590_03">觀看放大圖例</a><br />
                    <a download href="/image/pictures/850X590_03.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/850X590_04.png" alt="pictures_850X590_04" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_850X590_04">觀看放大圖例</a><br />
                    <a download href="/image/pictures/850X590_04.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/850X590_05.png" alt="pictures_850X590_05" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_850X590_05">觀看放大圖例</a><br />
                    <a download href="/image/pictures/850X590_05.png">下載圖片</a>
                </div>
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/850X590_06.png" alt="pictures_850X590_06" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_850X590_06">觀看放大圖例</a><br />
                    <a download href="/image/pictures/850X590_06.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_850X590_01">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片01</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/850X590_01.png">下載圖片</a>
                            <img src="/image/pictures/850X590_01.png" alt="pictures_850X590_01" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_850X590_02">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片02</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/850X590_02.png">下載圖片</a>
                            <img src="/image/pictures/850X590_02.png" alt="pictures_850X590_02" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_850X590_03">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片03</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/850X590_03.png">下載圖片</a>
                            <img src="/image/pictures/850X590_03.png" alt="pictures_850X590_03" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_850X590_04">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片04</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/850X590_04.png">下載圖片</a>
                            <img src="/image/pictures/850X590_04.png" alt="pictures_850X590_04" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_850X590_05">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片05</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/850X590_05.png">下載圖片</a>
                            <img src="/image/pictures/850X590_05.png" alt="pictures_850X590_05" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="pictures_850X590_06">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片06</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/850X590_06.png">下載圖片</a>
                            <img src="/image/pictures/850X590_06.png" alt="pictures_850X590_06" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="form-row pictures_pt">
                <div className="col-md-2 mb-6">
                    <img src="/image/pictures/850X590_07.png" alt="pictures_850X590_07" width="90%"/><br />
                    <a type="button" data-toggle="modal" href="#pictures_850X590_07">觀看放大圖例</a><br />
                    <a download href="/image/pictures/850X590_07.png">下載圖片</a>
                </div>
            </div>

            <div className="modal fade" id="pictures_850X590_07">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p className="modal-title">圖片07</p>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-center">
                            <a download href="/image/pictures/850X590_07.png">下載圖片</a>
                            <img src="/image/pictures/850X590_07.png" alt="pictures_850X590_07" width="100%" />
                        </div>
                        <div className="modal-footer">
                            <p className="small">可作為版型圖片使用</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManagerPictures;