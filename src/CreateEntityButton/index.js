import React from "react";
import { EntityContext } from "../EntityContext";

function CreateEntityButton(){
    const { setOpenModal, setTextTitle, setEntityId } = React.useContext(EntityContext);

    return(
        <div className="align-items-end">
            <button 
            className="btn btn-dark"
            onClick={ () => {
                setOpenModal(state => !state);
                setTextTitle('Create Entity');
                setEntityId('');
            } }
            >Create Entity</button>
        </div>
        
    );
}

export { CreateEntityButton };