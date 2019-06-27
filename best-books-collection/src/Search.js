import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			search: ''
		}
	}

	handleSearch = (event) => {
		const { name, value } = event.target;
		
		this.setState({
			[name]: console.log(value)
		})
	}

	render() {
		const { search } = this.state;

		return(
			<form className='search-form'>
				<div className='search-container'>
					<input 
						name='search'
						type='text'
						className='search-input'
						value={search}
						onChange={this.handleSearch}
						placeholder='Search...'
					/>
					<i className="fas fa-search search-icon has-green"></i>
				</div>
			</form>
		)
	}
}

// brotherhood - youtube