import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: ''
        }
    }

    changeState(term) {
        this.setState({
            query: term
        })
    }

    render() {
        const changeState = (term) => {
            this.changeState(term)
            console.log(this)
        }
        return (
            <div className="live-search">
            <SearchForm onSearchTermChange={changeState} />
            <CharacterCount count={this.props.characters.length} />
            <CharacterList characters={this.props.characters} query={this.state.query}/>
        </div>
        )
    };
}
