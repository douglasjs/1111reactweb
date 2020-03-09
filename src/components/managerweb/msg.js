import React from 'react';

const Msg = (props) =>{

    const {type, value, text} = props;

    switch(type){

        case 'LOADING':

            return(value && 
                    <div className="row-expand-slide-appear">
                         <h4 className = "p-3 mb-2  bg-primary text-white rounded">{text} <i className= 'fa fa-spinner fa-spin' /></h4>
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
                            <div  className = "p-3 mb-2  bg-primary text-white rounded">
                                <ul>
                                    <h4>{props.text1title}</h4>
                                    {props.text1.map((item, index)=>{
                                        return( <li keywords={index}>{item}</li>);
                                    })}
                                    <h4>{props.text2title}</h4>
                                    {props.text2.map((item, index)=>{
                                        return( <li keywords={index}>{item}</li>);
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
        default:

            return('');


    }

}

export default Msg;