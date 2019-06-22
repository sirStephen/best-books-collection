import React from 'react';

export default class Form extends React.Component{
    constructor(props) {
        super(props)

        this.initialState = {
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
        const { bookName, author, year } = this.state;

        return(
            <form>
                <label>Book Name</label>
                <input
                    type='text'
                    name='bookName'
                    value={bookName}
                    placeholder="Book's Name"
                    onChange={this.handleChange}
                />

                <label>Author</label>
                <input
                    type='text'
                    name='author'
                    value={author}
                    placeholder="Author's Name"
                    onChange={this.handleChange}
                />

                <label>Year</label>
                <input
                    type='number'
                    name='year'
                    value={year}
                    placeholder="Year's Book"
                    onChange={this.handleChange}
                />

                <input
                    className='accent-button'
                    type='button'
                    value='Submit'
                    onClick={this.submitForm}
                />
            </form>
        )
    }
}