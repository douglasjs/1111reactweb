import React from 'react';


class Session4 extends React.Component{

    constructor(props){
        super(props);
        this.state={
                currentPage: 1,
                rowSet: 5,
                sorters: [{
                      property: ''
                      ,direction: ''
                    }],
                serach : '',
                sortNum:0
                
        }

    }

    handleGo = (e) => {
        /*
        this.props.editTempData(e.target.value);
        this.props.history.push('/form/'+ e.target.textContent );
        */
        
    }

    handleDelete = (e) => {
        /*
        //const { data } = this.props.datatableReducer;
        //const dataSet = data.dataList.filter(_id => _id === e.target.value);
        //console.log(data);
        this.props.deleteData({id : e.target.value}, this.state.rowSet, this.state.currentPage);
        //this.props.getDataList(this.state.rowSet,this.state.currentPage);
        */
    }

    handleSerach = (e) =>{
        /*
        if(e.target.value.length > 0){
         
            this.props.getDataList(this.state.rowSet,1,e.target.value );
           
        }else{
            this.props.getDataList(this.state.rowSet,1);
        }
        this.setState({...this.state, currentPage: 1 , serach : e.target.value });
       */
    }

    handleShort = (sort) =>{
   
        let dir = '';

        if(this.state.sorters[0].property !== sort ){
            dir = 'ASC';
        }else{
            if(this.state.sorters[0].direction === 'ASC'){
                dir = 'DESC';
            }
            if(this.state.sorters[0].direction === 'DESC'){
                dir = 'NA';
            }
            if(this.state.sorters[0].direction === 'NA'){
                dir = 'ASC';
            }

        }
  

        this.setState({...this.state, sorters: [{
            property: sort,
            direction: dir
          }]});

    }

    handleChangeRow = (e) => {
        /*
        const row = parseInt(e.target.value);
        this.setState({...this.state, rowSet : row, currentPage: 1});
        this.props.getDataList(row,1 , this.state.serach);
        */
    }

    handleClickPage = (e) => {
        /*
        const toPage = parseInt(e.target.value);
        this.setState({...this.state, currentPage : toPage });
        this.props.getDataList(this.state.rowSet ,toPage);
        */

    }

    handleUpDown = (e) =>{
       
        /*
        const upDown = e.target.value === 'next' ? 1 : -1;
        this.setState({...this.state, currentPage : this.state.currentPage + upDown });
        this.props.getDataList(this.state.rowSet ,this.state.currentPage + upDown);
        */
        
    }

    sortMark = (sortName) => {

        if(sortName === this.state.sorters[0].property){
            if(this.state.sorters[0].direction === 'ASC'){
                return( <i className="fas fa-angle-down text-info" />);
            }
            if(this.state.sorters[0].direction === 'DESC'){
                return( <i className="fas fa-angle-up text-info" />);
            }
        }
       

    }


    pageButton = (totalPage) =>{

        let li = [];

        const checkActive = (active) =>{
            return(active === this.state.currentPage && 'active');
        }

        const checkPreActive = () =>{
            return(!(this.state.currentPage > 1) && 'disabled');
        }


        const checkNextActive = () =>{
            return((this.state.currentPage >= totalPage) && 'disabled');
        }
        
       

        for(let i=1; i<=totalPage; i ++){

            if((i >= this.state.currentPage && i < this.state.currentPage + 10) 
            || (i + 10 > totalPage && i < this.state.currentPage + 10) ){
                li.push(
                    <li className={`paginate_button page-item  ${checkActive(i)}`}  key={i}>
                        <button className="page-link" onClick={this.handleClickPage} value={i}>{i}</button>
                    </li>
                )
            }

        }

        return (
            <ul className="pagination">

                <li className={`paginate_button page-item previous ${checkPreActive()}`} id="dataTable_previous">
                    <button className="page-link" onClick={this.handleClickPage} value={1}> Top </button>
                </li>        
                <li className={`paginate_button page-item previous ${checkPreActive()}`} id="dataTable_previous">
                    <button className="page-link" onClick={this.handleUpDown} value='pre'>Previous</button>
                </li>

                {li.map((liNode)=>{
                    return(liNode);
                })}
              
                <li className={`paginate_button page-item next ${checkNextActive()}`} id="dataTable_next">
                    <button className="page-link"  onClick={this.handleUpDown} value='next'>Next</button>
                </li>
                <li className={`paginate_button page-item previous ${checkNextActive()}`} id="dataTable_previous">
                    <button className="page-link" onClick={this.handleClickPage} value={totalPage}> End </button>
                </li>
            </ul>
         )
       


    }


