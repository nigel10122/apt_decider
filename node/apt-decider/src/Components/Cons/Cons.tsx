import './Cons.css'

import { LineBreak } from '../../Styles/LineBreak'
import './Cons.css'

const Cons = (props : any) => {

    return(
        <div>
            <form onSubmit={props.onSubmit}>
                <input className='cons' type='text' name='con' value={props.conVal} onChange = {props.conOnChange} placeholder={props.placeHolder}></input>
                <LineBreak/>
                <input type="submit" placeholder="submit"></input>
            </form>
        </div>
        );
    
 

}


export {Cons}