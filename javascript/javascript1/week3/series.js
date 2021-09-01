const seriesDurations = [
    {
      title: "Friends",
      days: 4,
      hours: 12,
      minutes: 10,
    },
    {
      title: "Family Guy",
      days: 15,
      hours: 13,
      minutes: 16,
    },
    {
      title: "House",
      days: 9,
      hours: 21,
      minutes: 58,
    },
  ];
  function countHoursOfWatching() {
    let sumOfTheTotalTime;
    for (let i = 0; i < seriesDurations.length; i++) {
        let currentDuration = 0;
        let averageLife = 0;
        averageLife = convertYearsToMinutes(seriesDurations[i].years);
        currentDuration += (convertHoursToMinutes(seriesDurations[i].hours));
        currentDuration += (convertDaysToMinutes(seriesDurations[i].days));
        const timeWastedInPercentage = (currentDuration / averageLife) * 100;
        console.log(`${seriesDurations[i].title} took ${parseFloat(timeWastedInPercentage).toFixed(4)}% of my life`);
        sumOfTheTotalTime += timeWastedInPercentage;
        console.log(currentDuration);
        console.log(averageLife);
    }
    console.log(sumOfTheTotalTime);
    
  }

  function convertHoursToMinutes(hours) {
      return Math.floor(hours * 60);
  }

  function convertDaysToMinutes(days) {
    return Math.floor(days * 1440);
}

function convertYearsToMinutes(years) {
    return Math.floor(years * 525600);
}

//Friends series took 0.01% of my life
//Family Guy took 0.012% of my life
//House took 0.007% of my life
//In total that is 0.2% of my life