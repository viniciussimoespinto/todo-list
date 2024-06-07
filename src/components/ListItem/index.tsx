import { useState } from 'react'
import { Item } from '../../types/item'
import * as C from './styles'

type Props = {
  item: Item
}



  export default function index({item}: Props) {

    const [isChecked,setIsChecked] = useState(item.done)
  return (
    <C.Container done={isChecked}>
      <input type="checkbox" name="" id="" checked={isChecked} onChange={e => setIsChecked(e.target.checked)}/>
      <label htmlFor="">{item.name}</label>
    </C.Container>
  )
}
