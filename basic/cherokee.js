
function population(startingPopulation, birthRate, numberOfWeeks){
  return (startingPopulation * (1 + birthRate) * numberOfWeeks);
}

module.exports = population;
