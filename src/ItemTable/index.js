import React from "react";
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { EntityContext } from "../EntityContext";

function ItemTable({id, regime, rfc, email, name}){

    const { 
        deleteEntity,
        setOpenModal,
        setTextTitle,
        setEntityId
    } = React.useContext(EntityContext);

    const options = [
        { value: '1', label: 'Persona Física Mexicana' },
        { value: '2', label: 'Persona Moral Mexicana' },
        { value: '3', label: 'Persona Moral Extranjera' },
        { value: '4', label: 'Persona Física Extranjera' },
        { value: '5', label: 'Fideicomiso' },
        { value: '6', label: 'Persona del Derecho Público' }
      ];
      

    return (
        <tr>
            <th scope="row">{id ?? id}</th>
            <td>{rfc ?? rfc}</td>
            <td>{ name ?? name }</td>
            <td>{ email ?? email}</td>
            <td>{ options[regime].label }</td>
            <td>
                <button type="button" className="btn btn-success"
                onClick={ () => {
                    setOpenModal(true);
                    setTextTitle('Editar Entidad');
                    setEntityId(id);
                } }><FaRegEdit /></button>
                <button type="button" className="btn btn-danger"
                onClick={ () => {
                    deleteEntity(id);
                } }
                ><FaRegTrashAlt /></button>
            </td>
        </tr>
    );
}

export { ItemTable };