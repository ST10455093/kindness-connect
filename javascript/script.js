// JavaScript for the Kindness Connect Website

// Update the year in the footer dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select form elements
    const contactForm = document.querySelector("form");
    const donateForm = document.querySelector("#donateForm"); // Assuming the donate form has an id of 'donateForm'

    // Define fields to validate for the contact form
    const contactFields = [
        { id: "firstName", placeholder: "First Name" },
        { id: "lastName", placeholder: "Last Name" },
        { id: "phone", placeholder: "Phone Number" },
        { id: "message", placeholder: "Your Message" }
    ];

    // Define fields to validate for the donate form
    const donateFields = [
        { id: "firstName", placeholder: "First Name" },
        { id: "lastName", placeholder: "Last Name" },
        { id: "email", placeholder: "Email Address" },
        { id: "donationAmount", placeholder: "Donation Amount" }
    ];

    // Function to clear placeholder text when a field is clicked
    function clearPlaceholder(field) {
        field.addEventListener("focus", function() {
            if (field.value === field.getAttribute("placeholder")) {
                field.value = "";
            }
        });
        field.addEventListener("blur", function() {
            if (field.value === "") {
                field.value = field.getAttribute("placeholder");
            }
        });
    }

    // Function to validate required fields
    function validateForm(fields) {
        for (const fieldInfo of fields) {
            const field = document.getElementById(fieldInfo.id);
            if (!field.value || field.value === fieldInfo.placeholder) {
                alert(`${fieldInfo.placeholder} is required.`);
                field.focus();
                return false; // Prevent form submission
            }
        }
        return true; // Allow form submission
    }

    // Apply placeholder clearing and validation to contact form
    if (contactForm) {
        contactFields.forEach(fieldInfo => {
            const field = document.getElementById(fieldInfo.id);
            field.setAttribute("placeholder", fieldInfo.placeholder);
            clearPlaceholder(field);
        });

        contactForm.addEventListener("submit", function(event) {
            if (!validateForm(contactFields)) {
                event.preventDefault(); // Stop form submission
            }
        });
    }

    // Apply placeholder clearing and validation to donate form
    if (donateForm) {
        donateFields.forEach(fieldInfo => {
            const field = document.getElementById(fieldInfo.id);
            field.setAttribute("placeholder", fieldInfo.placeholder);
            clearPlaceholder(field);
        });

        donateForm.addEventListener("submit", function(event) {
            if (!validateForm(donateFields)) {
                event.preventDefault(); // Stop form submission
            }
        });
    }
});

// Attach validation to the form
document.getElementById('contact-form').addEventListener('submit', validateForm);