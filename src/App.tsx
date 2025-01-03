
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {


  return (
    <>
    
<BrowserRouter>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/projects' element={<Projects/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
