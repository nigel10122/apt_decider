import { LineBreak } from "../../Styles/LineBreak";
import "./Apartment.css"


const Apartment = (props : any) => {

    return(

        <form onSubmit={props.onSubmit}>
            <input type="text" name="apartmentName" placeholder={props.PlaceHolder}></input>
            <LineBreak/>
            <input type="submit" placeholder="submit"></input>
        </form>

    );
   


}

export { Apartment };