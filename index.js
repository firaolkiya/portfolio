var typed = new Typed(".typing", {
    strings: ["software engineer", "Mobile App developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

    // Function to send email
    window.sendEmail = function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Sending the email using EmailJS
        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then((response) => {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
    };
});
