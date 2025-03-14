
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import HomeContent from './componenets/HomeContent'
import Projects from './componenets/Projects'
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Home/>}>
    <Route index element={<HomeContent/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Projects' element={<Projects/>}/>
  </Route>
  
))
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
