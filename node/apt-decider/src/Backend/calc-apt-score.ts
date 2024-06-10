const calcAptScore  = (pros : [], cons : [] ) => {

    const noOfPros = pros.length;
    const noOfCons = cons.length;

    const aptScore = pros.length >= cons.length ? noOfPros - noOfCons : noOfCons - noOfPros

    
    return aptScore;
}


export {calcAptScore};