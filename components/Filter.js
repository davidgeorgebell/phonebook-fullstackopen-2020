import React from 'react'



export const Filter = ({ filteredName, handleFilter }) => {
    return (
        <div>Search filter: <input value={filteredName} onChange={handleFilter} /></div>
    );
}