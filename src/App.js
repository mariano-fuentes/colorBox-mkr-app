import React,{ useState } from 'react';
import NewBoxForm from './components/newBoxForm/NewBoxForm';
import BoxList from './components/boxList/BoxList';

import './App.css';

function App() {
  const [arrBoxes, setArrBoxes]=useState([])
  
  const addItem= (item) => {
    setArrBoxes([
      ...arrBoxes,
      {
        height: item.height,
        width: item.width,
        color: item.color,
        id: Math.floor(Math.random()*1000000)
      }
    ])
  }

  const removeItem= (e) => {
    const origin= Number(e.target.getAttribute('id'))
    const filteredBoxes= arrBoxes.filter((box)=>{
      return box.id !== origin ? box : null;
    })
    setArrBoxes([ ...filteredBoxes ])
  }

  return (
    <div className="App">
      <NewBoxForm
        addItem={addItem}
      ></NewBoxForm>
      <BoxList 
        arrBoxes={arrBoxes}
        removeItem={removeItem}
      ></BoxList>
    </div>
  );
}

export default App;
