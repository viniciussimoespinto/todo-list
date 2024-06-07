import { useState } from 'react'
import * as C from './styles'

type Props = {
  onEnter: (taskName: string) => void
}

export default function index({onEnter}:Props) {
  const [inputText,setInputText] = useState('');
  const handleKeyUp = (e:keybordEvent) =>{
    if(e.code === 'Enter' && inputText != ''){
        onEnter(inputText)
        setInputText('')
    }
  }

  return (
    <C.Container>
      <div className='image'>➕</div>
      <input type="text" name="" id="" placeholder='Adicione uma tarefa' value={inputText} onChange={e=>setInputText(e.target.value)}  onKeyUp={handleKeyUp}/>
    </C.Container>
  )
}
