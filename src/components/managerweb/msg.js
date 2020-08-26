import React from 'react';

const Msg = (props) =>{

    const {type, value, text} = props;

    switch(type){

        case 'LOADING':

            return(value && 
                    <div className="row-expand-slide-appear">
                         <h4 className = "p-3 mb-2  bg-info text-white rounded">{text} <i className= 'fa fa-spinner fa-spin' /></h4>
                    </div>
                );

        case 'ERROR':   

            return(value && 
                    <div className="row-expand-slide-appear">
                        <h4 className = "p-3 mb-2 bg-danger text-white rounded">{text} : {value.message} </h4>
                    </div>
                );

         case 'MESSAGE':   

                return(value && 
                        <div className="row-expand-slide-appear">
                            <div className = "p-3 mb-2 bg-lightgray text-white rounded">
                                <div className="form-row">
                                    <div className="col-md-6">
                                        <ul>
                                            <h4 className = "msg-position-add">{props.text1title}</h4>
                                            {props.text1.map((item, index)=>{
                                                return( <li className="msg-position-list-style" key={index}>{item}</li>);
                                            })}
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <h4 className = "msg-position-duplicate">{props.text2title}</h4>
                                            {props.text2.map((item, index)=>{
                                                return( <li className="msg-position-list-style" key={index}>{item}</li>);
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    );
        default:

            return('');


    }

}

export default Msg;