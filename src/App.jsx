import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AddProduct from './components/AddProduct'
import Display from './components/Display'
import Update from './components/Update'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<AddProduct/>}/>
      <Route exact path='/display' element={<Display/>}/>
      <Route exact path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
      {/* <AddProduct/>
      <Display/> */}
    </>
  )
}

export default App
