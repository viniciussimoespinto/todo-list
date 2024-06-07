import ListItem from './components/ListItem'
import { useState } from 'react'
import * as C from './App.styles'
import {Item} from './types/item'
import AddArea from './components/AddArea'


function App() {
const [list,setList] = useState<Item[]>([
  {id:1, name: 'Comprar pão', done: false},
  {id:2, name: 'Comprar leite', done: true},
])

const handleAddTask = (taskName:string)=>{
  let newList = [...list]
  newList.push({
    id:list.length + 1,
    name: taskName,
    done:false
  })
  setList(newList)
}
  return (

       <C.Container >
        <C.Area>
          <C.Header>
            <p>Lista de Tarefas</p>

          </C.Header>
          <AddArea onEnter={handleAddTask}/>
          {list.map((item,id)=>(
          <ListItem key={id} item={item}/>
          ))}

        </C.Area>
       </C.Container>

  )
}

export default App
