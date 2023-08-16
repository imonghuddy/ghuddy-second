import { Outlet } from 'react-router-dom'
import './App.css'
import Categories from './components/categories/Categories'

function App() {
  

  return (
    <>
    <Categories></Categories>
      <Outlet></Outlet>
    </>
  )
}

export default App
