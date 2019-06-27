import React from 'react';
import Table from './Table';
import Form from './Form';
import Search from './Search';

export default class App extends React.Component {
    state = {
        characters: [
            {
                bookName: 'The Rational Male',
                author: 'Rollo Tomasi',
                year: 2013
            },
            {
                bookName: 'Two Year Eight Months and Twenty - Eight Night',
                author: 'Salmon Rushdie',
                year: 2015
            }
        ]
    }

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = (character) => {
        const { characters } = this.state;

        this.setState({
            characters: [...characters, character]
        })
    }
    
    render() {
        const { characters } = this.state;

        return(
            <div className='container'>
                <div className='is-flex space-between p-8'>
                    <h1 className='has-green no-margin'>Collection of Best Books</h1>
                    <Search 
                        characterData={characters}
                    />
                </div>

                <p className='no-margin p-8'>Add a character and book details</p>
                
                <Table 
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}