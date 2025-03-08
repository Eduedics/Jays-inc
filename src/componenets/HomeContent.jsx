export default function HomeContent() {
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
                        <p>Backend & Full-Stack Developer specializes in SpringBoot and Java Programming</p>
                    </div>
                </div>
            </section>
        </div>
    );
}