import "./Input.css"


const Input = (props : any) => {

    return(

        <form>
            <input type="text" placeholder={props.PlaceHolder} onChange={props.onChange}></input>
        </form>

    );
   


}

export { Input };