
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Projects from './pages/Projects'
import Repository from './pages/Repository'
import HomeTest from './components/Hero'
import { Analytics } from "@vercel/analytics/react"
function App() {


  return (
    <>
    
<BrowserRouter>
<Routes>

  <Route path='/projects' element={<Projects/>}/>
  <Route path="/repos/:language" element={<Repository />} />
<Route path='/' element={<HomeTest/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
