import React from 'react';

export default class Form extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            bookName: '',
            author: '',
            year: '',
            modal: false
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }

    showModal = () => {
        this.setState({
            modal: true
        })
    }

    hideModal = () => {
        this.setState({
            modal: false
        })
    }

    submitForm = () => {
        const { handleSubmit } = this.props;

        handleSubmit(this.state)
        this.setState({
            bookName: '',
            author: '',
            year: ''
        })
    }

    render() {
        const { bookName, author, year, modal } = this.state;

        const showModal = modal === false ? 'display-none' : 'display-block modal';

        return(
            <div>
                <button 
                    className='accent-button float-right'
                    onClick={this.showModal}
                    
                >
                    Add Book
                </button>

                <div className={showModal}>
                    <div className={showModal}></div>
                    <div className='modal-main'>
                        <span
                            className='cancel'
                            onClick={this.hideModal}
                        >
                                &times;
                        </span>
                        <div className='title is-flex'>
                            <h2 className='add-title'>Add Your Best Book</h2>
                        </div>

                        <form>
                            <label>Book Name</label>
                            <input
                                type='text'
                                name='bookName'
                                value={bookName}
                                placeholder="Name Of Book"
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
                                placeholder="Year Of Book"
                                onChange={this.handleChange}
                            />

                            <input
                                className='accent-button float-right'
                                type='button'
                                value='Submit'
                                onClick={this.submitForm}
                            />
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}