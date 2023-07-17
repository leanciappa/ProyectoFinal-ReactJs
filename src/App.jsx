import Navbar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './components/Error404'

function App () {

  return (
    <BrowserRouter>
      <div >
        <Navbar />
          
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="category/:id" element={<ItemListContainer />} />     
          <Route path="item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error404 />}/>


        </Routes>
      </div>
    
    </BrowserRouter>
    
    
    
    
    
  )
}

export default App





























