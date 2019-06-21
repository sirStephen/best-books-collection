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

const TableBody = () => 
    <tbody>
        <tr>
            <td>Charlie</td>
            <td>Two Year Eight Months and Twenty - Eight Night</td>
            <td>Salmon Rushdie</td>
            <td>1900</td>
        </tr>
        <tr>
            <td>Gregory</td>
            <td>The Red Sari</td>
            <td>Javier Moro</td>
            <td>1900</td>
        </tr>
    </tbody>

export default class Table extends React.Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />    
            </table>
        )
    }
}