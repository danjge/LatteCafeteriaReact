/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  
  return (
     <div className="App">
      <NavBar />
      <ItemListContainer welcomeMessage="Hola profe, soy un componente react!"/>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
      </Routes>

     </div>
  )
}

export default App
