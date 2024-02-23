const priceRange = document.querySelector("#price-range");
const priceLabel = document.querySelector(".amount");
const pageviewsLabel = document.querySelector("#pageviews");
const monthlyYearlySwitch = document.querySelector("#fs");

const setPage = () => {
  priceRangeValue = priceRange.value;
  pageviewsLabel.textContent = priceRangeValue;
  priceLabel.textContent = monthlyYearlySwitch.checked
    ? parseFloat(priceRangeValue * 0.12).toFixed(2)
    : parseFloat(priceRangeValue * 0.16).toFixed(2);
  const progress = (priceRangeValue / priceRange.max) * 100;
  priceRange.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${progress}%, hsl(223, 48%, 87%) ${progress}%)`;
};

priceRange.addEventListener("input", setPage);
monthlyYearlySwitch.addEventListener("change", setPage);
window.addEventListener("DOMContentLoaded", setPage);
