// Dropdown
const mobile_bars = document.querySelector(".mobile_bars");
mobile_bars.addEventListener("click", () => {
  document.querySelector(".main_menu").classList.toggle("open");
});

// Current Year
document.getElementById("year").innerHTML = new Date().getFullYear();
