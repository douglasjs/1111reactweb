import React from 'react';
import { Link } from 'react-router-dom';


function ManagerSlideBar(props) {
   
    const cid = props.match.params.cid;
    return (
        
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

              <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={`/managerweb/${cid}`}>
                <div>
                  <img className="img-fluid" src='/image/1111.png' alt='1111' />
                </div>
              </Link>

        
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
                   {/* <a className="collapse-item" href="/#" onClick={()=>loginHandler(props,'setting')}>網站通用設定</a>*/}
              
                    <Link className="collapse-item" to={{pathname:`/managerweb/${cid}/setting`, state: { detail: 'login' }}}>網站通用設定</Link>
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
                    <Link className="collapse-item" to={{pathname:`/managerweb/${cid}/template1`, state: { detail: 'login' }}}>模板樣式 =1=</Link>
                    {/*
                                        <Link className="collapse-item" to={{pathname:`/managerweb/${cid}/template2`, state: { detail: 'login' }}}>模板樣式 =2=</Link>
                    <a className="collapse-item" href="/#">模板樣式 =3=</a>
                    <a className="collapse-item" href="/#">模板樣式 =4=</a>
                    <a className="collapse-item" href="/#">模板樣式 =5=</a>
                    <a className="collapse-item" href="/#">模板樣式 =6=</a>
                    */}

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