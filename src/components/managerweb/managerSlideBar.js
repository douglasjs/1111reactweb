import React from 'react';

function ManagerSlideBar(props) {
   
    return (
        
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


              <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div>
                  <img className="img-fluid" src='/image/1111.png' alt='1111 Image' />
                </div>
              </a>

        
              <hr className="sidebar-divider my-0" />

  
              <li className="nav-item active">
                  <h6 className="m-0 font-weight-bold text-white">客製化網站</h6>
              </li>

     
              <hr className="sidebar-divider" />

   
              <div className="sidebar-heading">
              <h6 className="m-0 font-weight-bold text-white">網站設定</h6>
              </div>


              <li className="nav-item">
                <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <i className="fas fa-fw fa-cog"></i>
                  <span>通用設定</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">通用設定</h6>
                    <a className="collapse-item" href="setting">網站通用設定</a>
                  </div>
                </div>
              </li>


              <li className="nav-item">
                <a className="nav-link collapsed" href="/#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                  <i className="fas fa-fw fa-wrench"></i>
                  <span>客製化網站模板設定</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">客製化網站模板設定</h6>
                    <a className="collapse-item" href="template1">模板型式 =1=</a>
                    <a className="collapse-item" href="template2">模板型式 =2=</a>
                    <a className="collapse-item" href="template3">模板型式 =3=</a>
                    <a className="collapse-item" href="template4">模板型式 =4=</a>
                  </div>
                </div>
              </li>

              <hr className="sidebar-divider d-none d-md-block" />

              <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
              </div>

        </ul>    
        
    )

}

export default ManagerSlideBar;