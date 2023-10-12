import React from "react";

function EntityTable({ children }) {
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Rfc</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Régimen</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                { children}
            </tbody>
        </table>
    );
}
  
export { EntityTable };