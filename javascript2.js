const phoneInput = document.getElementById('Phone');

// Initialize the intlTelInput plugin
const iti = window.intlTelInput(phoneInput, {
    separateDialCode: true,
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
});

// Listen for changes to the phone input value
phoneInput.addEventListener('change', function () {
    const phoneNumber = iti.getNumber();
    console.log(phoneNumber); // You can use the phone number in your code
});