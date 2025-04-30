import Register from './pages/Register'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import HomeContent from './componenets/HomeContent'
import Projects from './componenets/Projects'
import Blog from './pages/Blog'
import {createBrowserRouter, createRoutesFromElements, RouterProvider,Route} from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Home/>}>
    <Route index element={<HomeContent/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path ='/blog' element = {<Blog/>} />
    <Route path ='/register' element = {<Register/>} />
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
