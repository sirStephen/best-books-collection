import React from 'react';

export default class Form extends React.Component{
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            bookName: '',
            author: '',
            year: ''
        }

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        const { handleSubmit } = this.props;

        handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, bookName, author, year } = this.state;

        return(
            <form>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                />

                <label>Book Name</label>
                <input
                    type='text'
                    name='bookName'
                    value={bookName}
                    onChange={this.handleChange}
                />

                <label>Author</label>
                <input
                    type='text'
                    name='author'
                    value={author}
                    onChange={this.handleChange}
                />

                <label>Year</label>
                <input
                    type='number'
                    name='year'
                    value={year}
                    onChange={this.handleChange}
                />

                <input
                    type='button'
                    value='Submit'
                    onClick={this.submitForm}
                />
            </form>
        )
    }
}