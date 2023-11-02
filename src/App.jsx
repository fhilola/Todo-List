import './App.scss'
import Active from './components/active/Active'
import Archive from './components/archive/Archive'
import Nav from './components/navbar/Nav'
import TodoContainer from './layouts/todo-container/todoContainer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='todocontainer' element={<TodoContainer/>}/>
        <Route path='active' element={<Active/>}/>
        <Route path='archive' element={<Archive/>}/>
      </Routes>
    </>
  )
}

export default App