    render(){

        const count =1;
        const totalPage = 1;
        const start = 1;
        const end = 1;
        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard4">
                <h6 className="m-0 font-weight-bold text-primary">設定區段-職缺介紹</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard4">
                    <div className="card-body">
                    <div className="table-responsive">
                                <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="dataTables_length" id="dataTable_length">

                                                <div id="dataTable_filter" className="dataTables_filter text-left">
                                                     <button className='btn btn-primary' onClick={this.handleGo}  value='Create'>增加職位 <i className="fas fa-folder-plus" value='Create' /></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 text-right">
                                                顯示 <label><select name="dataTable_length" aria-controls="dataTable" className="custom-select custom-select-sm form-control form-control-sm" value={this.state.rowSet} onChange={this.handleChangeRow}>
                                                            <option value="1">1</option>
                                                            <option value="5">5</option>
                                                            <option value="10">10</option>
                                                            <option value="25">25</option>
                                                            <option value="50">50</option>
                                                            <option value="100">100</option>
                                                            </select> 
                                                        </label> 行
                                        </div>
                                </div>

                                <div className="row-expand-slide-appear">
                                    <table className="table table-hover table-bordered" id="dataTable">
                                        <thead>
                                            <tr>
                                                <th className='text-center'>編輯</th>
                                                <th className='text-center'>刪除</th>
                                                <th onClick={()=>(this.handleShort('tag'))}>標籤   {this.sortMark('tag')}    </th>
                                                <th onClick={()=>(this.handleShort('position'))}>職稱  {this.sortMark('position')} </th>
                                                <th onClick={()=>(this.handleShort('salary'))}>薪資   {this.sortMark('salary')}  </th>
                                                <th onClick={()=>(this.handleShort('benefit'))}>福利       {this.sortMark('benefit')}  </th>
                                                <th onClick={()=>(this.handleShort('location'))}>地點  {this.sortMark('location')}</th>                                        
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                    <th className='text-center'>編輯</th>
                                                    <th className='text-center'>刪除</th>
                                                    <th>標籤</th>
                                                    <th>職稱</th>
                                                    <th>薪資  </th>
                                                    <th>福利 </th>
                                                    <th>地點</th>
        
                                                </tr>
                                        </tfoot>
                                        <tbody>

                    
                                        
                                                        <tr>
                                                            <td className='text-center'><button className='btn btn-primary' onClick={this.handleGo} value=''>編輯 <i className="far fa-edit" /></button></td>
                                                            <td className='text-center'><button className='btn btn-primary' onClick={this.handleDelete} value=''>刪除 <i className="far fa-trash-alt" /></button></td>
                                                            <td>北區</td>
                                                            <td>業務專員(電商&禮贈品) </td>
                                                            <td>面議(經常性薪資4萬/月含以上) </td>
                                                            <td>其 　他：一、多樣全面的福利項目： 1)獎金福利:端午、中秋、年終獎金、員工分紅、專利獎金、發明王獎金、資深員工獎金。 2)醫療保險及健康照護:員工團體保險(包含壽 </td>
                                                            <td>台北市中正區</td>
                                                         
                                                        </tr>
                                        
                                            
                                        </tbody>
                                        </table>

                                </div>
                               

                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="dataTable_info" role="status" aria-live="polite">Showing {start} to {end}  of {count} entries</div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="dataTable_paginate">
                                                {this.pageButton(totalPage)}
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
export default Session4;