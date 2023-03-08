import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Application } from './components/app/app'
// import { BurgerIngredient } from './components/burger-ingredient';
// import { IngredientDetails } from './components/ingredient-details';
// import { Modal } from './components/modal';
// import { ModalOverlay } from './components/modal-overlay';
// import { OrderDetails } from './components/order-details';


function App() {

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>   
        
               
      </header> */}

     <Application />     
     {/* <BurgerIngredient />     
     <IngredientDetails />
     <OrderDetails />
     <Modal />
     <ModalOverlay /> */}

    </div>
    
  );
}

export default App;
