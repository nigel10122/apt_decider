import { LineBreak } from '../../Styles/LineBreak'
import './Pros.css'

const Pros = (props : any) => {

    return(
    <div>
        <form onSubmit={props.onSubmit}>
            <input className = 'pros' type='text' name='pro' value={props.proVal} onChange = {props.proOnChange} placeholder={props.placeHolder}></input>
            <LineBreak/>
            <input type="submit" placeholder="submit"></input>
        </form>
    </div>
    );


 

}


export {Pros}