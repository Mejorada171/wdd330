import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("registrationModal");
    const closeButton = document.querySelector(".close-button");
    const registerButton = document.getElementById("registerNow");
  
    // Check if the user is visiting for the first time
    if (!localStorage.getItem("visited")) {
      modal.classList.remove("hidden");
      localStorage.setItem("visited", "true");
    }
  
    // Close modal on button click
    closeButton.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    // Navigate to the registration page on click
    registerButton.addEventListener("click", () => {
    window.location.href = window.location.origin + '/registration';
});
    });
  
