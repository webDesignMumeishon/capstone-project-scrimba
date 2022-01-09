import React from 'react';
import Header from './components/Header';
import './App.css';
import Photos from './pages/Photos';
import Cart from './pages/Cart';
import { Route, Routes as Switch} from "react-router";


function App() {
  return (
      <div>
        <Header/>
        <Switch>
          <Route path="/" element={<Photos/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Switch>
      </div>
  );
}

export default App;
