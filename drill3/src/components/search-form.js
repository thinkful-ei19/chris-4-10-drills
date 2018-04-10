import React from 'react';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }
    }
    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="search">Search</label>&emsp;
                <input
                    aria-controls="character-count"
                    type="search"
                    id="search"
                    name="search"
                    placeholder="Dale Cooper"
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </form>
        );
    }
    
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}