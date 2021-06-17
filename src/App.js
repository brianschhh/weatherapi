import React, { useState } from 'react';
import './App.css';
import CardComponent from './components/card'
import Header from './components/Header'

function App() {
  const [data, setData] = useState({});
  
  
  React.useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=9e72f6e3ff1d4141f899331e1102e50c'
      )
        .then((res) => res.json ())
        .then((dataApi) => setData(dataApi));
  })

  return (
    <div className='container'>
      <Header/>
    <CardComponent data={data}/>
    </div>
  );
}

export default App;
