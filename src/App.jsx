import React from 'react';
import ItemList from './components/ItemList.jsx';
import Header from './components/Header.jsx';
import Toolbar from './components/Toolbar.jsx';

const App = () => {
    return (
        <div className="App">
            <Toolbar />
            <Header />
            <h1>Items List from https://kbs-api.onrender.com/</h1>
            <ItemList />
        </div>
    );
};

export default App;