import React, { useState, useEffect } from 'react';
import api from './services/api';

// CSS
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

// Components
import DevForm from "./components/DevForm";
import DevItem from "./components/DevItem";

function App() {
  const [ devs, setDevs ] = useState([]);

  // Load stored Devs
  async function loadDevs(){
    const response = await api.get("/devs");
    setDevs(response.data);
  }
  useEffect(()=>{
    loadDevs();
  },[]);

  // Submit
  async function handleAddDev( data ){
    await api.post("/devs",data);
    // Reload Devs
    loadDevs();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map( dev => (
            <DevItem key={dev._id} dev={dev} />        
          ))}          
        </ul>
      </main>
    </div>
  );
}

export default App;