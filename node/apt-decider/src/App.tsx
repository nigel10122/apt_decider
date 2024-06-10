import { useState } from 'react';
import './App.css';

import { Apartment } from './Components/Apartment/Apartment';
import { DisplayBox } from './Components/Conditional/ProsandCons/DisplayBox';
import { LineBreak } from './Styles/LineBreak';

const App = () => {

  let apartments : any = [];

  const [apartment, setApartment] = useState('');
  const [dict, setDict] = useState<any>([]);

  const handleAptNameChange = (e : any) => {

    e.preventDefault();

    let newApartment = {
      name : e.target.apartmentName.value,
      pros : [],
      cons : []
    }

    apartments.push(newApartment);
    setApartment(e.target.apartmentName.value);
    setDict(apartments);

  }


  return (

    <main className="App">

      <Apartment
      PlaceHolder = "Enter Apartment Name"
      onSubmit = {(e : any) => handleAptNameChange(e)}
      />


     <LineBreak/>

      
     <DisplayBox
     Apartment = {apartment}
     aptName = {apartment}/>

    </main>

  );
     

}

export default App;
