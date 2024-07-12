// Problem 2: Speed Detector

function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerDemerit = 1;
    let demeritPoints = 0;
  
    
    if (typeof speed !== 'number' || isNaN(speed) || speed < 0) {
      return "Invalid input. Please enter a valid speed in km/h.";
    }
  
   // Determine if speed is within limit or over
    if (speed < speedLimit) {
      return "Ok";
    } else {
          
    const kmOverLimit = speed - speedLimit;

    const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint);

    console.log(`Points: ${demeritPoints}`);

    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return `Points: ${demeritPoints}`;
    }
  }
}
      