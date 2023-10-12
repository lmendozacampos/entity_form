import React from "react";
import { EntityContext } from "../EntityContext";

function SearchEntity(){
    const {
        searchValue,
        setSearchValue
    } = React.useContext(EntityContext);
    return (
        <input
            placeholder="Buscar rfc: XAXX010101000"
            className="form-control"
            value={searchValue}
            onChange={
                (event) => {
                    setSearchValue(event.target.value)
                }
            }
        />
    );
}

export { SearchEntity };