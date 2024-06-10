
import './DataDisp.css'



const DataDisp = (props : any) => {

  

    const dataSet = props.dataSet;

    const isDataSetNotEmpty = dataSet.length > 0 ? true : false;

    if(isDataSetNotEmpty){
        return(
            <table className="table">
                <tr>
                    <th>APT NAME</th>
                    <th>PROS</th>
                    <th>CONS</th>
                    <th>SCORE</th>
                </tr>
              
                {dataSet.map((data : any) => {
                    return(
                        <tr>
                        <td>{data["aptName"]}</td>
                        <td>
                            <ol>
                            {data["pros"].map((pro : any) => {
                                return(
                                    <li>{pro}</li>
                                );                           
                            })}
                        </ol>
                       </td>
                       <td>
                            <ul>
                            {data["cons"].map((con : any) => {
                                return(
                                    <li>{con}</li>
                                );
                            
                            })}
                        </ul>
                       </td>
                       <td>0</td>
                    </tr>
                    );
         
    
                })}
                
           
            </table>
        );
    }
    else{
        return(
            <>
            </>
        )
    }
  

}

export { DataDisp };