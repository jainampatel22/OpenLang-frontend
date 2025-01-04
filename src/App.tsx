
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Repository from './pages/Repository'

function App() {


  return (
    <>
    
<BrowserRouter>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/projects' element={<Projects/>}/>
  <Route path="/repos/:language" element={<Repository />} />
  
</Routes>
</BrowserRouter>
</>
  )
}

export default App
