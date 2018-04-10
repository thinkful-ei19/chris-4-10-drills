import React from 'react';

export default function CharacterList(props) {
    console.log(props);
    const filterCharacters = props.characters.filter((character) => {
        if (character.name.toLowerCase().indexOf(props.query) >= 0) {
            return character
        }
    })
    const characters = filterCharacters.map((character, index) => 
        <li key={index}>
            <strong>{character.name}</strong> ({character.actor}) - {character.description}
        </li>
    );
    return (
        <ul className="character-list">
            {characters}
        </ul>
    );
}
