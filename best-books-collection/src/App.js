import React from 'react';
import Table from './Table';
import Form from './Form';

export default class App extends React.Component {
    state = {
        characters: [
            {
                name: 'Gregory',
                bookName: 'The Rational Male',
                author: 'Rollo Tomasi',
                year: 2013
            },
            {
                name: 'Charlie',
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
        return(
            <div className='container'>
                <Table 
                    characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}