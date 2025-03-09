import { useState } from "react";

export default function HomeContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setError("All fields are required.");
            return;
        }
        
        console.log("Form Submitted:", formData);
        setSubmitted(true);
        setError("");
        setFormData({ name: "", email: "", message: "" }); // Reset form
    };

    return (
        <div className="home-content-container">
            <header className="home-header">
                <h2>Welcome to Jays Tech Solution</h2>
                <p>We build innovative web solutions to resolve tech problems.</p>
            </header>

            <section id="about" className="about-section">
                <h3>Meet Our Team</h3>
                <div className="team-container">
                    <div className="team-member">
                        <h4>Edward Karani Muthii</h4>
                        <p>Backend & Full-Stack Developer specializing in Django & React.</p>
                    </div>
                    <div className="team-member">
                        <h4>Robert Njega</h4>
                        <p>Backend & Full-Stack Developer specializing in SpringBoot and Java Programming</p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-form">
                <h3>Contact Us</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    />
                    {error && <p className="error-message">{error}</p>}
                    {submitted && <p className="success-message">Message sent successfully!</p>}
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </div>
    );
}