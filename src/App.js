import './App.css';

import WordCard from './WordCard';
function App() {
  const randomWord = require('random-words')
  const newWord = () =>{
    return randomWord({exactly: 1,maxLength: 4})
  }
  return (
    <div>
      <WordCard newWord={newWord}/>
    </div>
  );
}
export default App;
