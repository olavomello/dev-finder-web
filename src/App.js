import React, { useState, useEffect } from 'react';
import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

function App() {
  const [ github_username, setGithubUsername ] = useState("");
  const [ techs, setTechs ] = useState("");
  const [ latitude, setLatitude ] = useState("");
  const [ longitude, setLongitude ] = useState("");

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
          console.log(err);
      },
      {
        timeout:30000,
      }
    )
  }, [] );


  // Submit
  async function handleAddDev(e){
    e.preventDefault();

    
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              name="github_username" 
              id="github_username" 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>
          <div className="input-block">
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                  type="number"
                  name="latitude" 
                  id="latitude" 
                  value={latitude} 
                  required 
                  onChange={e => setLatitude(e.target.value)}
                />              
              </div>
              <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                  type="number"
                  name="longitude" 
                  id="longitude" 
                  value={longitude} 
                  required 
                  onChange={e => setLongitude(e.target.value)}
                />           
              </div>              
            </div>
            </div>
          <div className="input-block">
            <button type="submit">Salvar</button> 
          </div>                 
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/640081?s=120&v=4" alt="Olavo Mello"/>
              <div className="user-info">
                <strong>Olavo Mello</strong>
                <span>ReactJS, React Native, Node.js</span>
                <p>Bio do usuario</p>
                <a href="">Acessar perfil no Github</a>
              </div>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/640081?s=120&v=4" alt="Olavo Mello"/>
              <div className="user-info">
                <strong>Olavo Mello</strong>
                <span>ReactJS, React Native, Node.js</span>
                <p>Bio do usuario</p>
                <a href="">Acessar perfil no Github</a>
              </div>
            </header>
          </li>          
        </ul>
      </main>
    </div>
  );
}

export default App;