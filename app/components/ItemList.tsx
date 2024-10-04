'use client';

import { useEffect, useState } from 'react';

interface Item {
    id: number;
    name: string;
}

const ItemList = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [newItemName, setNewItemName] = useState<string>(''); // State for new item name

    const fetchItems = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data);
    };

    const addItem = async () => {
        if (!newItemName.trim()) return; // Prevent adding empty items

        const newItem = { name: newItemName.trim() }; // Use the input value for the new item
        await fetch('/api/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        });
        setNewItemName(''); // Clear the input after adding the item
        fetchItems(); // Refresh the item list
    };

    const deleteItem = async (id: number) => {
        await fetch('/api/items', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });
        fetchItems(); // Refresh the item list
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className="item-list-container">
            <h1></h1>
            <input 
                type="text" 
                placeholder="Enter your do list" 
                value={newItemName} 
                onChange={(e) => setNewItemName(e.target.value)} // Update input state
                className="item-input"
            />
            <button className="add-item-button" onClick={addItem}>
                Add list 
            </button>
            <ul className="item-list">
                {items.map(item => (
                    <li key={item.id} className="item">
                        {item.name} 
                        <button className="delete-button" onClick={() => deleteItem(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
