import React from 'react';
import ItemList from './components/ItemList';

const App = () => {
    return (
        <div className="App">
            <h1>Items List from https://kbs-api.onrender.com/</h1>
            <ItemList />
        </div>
    );
};

export default App;