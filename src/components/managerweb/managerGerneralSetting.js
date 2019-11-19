import React from 'react';
import Msg from './msg';

class ManagerGerneralSetting extends React.Component{


    constructor(props){
        super(props);
        this.state = {
          sex: 'M',
          age: {
              value: 18,
              valid: ''
          },
          firstName : '',
          firstName_valid : '',
          lastName : '',
          lastName_valid : '',
          editID: '',
          passwd: '',
          passwd_c: {
              value: '',
              valid: ''
         },

      };
    }
  
    componentDidMount(){


        if(this.props.location.state){
       
            const {_id, firstName, lastName, sex, age} = this.props.location.state;
            this.setState({
                ...this.state,
                editID: _id,
                firstName,
                lastName,
                sex,
                age: {
                    value: age,
                    valid: ''
                },
            });
        }
    

    }


    handleBack = () => {
      this.props.history.push('/');
    }

    handleFirstName = (event) =>{
        this.setState({...this.state,firstName : event.target.value, firstName_valid : event.target.value ==='' &&  'is-invalid'});
    }


    handlePW = (event) =>{
        this.setState({...this.state, passwd : event.target.value });
    }

    handlePWC = (event) =>{
        let valid = '';
        if(this.state.passwd !== event.target.value){
            valid =  'is-invalid';
        } 
        this.setState({...this.state, passwd_c : { value : event.target.value, valid} });
    }

    handleLastName = (event) =>{

        this.setState({...this.state,lastName : event.target.value, lastName_valid : event.target.value ==='' &&  'is-invalid'});
    }

    handleSexChange = (event) => {
        this.setState({...this.state, sex: event.target.value});
    }

    handleAgeChange = (event) => {
        let valid = '';
        if(event.target.value < 0){
            valid =  'is-invalid';
        }
        this.setState({...this.state, age : {value : event.target.value, valid }});

    }

    handleSubmit = (event)  => {
      event.preventDefault();
      
      if(this.state.passwd !== this.state.passwd_c.value){
          return false;
      }
      if(this.state.age.value < 0){
          return false;
      }

      const userData = {
          lastName: event.target.lname.value,
          firstName: event.target.fname.value,
          sex:event.target.sex.value,
          age:event.target.age.value,
          passwd: event.target.passwd.value,
          id: this.state.editID
      }

      const { tableSet } = this.props.tableSetReducer;
      const {rowSet,search,totalPage} = tableSet;
    
  
      if(event.target.action.value.trim() === 'Create'){
          this.props.setTable(rowSet,search,1 ,totalPage, {create_date : -1});  
          this.props.createData(userData, this.handleBack);
      }

     
      if(event.target.action.value.trim() === 'Edit'){
          this.props.updateData(userData, this.handleBack);
      }


      
      document.getElementById("dataForm").reset();
    
    }

  
    render(){
  

      const { err, isLoading} = this.props.datatableReducer;
      const action = this.props.match.params.action;


      return (



          <div className="card">
              <div className="card-body">

                  <Msg type ='LOADING'  value = {isLoading} text='Processing ' /> 
                  <Msg type ='ERROR' value = {err} text= 'Opps! Error : ' />

                  <form id='dataForm' onSubmit={this.handleSubmit}>
                      <h3>{action} User</h3>
                      <div className="form-row">
                          <div className="col-md-6 mb-3">
                              <label>First name *</label>
                              <input type="text" className={`form-control ${this.state.firstName_valid}`} id="fname" placeholder="Your first name" onChange={this.handleFirstName} value={this.state.firstName} required />
                              <div className="invalid-feedback">
                                      User first name can't be empty
                              </div>
                          </div>
                          <div className="col-md-6 mb-3">
                              <label>Last name *</label>
                              <input type="text" className={`form-control ${this.state.lastName_valid}`} id="lname" autoComplete="username"  placeholder="Your last name" onChange={this.handleLastName} value={this.state.lastName} required />
                              <div className="invalid-feedback">
                                      User last name can't be empty
                              </div>
                          </div>
                     
                      </div>
                      <div className="form-row">
                          <div className="col-md-6 mb-3">
                              <label>Sex</label>
                              <select  className="form-control" id="sex" value={this.state.sex} onChange={this.handleSexChange}>
                                          <option value='Male '>Male</option>
                                          <option value='Female'>Female</option>
                                          <option value='Other'>Other</option>
                              </select>
                          </div>
                          <div className="col-md-3 mb-3">
                              <label>Age</label>
                              <input type="number" className={`form-control ${this.state.age.valid}`}  id="age"  onChange={this.handleAgeChange} value={this.state.age.value} required/>
                              <div className="invalid-feedback">
                                      Please provide a valid age.
                              </div>
                          </div>
                      
                      </div>
                      <div className="form-row">
                          <div className="col-md-6 mb-3">
                              <label>Password</label>
                              <input type="password" className="form-control" id="passwd" autoComplete="new-password" placeholder="Please input password" onChange={this.handlePW} value={this.state.passwd} required = {this.props.match.params.action === 'Create ' ? true : false} />
                          </div>
                          <div className="col-md-6 mb-3">
                              <label>Confirm password</label>
                              <input type="password" className={`form-control ${this.state.passwd_c.valid}`} id="passwd_com" placeholder="Repeat password" autoComplete="new-password" onChange={this.handlePWC} value={this.state.passwd_c.value} required = {this.props.match.params.action === 'Create ' || this.state.passwd  ? true : false} />
                              <div className="invalid-feedback">
                                      The password is different, please input the same password.
                              </div>
                          </div>
                         
                      </div>
                      <div>
                          <button className="btn btn-primary" type="submit" id='action' value={this.props.match.params.action}>{this.props.match.params.action==='Edit'? 'Save': this.props.match.params.action} User</button>&nbsp;&nbsp;
                          <button className="btn btn-primary" onClick={this.handleBack} >Cancel</button>
                      </div>
                   
                  </form>


              </div>

          </div>



      );
  
    }
  
  }

  export default ManagerGerneralSetting;