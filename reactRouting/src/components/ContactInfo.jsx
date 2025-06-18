import React from "react";

function ContactInfo() {
    return (
        <div className="ContactInfo">
            <h1 className="Contact">Contact Informations</h1>
            <p><strong>Email:</strong> <a href="mailto:contact@novatechsolutions.com">contact@novatechsolutions.com</a></p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>

            <p>
            <strong>Address:</strong><br />
            NovaTech Solutions<br />
            400 Innovation Drive<br />
            San Francisco, CA 94107<br />
            United States
            </p>
        </div>
    );
}

export default ContactInfo;