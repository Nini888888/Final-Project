// ============================
// Mobile menu button
// ============================
var menuBtn = document.getElementById("menu-btn");
var navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

// ============================
// Add to cart buttons
// ============================
var cartCount = 0;
var cartCountText = document.getElementById("cart-count");
var addButtons = document.querySelectorAll(".add-to-cart");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function () {
    cartCount = cartCount + 1;
    cartCountText.textContent = cartCount;

    this.textContent = "Added!";
    var button = this;

    setTimeout(function () {
      button.textContent = "Add to Cart";
    }, 1200);
  });
}

// ============================
// Contact form validation
// ============================
var form = document.getElementById("contact-form");
var formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.length < 2) {
    formMessage.textContent = "Please enter your name.";
    formMessage.className = "error-message";
    return;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.className = "error-message";
    return;
  }

  if (message.length < 10) {
    formMessage.textContent = "Please write a longer message.";
    formMessage.className = "error-message";
    return;
  }

  // If everything is correct, show a success message
  formMessage.textContent = "Thank you " + name + "! We will reply to " + email + " soon.";
  formMessage.className = "success-message";
  form.reset();
});