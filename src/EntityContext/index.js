import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const EntityContext = React.createContext();

function EntityProvider({ children }) {
  const {
    item: entities,
    saveItem: saveEntities,
  } = useLocalStorage('ENTITIES_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [textTitle, setTextTitle] = React.useState('');
  const [entityId, setEntityId] = React.useState('');

  const searchedEntities = entities.filter(
    (entity) => {
      const entityText = entity.rfc.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return entityText.includes(searchText);
    }
  );

  const showEntity = entities.find(entity => entity.id === entityId);

  const addEntity = (data) => {
    const newEntities = [...entities];
    const entity_long = newEntities.length;
    const entity_id = newEntities.length === 0 ? 1 : newEntities[entity_long - 1].id + 1 ;
    newEntities.push({
      id: entity_id,
      regime: data.regime,
      rfc: data.rfc,
      name: data.name ?? data.name,
      curp: data.curp ?? data.curp,
      fiel: data.fiel ?? data.fiel,
      email: data.email ?? data.email,
      phone: data.phone ?? data.phone,
    });
    saveEntities(newEntities);
  };

  const editEntity = (data) => {
    const entityIndex = entities.findIndex( entity => entity.id === data.id );
    entities[entityIndex] = {
      ...entities[entityIndex],
      ...data,
    }
    saveEntities(entities);
  }

  const deleteEntity = (id) => {
    const newEntities = [...entities];
    const entityIndex = newEntities.findIndex(
      (entity) => entity.id === id
    );
    newEntities.splice(entityIndex, 1);
    saveEntities(newEntities);
  };
  
  return (
    <EntityContext.Provider value={{
      searchValue,
      setSearchValue,
      searchedEntities,
      addEntity,
      deleteEntity,
      openModal,
      setOpenModal,
      textTitle,
      setTextTitle,
      setEntityId,
      showEntity,
      editEntity
    }}>
      {children}
    </EntityContext.Provider>
  );
}

export { EntityContext, EntityProvider };