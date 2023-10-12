import React from "react";
import { createPortal } from 'react-dom';
import './Modal.css';
import { EntityContext } from "../EntityContext";

function Modal({children}){
    const { setOpenModal, textTitle } = React.useContext(EntityContext);
    return createPortal(
        <div className="ModalBackground">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">  
                        <div className="container">
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h5 className="modal-title" id="exampleModalLongTitle">{textTitle}</h5>
                                        </div>
                                        <div className="col-md-3">
                                        <button type="button" 
                                        className="btn btn-danger" 
                                        onClick={ () => {
                                            setOpenModal(false)
                                        } }
                                        >
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };