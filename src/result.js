let flights = JSON.parse(localStorage.getItem("results")) || [];

let container = document.getElementById("results");

if (flights.length === 0) {
  container.innerHTML = "<p>No flights found.</p>";
}

flights.forEach((flight) => {
  let card = document.createElement("div");

  card.className = "flight-card";

  card.innerHTML = `
  <div class="flight-info">
  <h3 class="text-4xl">${flight.airline}</h3>
  <p><strong>${flight.origin} → ${flight.destination}</strong></p>
  <p><strong>Time: ${flight.departureTime} - ${flight.arrivalTime}</strong></p>
  </div>

  <div class="flex flex-col justify-between items-center gap-5">
  <p class="flight-price">₦${flight.price}</p>
  <button class="flight-btn">Select Seat</button>
  </div>
  `;

  card.querySelector("button").addEventListener("click", () => {
    // ✅ Save selected flight
    localStorage.setItem("selectedFlight", flight.id);

    // ✅ CLEAR previously selected seats
    localStorage.removeItem("selectedSeats");

    // (optional but smart)
    localStorage.removeItem("latestBooking");

    window.location.href = "seats.html";
  });

  container.appendChild(card);
});
