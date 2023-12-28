import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import { data } from './cards'


function App() {
  const [count, setCount] = useState(0)

  data

  console.log(data)

  return (
    <>
    {data.map((el,i) => {
      return(
      <Card
      key={i}
      img = {el.img}
      name = {el.name}
      desc={el.desc}
      color={el.color}
      
      />)
    })}
    
    </>

    
  )
}

export default App
