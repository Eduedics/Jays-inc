import { useEffect, useState } from "react";

const AccordionData =[
    {
        id:'1',
        question:'do you deliver your services remotely?',
        answer:'yess ...there to provide our clients with every possible help'
    },
    {
        id:'2',
        question:'do you partner with other companies?',
        answer:'yess ..To provide best possible quality output for our client we do colaboration.'
    },
]

export default function HomeContent() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const[selected,setselected]= useState(null)
   

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
    
    const handlesingleclick = (currentId)=>{
        setselected(currentId === selected ? null : currentId)
    }
    // darkmode
    const [darkmode,setDarkMode] =useState(false)
        
    useEffect(()=>{
        const savedThemes = localStorage.getItem('theme')
        if(savedThemes){
            setDarkMode(savedThemes === 'dark')
        }
    },[])
    const changeMode = ()=>{
        setDarkMode(!darkmode)
        localStorage.setItem('theme',!darkmode?'dark':'light')
    }

    useEffect(()=>{
        if(darkmode){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    },[darkmode])
    

    return (
        
        <div className="home-content-container">
            
            <header className="home-header">
                {/* <div className="dark" onClick={changeMode}><div className="light"></div></div> */}
                <button 
                    onClick={changeMode} 
                    className={darkmode ? 'dark-mode-btn' : 'light-mode-btn'}
                >
                    Switch to {darkmode ? 'Light' : 'Dark'} Mode
                </button>
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
            {/* Accordion */}
            <section className="accordion-wrapper">
                <h3>FAQ</h3>
                <div className="accordion">
                    {
                        AccordionData && AccordionData.length > 0?
                        AccordionData.map(dataItem=>
                        <div className="accordionItem" onClick={()=>handlesingleclick(dataItem.id)} key={dataItem.id}>
                            <div className="question">
                                <h4>{dataItem.question}</h4>
                            </div>
                            {
                                selected===dataItem.id ?
                                <div className="answer">
                                    <h4>{dataItem.answer}</h4></div>
                                :null
                            }

                        </div>)
                        :<div>No data found</div>
                    }
                </div>

            </section>
        </div>
    );
}