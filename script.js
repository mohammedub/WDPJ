function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_nbyad9i", "template_eykgqgk", parms)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        });
}
