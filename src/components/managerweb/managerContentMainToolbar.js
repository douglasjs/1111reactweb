import React from 'react';

function ManagerContentMainToolbar() {

    return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

              <ul className="navbar-nav ml-auto">
            
                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="btn btn-success btn-icon-split">
                      <span className="icon text-white">
                        <i className="fas fa-radiation-alt fa-spin"></i>
                      </span>
                      <span className="text">模板形式 =1=  </span>
                    </span>
           
                    <span className="badge badge-danger badge-counter">啟動中</span>
                  </a>
      
                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                      啟動模板形式
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="./#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">模板形式 =1=</div>
                        <div className="small text-gray-500">說明範例: 風格1</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="/#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">模板形式 =2=</div>
                        <div className="small text-gray-500">說明範例: 風格2</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="/#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">模板形式 =3=</div>
                        <div className="small text-gray-500">說明範例: 風格3</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="/#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">模板形式 =4=</div>
                        <div className="small text-gray-500">說明範例: 風格4</div>
                      </div>
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="/#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="btn btn-info btn-icon-split">
                      <span className="icon text-white">
                        <i className="fas fa-radiation-alt fa-spin"></i>
                      </span>
                      <span className="text">模板色系 =1=  </span>
                    </span>
           
                    <span className="badge badge-danger badge-counter">啟動中</span>
                  </a>
      
                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                      啟動模板色系
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="./#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator bg-success"></div>
                      </div>
                      <div className="font-weight-bold">
                        <div className="text-truncate">模板色系 =1=</div>
                        <div className="small text-gray-500">說明範例: 風格1</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="/#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">模板色系 =2=</div>
                        <div className="small text-gray-500">說明範例: 風格2</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="/#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">模板色系 =3=</div>
                        <div className="small text-gray-500">說明範例: 風格3</div>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="/#">
                      <div className="dropdown-list-image mr-3">
                        <img className="rounded-circle" src="/image/bg-2-contact.jpg" alt="img" />
                        <div className="status-indicator"></div>
                      </div>
                      <div>
                        <div className="text-truncate">模板色系 =4=</div>
                        <div className="small text-gray-500">說明範例: 風格4</div>
                      </div>
                    </a>
                  </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

               
                <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="/#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">永豐餘</span>
                  </a>
            
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="/#">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Profile
                    </a>
                    <a className="dropdown-item" href="/#">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                      Settings
                    </a>
                    <a className="dropdown-item" href="/#">
                      <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                      Activity Log
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="/#" data-toggle="modal" data-target="#logoutModal">
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Logout
                    </a>
                  </div>
                </li>

              </ul>

            </nav>
        
    )
}

export default ManagerContentMainToolbar;