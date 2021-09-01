const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function calculation() {
    const timePeriod = travelInformation.destinationDistance / travelInformation.speed;
    const minute = Math.floor((timePeriod % 1) * 60);
    const hours = Math.floor(timePeriod);
    console.log(hours +["Hours and "] + minute + ["Minuets "+ "."]);
  } 
  const travelTime = calculation(travelInformation);
