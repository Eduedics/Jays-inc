export default function About() {
    return (
        <div className="about-content-container">
            <section className="about-overview">
                <h2>About Jays Tech Solution</h2>
                <p>Jays Tech Solution is dedicated to providing innovative technology solutions tailored to client needs. Our team of professionals ensures high-quality development in both frontend and backend technologies.</p>
            </section>
            <section className="services-section">
                <h3>Our Services</h3>
                <ul>
                    <li>IT Support & Consultation</li>
                    <li>Software Development</li>
                    <li>Networking Solutions</li>
                    <li>UI/UX Design</li>
                </ul>
            </section>
            <section className="team-details">
                <h3>Meet Our Team</h3>
                <div className="team-container">
                    <div className="team-member">
                        <h4>Edward Karani Muthii</h4>
                        <p>Backend & Full-Stack Developer specializing in Django & React.</p>
                    </div>
                    <div className="team-member">
                        <h4>Robert Njega</h4>
                        <p>Frontend & UI/UX Designer with expertise in React & CSS frameworks.</p>
                    </div>
                </div>
            </section>
            <section className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: jaystechsolution@hotmail.com</p>
                <p>Phone: +254 939 673 49</p>
            </section>
        </div>
    );
}
