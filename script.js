function calculateFare() {
  const passengers = parseInt(document.getElementById("passengers").value);
  const fare = parseFloat(document.getElementById("fare").value);
  const amountGiven = parseFloat(document.getElementById("amountGiven").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(passengers) || passengers <= 0 ||
      isNaN(fare) || fare <= 0 ||
      isNaN(amountGiven) || amountGiven <= 0) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please enter valid positive numbers.";
    return;
  }

  const totalFare = passengers * fare;

  if (amountGiven < totalFare) {
    const shortfall = totalFare - amountGiven;
    resultDiv.style.color = "red";
    resultDiv.textContent = `Insufficient amount. You still need R${shortfall.toFixed(2)}.`;
  } else {
    const change = amountGiven - totalFare;
    resultDiv.style.color = "green";
    resultDiv.innerHTML = `
      Total Fare: R${totalFare.toFixed(2)}<br>
      Change to give: R${change.toFixed(2)}
    `;
  }
}

function calculateFarePs() {
  const passengers = parseInt(document.getElementById("passengersPs").value);
  const fare = parseFloat(document.getElementById("farePs").value);
  const amountGiven = parseFloat(document.getElementById("amountGivenPs").value);

  const resultDiv = document.getElementById("resultPs");
  const changePerSeatDiv = document.getElementById("changePerSeatPs");

  // Reset display
  resultDiv.textContent = "";
  changePerSeatDiv.textContent = "";

  if (
    isNaN(passengers) || passengers <= 0 ||
    isNaN(fare) || fare <= 0 ||
    isNaN(amountGiven) || amountGiven <= 0
  ) {
    resultDiv.style.color = "red";
    resultDiv.textContent = "Please enter valid positive numbers.";
    return;
  }

  const totalFare = passengers * fare;

  if (amountGiven < totalFare) {
    const shortfall = totalFare - amountGiven;
    resultDiv.style.color = "red";
    resultDiv.textContent = `Insufficient amount. You still need R${shortfall.toFixed(2)}.`;
  } else {
    const change = amountGiven - totalFare;
    const changePerSeat = change / passengers;

    resultDiv.style.color = "green";
    resultDiv.innerHTML = `
      Total Fare: R${totalFare.toFixed(2)}<br>
      Change to give: R${change.toFixed(2)}
    `;

    changePerSeatDiv.style.color = "#333";
    changePerSeatDiv.innerHTML = `Change per seat: R${changePerSeat.toFixed(2)}`;
  }
}
