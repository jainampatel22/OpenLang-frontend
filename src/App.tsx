
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Projects from './pages/Projects'
import Repository from './pages/Repository'
import HomeTest from './components/Hero'
import OpenSource from './pages/OpenSource'
function App() {


  return (
    <>
    
<BrowserRouter>
<Routes>

  <Route path='/repos' element={<Projects/>}/>
  <Route path="/repos/:language" element={<Repository />} />
<Route path='/' element={<HomeTest/>}/>
<Route path='/issues' element={<OpenSource/>}/>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
