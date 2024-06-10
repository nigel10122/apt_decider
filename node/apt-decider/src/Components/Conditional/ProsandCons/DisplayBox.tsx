import { LineBreak } from '../../../Styles/LineBreak';
import { Cons } from '../../Cons/Cons';
import { Pros } from '../../Pros/Pros';
import './DisplayBox.css'

const DisplayBox = (props : any) => {

    const isAptNameExists = props.aptName.length > 0 ? true : false;

    if(isAptNameExists){

        return(
            <main className='disp-container'>
            <h3>{props.Apartment}</h3>
            <section className='flex-container'>
    
                <div className='frame'>
                    <Pros
                    placeHolder = "Enter Pro"
                    onSubmit = {props.onSubmitPro}
                    proOnChange = {props.onChangePro}
                    proVal = {props.proVal}/>
                </div>
              
                <div className='frame'>
                <Cons
                    placeHolder = "Enter Con"
                    onSubmit = {props.onSubmitCon}
                    conOnChange = {props.onChangeCon}
                    conVal = {props.conVal}/>
                </div>
            </section>
    
            <section>
                <div>
                    <form onSubmit={props.onDone}>
                        <input type='submit' value='done'></input>
                    </form>
                </div>
            </section>
    
            </main>
    
        );
     
    }
    else {
        return(
            <></>
        );
    }


   

}

export { DisplayBox };