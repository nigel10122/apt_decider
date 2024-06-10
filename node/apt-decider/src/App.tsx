import { useState } from 'react';
import './App.css';

import { Apartment } from './Components/Apartment/Apartment';
import { DisplayBox } from './Components/Conditional/ProsandCons/DisplayBox';
import { LineBreak } from './Styles/LineBreak';

const App = () => {

  const [apartment, setApartment] = useState('');
  const [pros, setPros] = useState<any>([]);
  const [cons, setCons] = useState<any>([]);

  const handleAptNameChange = (e : any) => {

    e.preventDefault();

    setApartment(e.target.apartmentName.value); 

  }

  const handlePros = (e : any) => {

    e.preventDefault();

    setPros([...pros, e.target.pro.value]);

  }

  const handleCons = (e : any) => {

    e.preventDefault();

    setCons([...cons, e.target.con.value]);

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
     aptName = {apartment}
     onSubmitPro = {(e : any) => handlePros(e)}
     onSubmitCon = {(e : any) => handleCons(e)}/>

     <h5> Pros : {JSON.stringify(pros)}</h5>

     <h5> Cons : {JSON.stringify(cons)}</h5>

    </main>


  );
     

}

export default App;
