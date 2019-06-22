import React from 'react';

const TableHeader = () => 
    <thead>
        <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Year</th>
            <th>Delete</th>
        </tr>
    </thead>

const TableBody = ({ characterData, removeCharacter }) => {
    const rows = characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.bookName}</td>
                <td>{row.author}</td>
                <td>{row.year}</td>
                <td>
                    <button
                        className="btn-red" 
                        onClick={() => removeCharacter(index)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

export default function Table ({ characterData, removeCharacter }) {
    return (
        <div>
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />
            </table>
        </div>
    )
}