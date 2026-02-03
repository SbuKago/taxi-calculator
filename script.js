function calculateFare() {
      const passengers = parseInt(document.getElementById("passengers").value);
      const fare = parseFloat(document.getElementById("fare").value);
      const amountGiven = parseFloat(document.getElementById("amountGiven").value);
      const totalFare = passengers * fare;
      const change = amountGiven - totalFare;

      if (!isNaN(change)) {
        document.getElementById("result").innerText = `Total Fare: R${totalFare.toFixed(2)}, Change: R${change.toFixed(2)}`;
      } else {
        document.getElementById("result").innerText = "Please enter valid numbers.";
      }
    }

    // Per Seat Fare Calculation
    function calculateFarePs() {
      const passengers = parseInt(document.getElementById("passengersPs").value);
      const fare = parseFloat(document.getElementById("farePs").value);
      const amountGiven = parseFloat(document.getElementById("amountGivenPs").value);
      const totalFare = passengers * fare;
      const change = amountGiven - totalFare;
      const changePerSeat = change / passengers;

      if (!isNaN(changePerSeat)) {
        document.getElementById("resultPs").innerText = `Total Fare: R${totalFare.toFixed(2)}, Change: R${change.toFixed(2)}`;
        document.getElementById("changePerSeatPs").innerText = `Change per Seat: R${changePerSeat.toFixed(2)}`;
      } else {
        document.getElementById("resultPs").innerText = "Please enter valid numbers.";
        document.getElementById("changePerSeatPs").innerText = "";
      }
    }