import React, { useEffect, useState } from 'react';
import { getItems } from '../api/itemsApi';  // Make sure this function works correctly
import '../styles/styles.css';  // Ensure CSS file is loading correctly

const ItemsList = () => {
    const [items, setItems] = useState([]);  // State for storing items
    const [loading, setLoading] = useState(true);  // State for loading status
    const [error, setError] = useState(null);  // State for errors

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await getItems();
                setItems(data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="items-container">
                <ul className="items-list">
                    {items.map((item) => (
                        <li key={item.id} className="item">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
        </div>
    );
};


export default ItemsList;
