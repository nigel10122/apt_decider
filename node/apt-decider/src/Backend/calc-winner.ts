const calcWinner = (apartments : any) => {

    let winner = apartments[0];

    if(apartments.length > 1) {

        winner = apartments.reduce(function(prev : any, current: any) {
            return (prev && prev.y > current.y) ? prev : current
          });

    }
   

    return winner;
}

export { calcWinner };