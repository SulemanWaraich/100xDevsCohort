import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Blog from './components/Blog'
import BlogEditor from './components/CreateBlog'
import HomePage from './components/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/createpost' element={< BlogEditor/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
