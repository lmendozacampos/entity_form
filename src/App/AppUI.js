import { EntityContext } from '../EntityContext';
import { Modal } from '../Modal';
import React from 'react';
import { EntityForm } from '../EntityForm';
import { CreateEntityButton } from '../CreateEntityButton';
import { EntityTable } from '../EntityTable';
import { ItemTable } from '../ItemTable';
import { SearchEntity } from '../SearchEntity';

function AppUI(){
  const {
    searchedEntities,
    openModal
  } = React.useContext(EntityContext);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <br/>
                        <div className="card">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h4 className="modal-title">
                                            Entities
                                        </h4>
                                    </div>
                                    <div className="col-md-6">
                                        <SearchEntity />
                                    </div>
                                    <div className="col-md-2">
                                        <CreateEntityButton />
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <EntityTable>
                                    {searchedEntities.map( entity => (
                                    <ItemTable
                                        key={entity.id} 
                                        id={entity.id}
                                        rfc={entity.rfc}
                                        regime={entity.regime}
                                        email={entity.email}
                                        name={entity.name}
                                    />
                                    ))}
                                </EntityTable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && (
                <Modal>
                    <EntityForm />
                </Modal>
            )}
        </>
      );
}

export { AppUI };