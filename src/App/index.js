import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { EntityProvider } from '../EntityContext';
import { AppUI } from './AppUI'

function App() {
  return (
    <EntityProvider>
        <AppUI />
    </EntityProvider>
  );
}

export default App;
