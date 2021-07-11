import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';


const prepareStateFromWord = (given_word) => {
    let word = given_word[0]
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false,
        end: false
    }
}

export default function WordCard(props) {
    const [state, setState] = useState(prepareStateFromWord(props.newWord()))


    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        setState({...state, guess})
        if(guess.length === state.word.length){
            if(guess === state.word){
                console.log('yeah!')
                setState({...state, completed:true})
            }
            else if(state.attempt === 5){
                setState(prepareStateFromWord(props.newWord()))
            }
            else if(guess !== state.word){
                console.log('reset, next attemp')
                console.log(state.attempt)
                setState({...state, guess: '', attempt: state.attempt+1})
            }
            
        }
    }
    const playAgain = () =>{
        setState(prepareStateFromWord(props.newWord()))
    }

    const endGame = () =>{
        setState({...state, end: true})
    }

    if(!state.completed) 
        return(
            <div>
                <br/>
                <div className="center">You have only {6 - state.attempt} time to guess this word</div>
                {state.chars.map((c, i) => <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt} completed={state.completed}/>)}
            </div>
        );
    else if(state.completed && !state.end) 
        return(
            <div className="center">
                <br/>
                it's completed do you wanna play again
                <div>
                    <span className="card" onClick={playAgain}>yes</span> <span className="card"  onClick={endGame}>no</span>
                </div>
            </div>
        )
    else if(state.completed && state.end) 
        return(
            <div className="center">
                <br/>
                Goodbye see you later !!!
            </div>
        )
}