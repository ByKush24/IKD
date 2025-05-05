const form = document.getElementById("membershipForm");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const tcKimlik = document.getElementById("tcKimlik");
const ad = document.getElementById("ad");
const soyad = document.getElementById("soyad");
const dogumTarihi = document.getElementById("dogumTarihi");
const cinsiyetRadios = document.querySelectorAll('input[name="cinsiyet"]');
const meslek = document.getElementById("meslek");
const adres = document.getElementById("adres");
const telefon = document.getElementById("telefon");
const submitButton = form.querySelector('button[type="submit"]');

// List of required input fields (excluding checkboxes and radio which need special handling)
const requiredInputs = [
  tcKimlik,
  ad,
  soyad,
  dogumTarihi,
  meslek,
  adres,
  telefon,
];
console.log("JavaScript is working!");
function checkFormValidity() {
  let isFormValid = true;

  // 1. Check checkboxes
  if (!checkbox1.checked || !checkbox2.checked) {
    isFormValid = false;
  }

  // 2. Check required text/date/tel inputs
  requiredInputs.forEach((input) => {
    if (!input.value.trim()) {
      isFormValid = false;
    }
  });

  // 3. Check if a gender radio button is selected
  let genderSelected = false;
  cinsiyetRadios.forEach((radio) => {
    if (radio.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    isFormValid = false;
  }

  // 4. Check phone number pattern validity (optional, but good practice)
  if (!telefon.checkValidity()) {
    isFormValid = false;
  }

  // Enable/disable the button based on validity
  submitButton.disabled = !isFormValid;
}

// Add event listeners to all relevant elements
checkbox1.addEventListener("change", checkFormValidity);
checkbox2.addEventListener("change", checkFormValidity);
requiredInputs.forEach((input) => {
  input.addEventListener("input", checkFormValidity);
});
cinsiyetRadios.forEach((radio) => {
  radio.addEventListener("change", checkFormValidity);
});

// Initial check when the page loads
checkFormValidity();

// Optional: Prevent form submission if button is somehow enabled incorrectly
// or if you want to add more complex validation before actual submission
form.addEventListener("submit", function (event) {
  checkFormValidity(); // Final check before submitting
  if (submitButton.disabled) {
    event.preventDefault(); // Stop submission if form is invalid
    console.log(
      "Form submission prevented. Please fill all required fields correctly."
    );
    // Optionally, display a user-friendly message here
  } else {
    console.log("Form submitted (or would be submitted if action was set).");
    // Here you would typically handle the form submission,
    // e.g., using Fetch API to send data to a server.
    // event.preventDefault(); // Uncomment this if you handle submission via JS (AJAX)
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Check if the form is valid on page load
  mainPage = document.querySelector(".main1");
  // this page is inserted on  a wordpress page so it's like main wordpres page <html class="wp-page"> <html class="main1"> </html> </html>
  // wp-page is not real I just added it to show that this page is inserted on a wordpress page ignore it. Also wp-page is made display:none to hide the default template of the page
  // to bypass to wp html thus it's template restriction to show our own html page we need to pull the main1 out from the wp-page and put above it
  // so let's start by putting the main1 out from the wp-page and put it above it
  // so we need to put it above the wp-page and then remove the wp-page
  // so let's do that
});
