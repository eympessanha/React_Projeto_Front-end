import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Contato from './paginas/Contato'

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App