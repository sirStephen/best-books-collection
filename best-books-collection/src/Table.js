import React from 'react';

const TableHeader = () => 
    <thead>
        <tr>
            <th>Your Name</th>
            <th>Name Of Your Best Book</th>
            <th>Author's Name</th>
            <th>Year</th>
        </tr>
    </thead>

const TableBody = ({ characterData, removeCharacter }) => {
    const rows = characterData.map((row, index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.bookName}</td>
                <td>{row.author}</td>
                <td>{row.year}</td>
                <td>
                    <button onClick={() => removeCharacter(index)}>
                        Delete
                    </button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

export default class Table extends React.Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        
        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                />    
            </table>
        )
    }
}