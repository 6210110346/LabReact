import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false
    }
}

export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.value))


    const activationHandler = (c,a) => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        console.log(guess)
        setState({...state, guess})
        if(guess.length === state.word.length){
            if(guess === state.word){
                console.log('yeah!')
                setState({...state, completed:true})
            }
            else{
                console.log('reset, next attemp')
                setState({...state, guess: '', attempt: state.attempt+1})
            }
        }
    }


    return (
        <div>
            {state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)}
        </div>
    );
}