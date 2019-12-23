import React from 'react';

function MsgModal(props){

    console.log(props.show);
 return(

        <div className={`modal fade ${props.showStyle}`} show={props.show} id="ModalCenter" tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="ModalLongTitle">{props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                 {props.msg}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>


 )

}

export default MsgModal;