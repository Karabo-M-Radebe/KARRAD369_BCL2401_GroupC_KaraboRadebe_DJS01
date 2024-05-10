/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocityocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate  = 0.5; // fuel burn rate (kg/s)

// Function that converts the units of measurement from meters to kilometers and from seconds to hours 
function unitConversion (acceleration, time) {
  const accelerationInKmH = acceleration*3.6;  //(Km/h)
  const timeInHr = time/3600; // hours

  return {accelerationInKmH, timeInHr}  
}

const {accelerationInKmH, timeInHr} = unitConversion(acceleration, time); //called the variables to the global scope so that I could use them as arguments  

const newDistance = distance + (velocity*timeInHr) //calcultes new distance - and I had to make sure it is in the correct unit of measurement 
const remainingFuel = fuel - (fuelBurnRate*time) //calculates remaining fuel
const velocity2 = calcNewVelocity(velocity, accelerationInKmH, time) //calculates new velocityocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVelocity (velocity, accelerationInKmH, time) { 
   
// try catch block that checks whether the calNewvelocity function uses the correct unit of measurement and throws and error if false
try {
  const velocity2 = velocity + (accelerationInKmH*time);

  if (velocity2 !== velocity + (accelerationInKmH*time)) {
    throw new Error("incorrect unit of measurement")
  }  

  return velocity2;
} catch (error) {
  console.error(`Error: ${error.message}`);
  throw error;
}}

console.log(`Corrected New velocity: ${velocity2} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






