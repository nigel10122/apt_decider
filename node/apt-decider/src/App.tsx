import { useState } from 'react';
import './App.css';

import { Apartment } from './Components/Apartment/Apartment';
import { DisplayBox } from './Components/Conditional/ProsandCons/DisplayBox';
import { LineBreak } from './Styles/LineBreak';

const App = () => {

  const [apartment, setApartment] = useState('');
  const [aptInput, setAptInput] = useState('');
  const [proInput, setProInput] = useState('');
  const [conInput, setConInput] = useState('');
  const [proArr, setPros] = useState<any>([]);
  const [conArr, setCons] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  const handleAptInputChange = (e : any) => {

   setAptInput(e.target.value);

  }

  const handleProsInputChange = (e : any) => {

    setProInput(e.target.value);
 
   }

   const handleConsInputChange = (e : any) => {

    setConInput(e.target.value);
 
   }

  const handleAptNameSubmit = (e : any) => {

    e.preventDefault();

    setApartment(e.target.apartmentName.value); 

    setAptInput('');

  }

  const handleProsSubmit = (e : any) => {

    e.preventDefault();

    setPros([...proArr, e.target.pro.value]);

    setProInput('');

  }

  const handleConsSubmit = (e : any) => {

    e.preventDefault();

    setCons([...conArr, e.target.con.value]);

    setConInput('');

  }

  const onDoneMakeEntry = (e : Event) => {

    e.preventDefault();

    let newApt = {
    
      aptName : apartment,
      pros : proArr,
      cons : conArr
    }

    setData([...data, newApt]);

    setApartment('');
    setPros([]);
    setCons([]);

  } 



  return (

    <main className="App">

      <Apartment
      PlaceHolder = "Enter Apartment Name"
      onSubmit = {(e : any) => handleAptNameSubmit(e)}
      onChange = {(e : any) => handleAptInputChange(e)}
      aptVal = {aptInput}
      />


     <LineBreak/>

      
     <DisplayBox
     Apartment = {apartment}
     aptName = {apartment}
     onSubmitPro = {(e : any) => handleProsSubmit(e)}
     onSubmitCon = {(e : any) => handleConsSubmit(e)}
     onDone = {(e : Event) => onDoneMakeEntry(e)}
     onChangePro = {(e : any) => handleProsInputChange(e)}
     onChangeCon = {(e : any) => handleConsInputChange(e)}
     proVal = {proInput}
     conVal = {conInput}/>


    <p>{JSON.stringify(data)}</p>

    </main>


  );
     

}

export default App;
