let booking = JSON.parse(localStorage.getItem("latestBooking"));

let container = document.getElementById("receiptDetails");

if (!booking) {
  document.getElementById("receiptDetails").innerHTML = `
    <p class="text-red-500">No booking found.</p>
  `;
} else {
  document.getElementById("receiptDetails").innerHTML = `
  <div>
    <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
    <p><strong>Passenger:</strong> ${booking.passengerName}</p>
    <p><strong>Airline:</strong> ${booking.flightAirline}</p>
    <p><strong>Flight ID:</strong> ${booking.flightId}</p>
    <p><strong>Seat:</strong> ${booking.seatNumbers}</p>
    <p><strong>Date:</strong> ${booking.flightDate}</p>
    <p><strong>Status:</strong> ${booking.paymentStatus || "Paid"}</p>
    <p><strong>Booking Time:</strong> ${booking.bookingDate}</p>
    <p><strong>Total Paid:</strong> ₦${booking.totalAmount.toLocaleString()}</p>
  </div>
  `;
  showAlert("Payment Successful 🎉", "success");
}

// Alert pop up
function showAlert(message, type = "info") {
  let alertBox = document.getElementById("alertBox");

  let alert = document.createElement("div");
  alert.className = `alert alert-${type} mb-2`;

  alert.innerHTML = `
    <span>${message}</span>
  `;

  alertBox.innerHTML = ""; // clears old alerts
  alertBox.appendChild(alert);

  // Auto remove after 3 seconds
  setTimeout(() => {
    alert.remove();
  }, 3000);
}

document.getElementById("Home").addEventListener("click", () => {
  window.location.href = "index.html";
});
