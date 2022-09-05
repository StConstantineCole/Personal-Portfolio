const button = document.querySelector('button');
const inputs = document.querySelector('form');
inputs.reset();

button.addEventListener('click', () => {

    // Email is an object ffrom the smptjs libarary
    Email.send({
        // Host: smpt.gmail.com
        // Host: "smtp.mailtrap.io",
        // Username: "290eec57c511c1",
        // Password: "1e898047ca3f7f",
        SecureToken: "8eece3bb-7432-4a97-b08c-654d1d4e725b", //Host, username and password are COMMENTED OUT AND replaced with a secureToken generated at SMTPJS
        To: "vjhbkjnl@ghm.com", //Possible to add more than one recipient separated by a comma
        From: inputs.elements["email"].value,
        Subject: "Email from contact form",
        Body: inputs.elements["message"].value
            + "<br>" + inputs.elements['name'].value
            + "<br>" + inputs.elements['phone'].value
    }).then(msg => alert('Message sent'))
});

function clearFields() {
    inputs.reset();
};