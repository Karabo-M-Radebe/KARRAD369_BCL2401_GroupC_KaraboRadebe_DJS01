/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Function that converts the units of measurement from meters to kilometers and from seconds to hours 
function unitConversion (acc, time) {
  const accInKmH = acc*3.6;  //(Km/h)
  const timeInHr = time/3600; // hours

  return {accInKmH, timeInHr}  
}

const {accInKmH, timeInHr} = unitConversion(acc, time); //called the variables to the global scope so that I could use them as arguments  

const d2 = d + (vel*timeInHr) //calcultes new distance - and I had to make sure it is in the correct unit of measurement 
const rf = fuel - (fbr*time) //calculates remaining fuel
const vel2 = calcNewVel(vel, accInKmH, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel (vel, accInKmH, time) { 
  return vel + (accInKmH*time)
}

// try catch block that checks whether the calNewVel function uses the correct unit of measurement and throws and error if false
try {
  if (calcNewVel() !== vel + (accInKmH*time)) {
    throw new Error("incorrect unit of measurement")
  } 
} catch (error) {
  console.error(`Error: ${error.message}`)
}

console.log(accInKmH)
console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






