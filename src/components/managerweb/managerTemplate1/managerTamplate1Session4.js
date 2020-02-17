import React from 'react';
import Msg from '../msg';
import InputText from '../../sharecomponents/inputText';

class Session4 extends React.Component{

    constructor(props){
        super(props);
        this.state={
                groupName1 : " ",
                groupName2 : " ",
                groupName3 : " ",
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

    handleTagSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;

        const submitObj = {
            ono: cid,
            themeNum : event.target.themeNum4.value,
            groupName1:  event.target.groupName1.value,
            groupName2:  event.target.groupName2.value,
            groupName3:  event.target.groupName3.value

        }

        if(event.target.actionTag.value === 'create'){
            this.props.createPositionGrp(submitObj);
        }
        if(event.target.actionTag.value === 'modify'){
            this.props.updatePositionGrp(submitObj);
        }

     
    }


    handlePositionSubmit = (event) =>{
        event.preventDefault();
        const cid = this.props.match.params.cid;
        const { kind00Data } = this.props.kind00Reducer;
        const allTarget = event.target;

        let submitObj;
        let checkName;
        let tagName;
        
        if(kind00Data && kind00Data.length > 0){
            
            kind00Data.forEach( element =>{
                checkName =  `check_${element.eNo}`;
                tagName = `tag_${element.eNo}`;
                if(allTarget[checkName].checked){
                    submitObj = {
                        oNo: cid,
                        themeNum : event.target.themeNum4_position.value,
                        eNo:  element.eNo.toString(),
                        position_group : allTarget[tagName].value,
                        position_name:  element.Position,
                        position_salary:  element.Salary,
                        position_matter:  element.Matter,
                        position_workCity: element.WorkCity
                    }
                    this.props.createPosition(submitObj);
                }

            })
        }
     
    }


    handlePositionDelete = (event) =>{

        const cid = this.props.match.params.cid;

        const submitObj = {
            oNo: cid,
            themeNum : 'tp01',
            eNo:  event.target.value
        }

        this.props.deletePosition(submitObj);
     
    }

    checkGroupName = (group) => {
        const { positionGrpData} = this.props.positionGrpReducer;
        let groupName1;
        let groupName2;
        let groupName3;

        if(positionGrpData && positionGrpData.length > 0){
            positionGrpData.forEach( element  => {
                groupName1 = element.groupName1;
                groupName2 = element.groupName2;
                groupName3 = element.groupName3;
            })
        }

        switch (group) {
            case "1":
                return groupName1;
            case "2":
                return groupName2;
            case "3":
                return groupName3;
            default:
                return null;
        }
    }


    render(){

        //const { positionData, positionErr, positionLoading} = this.props.positionReducer;
        const { positionGrpData, positionGrpErr, positionGrpIsLoading} = this.props.positionGrpReducer;
        const { positionData } = this.props.positionReducer;
        const { kind00Data } = this.props.kind00Reducer;
        
        let themeNum = 'tp01';
        let actionType = 'create';

        let groupName1 = this.state.groupName1;
        let groupName2 = this.state.groupName2;
        let groupName3 = this.state.groupName3;

        if(positionGrpData && positionGrpData.length > 0){
            actionType = 'modify';
            positionGrpData.forEach( element  => {
                groupName1 = groupName1 !==" " ? groupName1 : element.groupName1;
                groupName2 = groupName2 !==" " ? groupName2 : element.groupName2;
                groupName3 = groupName3 !==" " ? groupName3 : element.groupName3;
            })
        }

        let cityGroup =[];
        let dutyGroup =[];

        if(kind00Data && kind00Data.length > 0){
               
            kind00Data.forEach( element => {
                cityGroup.push(element.WorkCity);
                dutyGroup.push(element.DutyArr[0]);
            })

        }
        cityGroup = [...new Set(cityGroup)];
        dutyGroup = [...new Set(dutyGroup)];


        return(
            <div className="card shadow mb-4">
                <a href="#collapseCard4" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseCard4">
                <h6 className="m-0 font-weight-bold text-primary">設定區段-職缺介紹</h6>
                </a>
                <div className="collapse collapsed" id="collapseCard4">
                    <div className="card-body">
                    <div className="table-responsive">
                                <div className="row mangerweb-pb-1">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="dataTables_length" id="dataTable_length">

                                                <div id="dataTable_filter" className="dataTables_filter text-left">
                                                    <a data-toggle="modal" href="#tmp1_addlable"><button className='btn btn-primary'>增加標籤 <i className="fas fa-folder-plus" value='Create' /></button></a>&nbsp;&nbsp;&nbsp;
                                                    <a data-toggle="modal" href="#tmp1_addjob"><button className='btn btn-primary'>增加職缺 <i className="fas fa-folder-plus" value='Create' /></button></a>&nbsp;&nbsp;&nbsp;
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <div className="row-expand-slide-appear">
                                    <table className="table table-hover table-bordered" id="dataTable">
                                        <thead>
                                      
                                                <tr>
                                                    <th className='text-center'>刪除</th>
                                                    <th onClick={()=>(this.handleShort('tag'))}>標籤   {this.sortMark('tag')}    </th>
                                                    <th onClick={()=>(this.handleShort('position'))}>職稱  {this.sortMark('position')} </th>
                                                    <th onClick={()=>(this.handleShort('salary'))}>薪資   {this.sortMark('salary')}  </th>
                                                    <th onClick={()=>(this.handleShort('matter'))}>工作內容       {this.sortMark('matter')}  </th>
                                                    <th onClick={()=>(this.handleShort('location'))}>地點  {this.sortMark('location')}</th>                                        
                                                </tr>
                                       
                                            
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                    <th className='text-center'>刪除</th>
                                                    <th>標籤</th>
                                                    <th>職稱</th>
                                                    <th>薪資  </th>
                                                    <th>工作內容 </th>
                                                    <th>地點</th>
        
                                                </tr>
                                        </tfoot>
                                        <tbody>

                    
                                            {Array.isArray(positionData) && positionData.map((element, index) => {
                                                    return(
                                                        <tr key={index}>
                                                            <td className='text-center'><button id={`del_${element.eNo}`}  className='btn btn-primary' value={element.eNo} onClick={this.handlePositionDelete}>刪除 <i className="far fa-trash-alt" /></button></td>
                                                            <td>{this.checkGroupName(element.position_group)} </td>
                                                            <td>{element.position_name} </td>
                                                            <td>{element.position_salary} </td>
                                                            <td>{element.position_matter} </td>
                                                            <td>{element.position_workCity} </td>
                                                         
                                                        </tr>
                                                    )
                                             })}
                                            
                                        </tbody>
                                        </table>

                                </div>
                               


                                </div>
                    </div>
                </div>



                <div className="modal fade" id="tmp1_addlable">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">
                                    請設定標籤&nbsp;&nbsp;&nbsp;
                                    (<a type="button" data-toggle="modal" href="#tmp1_joblable_img">觀看圖例</a>)
                                </p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <Msg type ='LOADING'  value = {positionGrpIsLoading} text='Processing ' /> 
                                <Msg type ='ERROR' value = {positionGrpErr} text= 'Opps! Error : ' />
                                <form id='dataTagForm' className={positionGrpIsLoading ? 'd-none' : ''}  onSubmit={this.handleTagSubmit}>
                                    <input type="hidden" id="themeNum4" value={themeNum} />
                                    

                                    <InputText title='標籤 1' notice='( 字數限制為4個字以內 )' inputName='groupName1' inputState={groupName1}
                                                stateObj={this} required={true} />
                                    <InputText title='標籤 2' notice='( 字數限制為4個字以內 )' inputName='groupName2' inputState={groupName2}
                                                stateObj={this} required={false} />
                                    <InputText title='標籤 3' notice='( 字數限制為4個字以內 )' inputName='groupName3' inputState={groupName3}
                                                stateObj={this} required={false} />
                                 
                                    <hr />
                                    <div align="center"><button type='submit' id='actionTag' value={actionType} className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 儲存設定</button></div>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <p className="small">能設定3個標籤來做為職缺的分類</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="tmp1_joblable_img">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">職缺介紹 - 標籤範例</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                                <img src="/image/sample_01/04.png" alt="tmp1_joblable_img" width="100%" />
                            </div>
                            <div className="modal-footer">
                                <p className="small">範例僅供參考</p>
                            </div>
                        </div>
                    </div>
                </div>


            
                <div className="modal fade" id="tmp1_addjob">
                    <div className="modal-dialog sample-img-width">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title">請選擇要顯示的職缺</p>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body text-center">
                              
                                <form id='dataPositionForm'  onSubmit={this.handlePositionSubmit}>
                                     <input type="hidden" id="themeNum4_position" value={themeNum} />
                                    <div className="form-row">
                                        <div className="col-12" align="left"><label><em className='text-primary'>請先選擇地區及職務類別</em> </label></div>
                                        <div className="col-md-5 mb-3">
                                            <select  className="form-control" id="kind_0-WorkCity"  required>
                                            {cityGroup && cityGroup.map( (element, index) =>{
                                                return(<option key={index} value='element'>{element}</option>)
                                            })}
                                            </select>
                                        
                                        </div>
                                        <div className="col-md-5 mb-3">
                                            <select  className="form-control" id="kind_0-DutyName" required>
                                                {dutyGroup && dutyGroup.map( (element, index) =>{
                                                    return(<option key={index} value={element.DutyName}>{element.DutyName}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
        
                                    <div className="form-row">
                                        <table className="table table-hover table-bordered" id="dataTable">
                                            <thead>
                                                <tr>
                                                    <th className='text-center'>選取</th>
                                                    <th onClick={()=>(this.handleShort('tag'))}>標籤   {this.sortMark('tag')}    </th>
                                                    <th onClick={()=>(this.handleShort('position'))}>職稱  {this.sortMark('position')} </th>
                                                    <th onClick={()=>(this.handleShort('salary'))}>薪資   {this.sortMark('salary')}  </th>
                                                    <th onClick={()=>(this.handleShort('matter'))}>工作內容       {this.sortMark('matter')}  </th>
                                                    <th onClick={()=>(this.handleShort('location'))}>地點  {this.sortMark('location')}</th>                                        
                                                </tr>
                                            </thead>
                                            <tfoot>
                                               
                                                    
                                                            <tr>
                                                                <th className='text-center'>選取</th>
                                                                <th>標籤  </th>
                                                                <th>職稱  </th>
                                                                <th>薪資  </th>
                                                                <th>工作內容 </th>
                                                                <th>地點 </th>
                                                            </tr>
                                                    
            
                                                   
                                            </tfoot>
                                            <tbody>
                                                { kind00Data && kind00Data.map( (element, index) =>{
                                                    return(
                                                        <tr key={index}>
                                                            <td className='text-center'><input type="checkbox" name={`check_${element.eNo}`} value={element.eNo} /></td> 
                                                            <td>    
                                                                <select className="form-control" id={`tag_${element.eNo}`} required>
                                                                        {groupName1 && groupName1 !==" " && <option value="1">{groupName1}</option>}
                                                                        {groupName2 && groupName2 !==" " &&<option value="2">{groupName2}</option>}
                                                                        {groupName3 && groupName3 !==" " &&<option value="3">{groupName3}</option>}
                                                                </select>
                                                            </td>                                                 
                                                            <td>{element.Position}</td>
                                                            <td>{element.Salary}</td>
                                                            <td>{element.Matter.substring(0, 50)}</td>
                                                            <td>{element.WorkCity}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div align="center">
                                        <button type='submit' id='actionPosition' className="btn btn-facebook btn-block btn-width" ><i className="fas fa-save"></i> 選擇職缺 </button>
                                    </div>

                                </form>
                                    

                            </div>
                            <div className="modal-footer">
                                <p className="small">每個標籤最多只能選擇5個職缺</p>
                            </div>
                        </div>
                    </div>
                </div>

        
           </div>
        )

    }

    /*render(){

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

    }*/


}
export default Session4;