import { useState } from 'react';
import './App.css';

import { Input } from './Components/Input';

const App = () => {

  const [apartmentName, setApartmentName] = useState('');

  const handleChange = (e : any) => {

    setApartmentName(e.target.value)

  }


  return (

    <main className="App">

      <Input
      PlaceHolder = "Enter Apartment Name"
      onChange = {(e : any) => handleChange(e)}
      />

      <h1>{apartmentName}</h1>
    </main>

  );


}

export default App;
